import React from "react";
import SearchBar from "../components/Search/Search";
import Service from "../components/Service/service";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getClinics } from "../actions/shop";
const SubCategory = () => {
    const navigate = useNavigate()
    const params = useParams()
    const catId = params.id
    const dispatch = useDispatch()
    const clinics = useSelector(state => state.clinicReducer.clinics)
    const categories = useSelector(state => state.categoryReducer.categories)
    const catName = categories.find(category => category._id.toString() === catId)?.name

    useEffect(() => {
        dispatch(getClinics(catId))
    }, [dispatch, catId])

    return (
        <div className="w-full">
            <SearchBar placeholder="Search Clinics" back={() => { navigate("/categories") }} />
            <div className="w-[90%] flex flex-col justify-center m-auto p-5 my-5 rounded-lg bg-white">
                <div className="flex items-center justify-between">
                    <h1 className="px-2 text-lg sm:text-2xl font-semibold border-l-[3px] border-l-[CABDFF]">{catName}</h1>
                    <div className="flex items-center justify-between">
                        <div className=" shadow-md rounded-lg p-2 mr-2">
                            <img src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698566095/ghar-veda/list_z37txk.svg" className=" sm:w-6" alt="" />
                        </div>
                        <div className="bg-[#F7F7F7] rounded-lg p-2">
                            <img src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698566094/ghar-veda/grid_lsjb6q.svg" alt="" className="sm:w-6" />
                        </div>
                    </div>
                </div>
                {
                    clinics.length > 0 ? clinics.map(clinic => (
                        clinic.services.map(({ price, rating, reviews }) => (
                            <Service imageUrl={clinic.imageUrl} price={price} rating={rating} name={clinic.name} reviews={reviews} clinic={clinic._id.toString()} />
                        ))
                    ))
                        :
                        <></>
                }
            </div>

        </div>
    )
}

export default SubCategory