import React from "react";
import { useSelector } from "react-redux"
const Greeting = () => {

    const currentUser = useSelector(state => state.userReducer.currentUser)
    const name = currentUser?.result?.name
    return (
        <div className=" w-[90%] rounded-lg bg-white flex flex-col my-2">
            {
                currentUser ? (
                    <span className=" text-[#666C89] font-semibold text-sm md:text-base p-2 mx-2 mt-2 tracking-widest text-left">HELLO {name.split(" ")[0].toUpperCase()}👋</span>
                ) : <></>

            }
            <h1 className=" text-3xl md:text-4xl font-bold text-left px-2 mb-2 mx-2">What are you looking for today</h1>
            <div className="flex md:w-1/2 items-center m-5 rounded-md border-[#D5D5D5D5] border-2 bg-white text-[#9B9E9F] " >
                <input className=" w-4/5 p-2 rounded-md" type="text" placeholder="Search for ayurvedic clinics" />
            </div>
        </div>
    )
}
export default Greeting