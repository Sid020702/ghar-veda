import React from "react";
import SearchBar from "../components/Search/Search";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"
const Categories = () => {
    const categories = useSelector(state => state.categoryReducer.categories)
    const location = useLocation()
    const navigate = useNavigate()
    const currentPath = location.pathname
    return (
        <div className="w-full">
            <SearchBar placeholder={"Search Categories"} back={() => { navigate("/") }} />
            <section className="my-5 bg-white w-full flex flex-col items-center justify-center">
                <div className=" w-full my-2">
                    <h1 className="px-2 border-l-[3px] xl:border-l-[5px] w-2/5 text-left mx-3 text-lg md:text-2xl xl:text-3xl font-semibold border-[#CABDFF] ">All Categories</h1>
                </div>
                <div className="flex w-full my-2 items-center justify-between flex-wrap">
                    {
                        categories.length > 0 ? categories.map(category => (
                            <div className="cursor-pointer w-1/3 flex flex-col justify-center items-center my-4" onClick={() => navigate(`${currentPath}/${category._id}`)} >
                                <img src={category.imageUrl} className=" md:w-1/5" alt="" />
                                <span className="w-2/3 font-semibold">{category.name}</span>
                            </div>

                        )) :
                            <></>
                    }
                </div>

            </section>
        </div>
    )
}

export default Categories