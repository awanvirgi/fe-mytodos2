import logoutIcon from '../assets/logout.svg'
import Card from "../components/card"
function Home() {
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
                    <input type="text" name="title" id="" className="text-black px-3 font-semibold h-10 rounded" />
                </div>
                <div className="flex flex-col mb-3">
                    <label htmlFor="title" className="text-2xl font-black mb-3">Detail</label>
                    <textarea name="" id="" cols="30" rows="4" className="text-black p-3 font-semibold rounded"></textarea>
                </div>
                <div className="flex flex-col mt-10 mb-3">
                    <button type="submit" className="text-xl font-black p-3 border-4 rounded-2xl">Buat Todo</button>
                </div>
            </form>

            <div className="text-2xl font-black mb-4">
                <h1>List Todo</h1>
            </div>
            <div className="p-1 bg-white">
                <Card />
            </div>

        </div>
    )
}
export default Home