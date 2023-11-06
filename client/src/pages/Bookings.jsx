import { useSelector } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import Booking from "../components/Booking/booking"
const BookingPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const orders = useSelector(state => state.orderReducer.orders)
    const [tab, setTab] = useState("upcoming")
    return (
        <div className="w-full">
            <h1 className="px-3 mx-4 my-8 text-xl lg:text-3xl sm:text-2xl  font-semibold border-l-[4px] border-l-[#CABDFF] text-left w-full">Bookings</h1>
            <div className="w-[90%] mx-auto flex flex-col bg-[#F9F9F9]">
                <div className="flex w-full bg-white p-4 rounded-md items-center justify-evenly">
                    <div className={`cursor-pointer text-lg w-1/3 p-3 text-[#6759FF] font-semibold rounded-md ${tab === "upcoming" ? "bg-[#e5e3ff]" : ""}`}
                        onClick={() => { setTab("upcoming") }}
                    >Upcoming</div>
                    <div className={`cursor-pointer text-lg w-1/3 p-3 rounded-md text-[#6759FF] font-semibold  ${tab === "history" ? "bg-[#e5e3ff]" : ""}`}
                        onClick={() => { setTab("history") }}
                    >History</div>
                    <div className={`cursor-pointer text-lg w-1/3 p-3 rounded-md text-[#6759FF] font-semibold  ${tab === "draft" ? "bg-[#e5e3ff]" : ""}`}
                        onClick={() => { setTab("draft") }}
                    >Draft</div>
                </div>
                {
                    orders.length > 0 ? (
                        orders.map(order => {
                            const { category, clinic, time, date, _id } = order
                            let { hr, min, sec } = time
                            let part = "AM"
                            if (hr == 12) {
                                part = "PM"
                            }
                            if (hr > 12) {
                                hr -= 12
                                part = "PM"
                            }
                            let daysArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
                            let month = daysArray[date.month]
                            let dt = date.date
                            let end = ("0" + (hr + 1) % 12).slice(-2)
                            hr = ("0" + hr).slice(-2)
                            min = ("0" + min).slice(-2)
                            let sched = hr + ":" + min + "-" + end + ":" + min + " " + part + ", " + dt + " " + month
                            if (tab === "upcoming") {
                                return (
                                    <Booking catName={category.name} id={_id} catUrl={category.imageUrl} clinName={clinic.name} sched={sched} />
                                )
                            }
                            else {
                                return <></>
                            }
                        })) : <div className="w-full flex p-5 flex-col items-center justify-center">
                        <img className="my-3" src="https://res.cloudinary.com/drauu5bdm/image/upload/v1699253309/ghar-veda/upcoming_y6y8al.svg" alt="" />
                        <h1 className="text-xl font-semibold my-3">No Upcoming Order</h1>
                        <p className="w-full text-sm my-3 text-semibold text-gray-500">Currently you dont't have any upcoming order. Place and track your orders from here.</p>
                        <button className="w-1/2 lg:w-1/4 my-3 text-md sm:text-lg lg:text-xl text-white font-semibold mx-2 px-4 py-3 rounded-md bg-[#6759FF]"
                            onClick={() => {
                                navigate("/categories")
                                dispatch({ type: "SET_TAB", payload: "home" })
                            }}
                        >View All Services</button>
                    </div>
                }
            </div>
        </div>
    )
}
export default BookingPage