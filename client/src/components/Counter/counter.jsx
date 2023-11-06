const Counter = ({ count, setCount, title, low, high, setcount }) => {
    return (
        <div className="flex flex-col items-center justify-center w-[90%] lg:w-3/4 bg-white p-4 rounded-md border-b-2 border-[#EEEEEE]">
            <div className="flex items-center w-full">
                <span className="text-base sm:text-xl lg:text-2xl font-semibold text-left w-1/2">{title}</span>
                <div className=" px-2 rounded-lg border-2 border-black ml-auto cursor-pointer" onClick={() => { setCount(count > low ? (count - 1) : low) }}>
                    <span className="text-black text-center text-3xl">-</span>
                </div>
                <div className="p-3  mx-2 text-xl"><span>{count}</span></div>
                <div className="px-2 rounded-lg border-2 border-black cursor-pointer" onClick={() => { setCount(count < high ? (count + 1) : high) }}>
                    <span className="text-black text-3xl">+</span>
                </div>
            </div>
        </div>
    )
}
export default Counter