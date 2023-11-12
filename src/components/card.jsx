function Card() {
    return (
        <div className="bg-white text-black">
            <div className="p-2 border-b-4 border-slate-600 flex justify-between">
                <div className="h-10 aspect-square border-2 border-black text-center text-xl font-bold">
                    √
                </div>
                <div className="text-xl font-bold grow flex items-center px-4">
                    yey
                </div>
                <div className="h-10 flex gap-3">
                    <button className="border-4 border-red-400 h-full aspect-square">❌</button>
                    <button className="border-4 border-green-400 h-full aspect-square">✏️</button>
                </div>
            </div>
        </div>
    )
}
export default Card