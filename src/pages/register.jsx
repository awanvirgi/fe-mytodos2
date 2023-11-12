import { NavLink } from "react-router-dom"

function Register() {
    return (
        <div>
            <div className="text-4xl font-black mb-10">
                <h1>Register</h1>
            </div>
            <form action="">
                <div className="flex flex-col mb-3">
                    <label htmlFor="title" className="text-2xl font-black mb-3">Username</label>
                    <input type="text" name="title" id="" className="text-black px-3 font-semibold h-10 rounded" />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="title" className="text-2xl font-black mb-3">Email</label>
                    <input type="text" name="title" id="" className="text-black px-3 font-semibold h-10 rounded" />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="title" className="text-2xl font-black mb-3">Password</label>
                    <input type="password" name="title" id="" className="text-black px-3 font-semibold h-10 rounded" />
                </div>
                <div className="text-right">
                    <NavLink className="underline font-medium" to={"/login"}>
                        Sudah Memilki Akun?
                    </NavLink>
                </div>

                <div className="flex flex-col mt-10 mb-3">
                    <button type="submit" className="text-xl font-black p-3 border-4 rounded-2xl">Buat Akun</button>
                </div>
            </form>
        </div>
    )
}
export default Register