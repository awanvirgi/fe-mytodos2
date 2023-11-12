import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import Register from "./pages/register"

function App() {
  return (
    <div className="w-full h-screen bg-slate-400 p-5 text-white">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App
