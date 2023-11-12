import axios from "axios"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleRegister = async (event) => {
        event.preventDefault()
        await axios.post("http://localhost:3000/auth/regist", user)
            .then(response => {
                console.log('Data:', response.data);
                navigate(`/login`)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <div className="text-4xl font-black mb-10">
                <h1>Register</h1>
            </div>
            <form action="">
                <div className="flex flex-col mb-3">
                    <label htmlFor="username" className="text-2xl font-black mb-3">Username</label>
                    <input type="text" name="username" id="username" className="text-black px-3 font-semibold h-10 rounded"
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })} 
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="email" className="text-2xl font-black mb-3">Email</label>
                    <input type="text" name="email" id="email" className="text-black px-3 font-semibold h-10 rounded" 
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="pass" className="text-2xl font-black mb-3">Password</label>
                    <input type="password" name="pass" id="pass" className="text-black px-3 font-semibold h-10 rounded" 
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <div className="text-right">
                    <NavLink className="underline font-medium" to={"/login"}>
                        Sudah Memilki Akun?
                    </NavLink>
                </div>

                <div className="flex flex-col mt-10 mb-3">
                    <button type="submit" className="text-xl font-black p-3 border-4 rounded-2xl" onClick={handleRegister}>Buat Akun</button>
                </div>
            </form>
        </div>
    )
}
export default Register