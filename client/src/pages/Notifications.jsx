import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
const Notifications = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div className="w-full bg-[#F9F9F9]">
            <h1 className="px-3 mx-4 my-8 text-xl lg:text-3xl sm:text-2xl  font-semibold border-l-[4px] border-l-[#CABDFF] text-left w-full">Notifications</h1>
            <div className="w-[90%] bg-white flex flex-col items-center justify-center min-h-[80vh] mx-auto">
                <img src="https://res.cloudinary.com/drauu5bdm/image/upload/v1699255329/ghar-veda/Notifications_ryrgpq.svg" alt="" />
                <h1 className="text-xl font-semibold my-3">No Notifications!</h1>
                <p className="w-full text-lg my-3 text-semibold text-gray-500">You don't have any notifications yet. Please place order.</p>
                <button className="w-1/2 lg:w-1/4 my-3 text-md sm:text-lg lg:text-xl text-white font-semibold mx-2 px-4 py-3 rounded-md bg-[#6759FF]"
                    onClick={() => {
                        navigate("/categories")
                        dispatch({ type: "SET_TAB", payload: "home" })
                    }}
                >Find Clinics</button>
            </div>
        </div>
    )
}
export default Notifications