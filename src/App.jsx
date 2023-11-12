import { useEffect } from "react";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import Detail from "./pages/detail";
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    getToken()  
  }, [])
  function getToken() {
    (localStorage.getItem("token")) ? setIsLogin(true): setIsLogin(false)
  }
  return (
    <div className="w-full h-screen bg-slate-400 p-5 text-white">
      <Routes>
        <Route path="/" element={isLogin ? <Home /> : <Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
