import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { getTodoByid } from "../redux/reducers/todo-reducers"

function Detail() {
    const dispatch = useDispatch()
    const { todos, isLoading, editprops } = useSelector((state) => state.todo)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getTodoByid(id))
    }, [])
    console.log(todos)
    return (
        <div>
            <div className="text-left mb-4">
                <NavLink className="font-bold text-xl" to={"/"}>
                    ⬅️ Kembali
                </NavLink>
            </div>
            <div className="text-center  mb-10 flex flex-col gap-10">
                <h1 className="text-4xl  font-black">Detail Todo</h1>
                <h2 className="text-2xl  font-black">Titile : {todos[0].title}</h2>
                <div>
                    <h2 className="text-2xl  font-black">Detail Todo :</h2>
                    <h2 className="text-2xl  font-black">{todos[0].detail}</h2>
                </div>
                <h2 className="text-2xl  font-black">Status : {todos[0].status?"Sudah Selesai":"Belum Selesai"}</h2>

            </div>
        </div>
    )
}
export default Detail