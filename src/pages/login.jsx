import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleLogin = async (event) => {
        event.preventDefault()
        const { data } = await axios.post("http://localhost:3000/auth/login", user)
        if (data.data.user) {
            navigate(`/`)
        }
        localStorage.setItem("token", data.data.token)
        localStorage.setItem("userId", data.data.user)
        setUser({ email: "", password: "" })
    }
    return (
        <div>
            <div className="text-4xl font-black mb-10">
                <h1>Login</h1>
            </div>
            <form action="">
                <div className="flex flex-col mb-3">
                    <label htmlFor="email" className="text-2xl font-black mb-3">Email</label>
                    <input type="text" name="email" id="email" className="text-black px-3 font-semibold h-10 rounded"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="pass" className="text-2xl font-black mb-3">Password</label>
                    <input type="password" name="pass" id="pass" className="text-black px-3 font-semibold h-10 rounded" 
                    value={user.password} 
                    onChange={(e) => setUser({...user,password:e.target.value})}
                    />
                </div>
                <div className="text-right">
                    <NavLink className="underline text-right font-medium" to={"/register"}>
                        Belum Memilki Akun?
                    </NavLink>
                </div>
                <div className="flex flex-col mt-10 mb-3">
                    <button type="submit" className="text-xl font-black p-3 border-4 rounded-2xl" onClick={handleLogin}>Masuk</button>
                </div>
            </form>
        </div>
    )
}
export default Login