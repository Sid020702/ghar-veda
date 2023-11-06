import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoryOverview = () => {
    const navigate = useNavigate()
    const categories = useSelector(state => state.categoryReducer.categories)
    return (
        <div className=" w-[90%] flex-wrap bg-white flex items-center justify-between py-4 md:px-5 my-2 rounded-lg 2xl:px-10 ">
            {
                categories.length > 0 ? categories.slice(0, 5).map(category => (
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                        <img src={category.imageUrl} className=" object-cover md:w-full" alt="" />
                        <span className="w-3/4 font-semibold text-[0.75rem] md:text-base">{category.name}</span>
                    </div>
                ))
                    :
                    <></>
            }
            <div className="flex flex-col items-center justify-center cursor-pointer" onClick={() => navigate("/categories")}>
                <div className=" w-full p-3 rounded-full border-[#ECECEC] bg-[#FAFAFA] border border-solid">
                    <img
                        src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698484629/ghar-veda/More_peqhti.svg"
                        className="md:w-full" alt="" />
                </div>
                <span className="font-semibold text-[0.75rem] md:text-base" >See All</span>
            </div>
        </div>
    )
}

export default CategoryOverview