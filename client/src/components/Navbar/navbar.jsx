import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
const Navbar = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.userReducer.currentUser)
    const tab = useSelector(state => state.navReducer.tab)
    const location = useLocation()
    const path = location.pathname
    if (path === "/bookings") {
        dispatch({ type: "SET_TAB", payload: "bookings" })
    }
    if (path === "/notifications") {
        dispatch({ type: "SET_TAB", payload: "notifications" })
    }
    const navigate = useNavigate()

    const handleClick = () => {
        if (currentUser) {
            dispatch({ type: "LOGOUT" })
            dispatch({
                type: "SET_CURRENT_USER",
                payload: null
            })
            dispatch({ type: "SET_TAB", payload: "home" })

            navigate("/auth")
        }
        else {
            navigate("/auth")
        }
    }
    return (
        <div className=" h-[7vh]  bg-white w-full flex items-center justify-evenly md:justify-normal mb-2 relative">
            <div className="w-[7%] md:mx-5 2xl:mx-2   cursor-pointer" onClick={() => {
                navigate("/")
                dispatch({ type: "SET_TAB", payload: "home" })
            }}>
                <img
                    src={`${tab == "home" ? "https://res.cloudinary.com/drauu5bdm/image/upload/v1698484627/ghar-veda/Home_active.svg" : "https://res.cloudinary.com/drauu5bdm/image/upload/v1699182232/Home_tgiydi.svg"}`}
                    className=" xl:w-1/4 2xl:m-auto " alt="">
                </img>
            </div>
            <div className="w-[7%] md:mx-5 2xl:mx-2 cursor-pointer" onClick={() => {
                if (currentUser) {
                    navigate("/bookings")
                    dispatch({ type: "SET_TAB", payload: "bookings" })
                }
            }}>
                <img
                    src={`${tab == "bookings" ? "https://res.cloudinary.com/drauu5bdm/image/upload/v1699182135/bookings-active_xxitx4.svg" : "https://res.cloudinary.com/drauu5bdm/image/upload/v1698484631/ghar-veda/Bookings.svg"}`}
                    className=" xl:w-1/4 2xl:m-auto" alt="">
                </img>
            </div>
            <div className="w-[7%] md:mx-5 2xl:mx-2 cursor-pointer" onClick={() => {
                if (currentUser) {
                    navigate("/notifications")
                    dispatch({ type: "SET_TAB", payload: "notifications" })
                }
            }}>
                <img
                    src={`${tab == "notifications" ? "https://res.cloudinary.com/drauu5bdm/image/upload/v1699182462/Notification_active_jikbh8.svg" : "https://res.cloudinary.com/drauu5bdm/image/upload/v1698484627/ghar-veda/Notification_lcngwz.svg"}`}
                    className=" xl:w-1/4 2xl:m-auto" alt="">
                </img>
            </div>
            {/* <div className="w-[7%] md:hidden cursor-pointer">
                <img
                    src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698484635/ghar-veda/Menu_kij12e.svg"
                    className="" alt="">
                </img>
            </div> */}
            {/* <div className="hidden md:flex items-center w-1/4 2xl:w-1/5  absolute right-10 rounded-md border-[#D5D5D5D5] border-2 bg-white text-[#9B9E9F] " >
                <input className=" font-semibold w-[90%]  p-2 rounded-md" type="text" placeholder="Search" />
            </div> */}
            <button className="items-center px-4 py-1 2xl:text-lg text-sm font-semibold bg-blue-500 hover:bg-blue-800  md:absolute right-10 rounded-md text-white" onClick={handleClick}>{currentUser ? "Log Out" : "Log In"}</button>

        </div >
    )
}

export default Navbar