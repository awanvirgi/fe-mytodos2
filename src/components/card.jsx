import { useDispatch } from 'react-redux'
import { toggleTodo, getEditTodo, deleteTodo } from "../redux/reducers/todo-reducers"
import { useNavigate } from 'react-router-dom';

function Card({ title, status, detail, id }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handledelet = (event) => {
        event.preventDefault()
        dispatch(deleteTodo(id))
    }
    const handlefinish = (event) => {
        event.preventDefault()
        console.log(id)
        dispatch(toggleTodo(id))
    }
    const handleedit = (event) => {
        event.preventDefault()
        let data = {
            id: id,
            title: title,
            detail:detail,
        }
        dispatch(getEditTodo(data))
    }
    const toDetail = () =>{
        navigate(`/${id}`)
    }
    console.log(status)
    return (
        <div className={`text-black ${(status) ? "bg-slate-800" : "bg-white"}` }>
            <div className="p-2 border-b-4 border-slate-600 flex justify-between">
                <div className="h-10 aspect-square border-2 border-black text-center text-xl font-bold" onClick={handlefinish}>
                    {(!status) ? "" : "✓"}
                </div>
                <div className={`text-xl font-bold grow flex items-center px-4 ${(status) ? "line-through" : ""}`} onClick={toDetail}>
                    {title}
                </div>
                {(!status) ? (
                    <div className="h-10 flex gap-3">
                        <button className="border-4 border-red-400 h-full aspect-square" onClick={handledelet}>❌</button>
                        <button className="border-4 border-green-400 h-full aspect-square" onClick={handleedit}>✏️</button>
                    </div>
                ) : (
                    <div></div>
                )}

            </div>
        </div>
    )
}
export default Card