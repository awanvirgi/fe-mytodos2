import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logoutIcon from '../assets/logout.svg'
import Card from "../components/card"
import { addTodo, editTodo, getAllTodo } from '../redux/reducers/todo-reducers'
function Home() {
    const dispatch = useDispatch()
    const { todos, isLoading,editprops } = useSelector((state) => state.todo)
    const [input, setInput] = useState({
        title: "",
        detail: ""
    })
    useEffect(() => {
        dispatch(getAllTodo())
    }, [])
    useEffect(() => {
        setInput({
            title:editprops.title,
            detail:editprops.detail
        })
    }, [editprops])
    const handleInput = (event) => {
        event.preventDefault()
        let regex = /[%$^@]/;
        if (!input || regex.test(input)) return alert("Mohon isi form dengan benar")
        if (editprops.title === "") {
            let newTodo = {
                title: input.title,
                detail: input.detail,
            }
            dispatch(addTodo(newTodo))
        } else {
            let EditTodo = {
                id: editprops.id,
                title: input.title,
                detail: input.detail,
            }
            dispatch(editTodo(EditTodo))
        }
        setInput({
            title: "",
            detail: ""
        })
    }
    console.log(todos)  
    return (
        <div>
            <div className="h-8 flex justify-end">
                <img src={logoutIcon} alt="" srcset="" />
            </div>
            <div className="text-4xl font-black mb-10">
                <h1>My Todo App</h1>
            </div>
            <form action="">
                <div className="flex flex-col mb-3">
                    <label htmlFor="title" className="text-2xl font-black mb-3">Judul Todo</label>
                    <input type="text" name="title" id="" className="text-black px-3 font-semibold h-10 rounded"
                        value={input.title}
                        onChange={(e) => setInput({ ...input, title: e.target.value })}
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="title" className="text-2xl font-black mb-3">Detail</label>
                    <textarea name="" id="" cols="30" rows="4" className="text-black p-3 font-semibold rounded"
                        value={input.detail}
                        onChange={(e) => setInput({ ...input, detail: e.target.value })}
                    />
                </div>
                <div className="flex flex-col mt-10 mb-3">
                    <button type="submit" className="text-xl font-black p-3 border-4 rounded-2xl" onClick={handleInput}>{editprops.title ? "Edit Todo" : "Buat Todo"} </button>
                </div>
            </form>

            <div className="text-2xl font-black mb-4">
                <h1>List Todo</h1>
            </div>
            <div className="p-1 bg-white">
                {!isLoading ? todos ?
                    todos.map((item) => (
                        <Card key={item.id} title={item.title} detail={item.detail} status={item.status} id={item.id} />
                    )) : (
                        <div className="text-center text-black">Ayo mulai! Buat to-do list pertamamu dan nikmati setiap langkah menuju produktivitas</div>
                    ) :
                    <div className="text-center">Loading ...</div>

                }
            </div>

        </div>
    )
}
export default Home