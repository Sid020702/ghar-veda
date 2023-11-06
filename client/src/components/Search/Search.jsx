import React from "react";



const SearchBar = ({ placeholder, back }) => {
    return (
        <div className="w-full  bg-white flex items-center justify-center p-3">
            <div className="flex items-center rounded-2xl p-2 bg-[#FBFBFB] border-2 border-[#F2F2F2] w-[90%] md:w-3/4 xl:w-1/2">
                <div className="bg-[#FBFBFB] mx-2 cursor-pointer " onClick={back}>
                    <img src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698484628/ghar-veda/BackArrow_fcdqos.svg" alt="" />
                </div>
                <input type="text" className="bg-[#FBFBFB] mx-2 lg:text-xl " placeholder={placeholder} />
                <div className="bg-[#6759FF] cursor-pointer rounded-xl p-3 ml-auto">
                    <img src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698484636/ghar-veda/Search_qiv2ou.svg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default SearchBar