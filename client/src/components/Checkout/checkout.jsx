import DatePicker from "../DatePicker/date-picker"
import TimePicker from "../TimePicker/time-picker"
import { postOrder } from "../../actions/shop"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
const Checkout = ({ clinId, catId, book, gender, setBook, price, line1, line2, line3, desc, ongoing, age, date, setDate, time, setTime }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const processing = useSelector(state => state.orderReducer.processing)
    const currentUser = useSelector(state => state.userReducer.currentUser)
    const handleSubmit = () => {
        if (currentUser === null) {
            navigate("/login")
            return
        }
        if (gender == null) {
            alert("Select your gender")
            return
        }
        if (Object.keys(date).length == 0) {
            alert("Choose a date")
            return
        }
        if (Object.keys(time).length == 0) {
            alert("Choose a time")
            return
        }
        if (line1 == "" || line2 == "") {
            alert("Enter your address in 2 lines")
            return
        }
        const orderData = {
            price,
            gender,
            age,
            ongoing,
            address: {
                line1,
                line2,
                line3,
            },
            desc,
            date,
            time
        }
        dispatch(postOrder(orderData, catId, clinId, navigate))
    }
    return (
        <div className={`w-full bg-white p-3 flex flex-col ${book ? "fixed bottom-0" : ""} z-10`}>
            <div className={`${book ? "flex" : "hidden"} w-full bg-white flex-col`}>
                <div className="flex items-center justify-between">
                    <h1 className="px-3 my-4 text-xl lg:text-3xl sm:text-2xl  font-semibold border-l-[4px] border-l-[#CABDFF] text-left w-full">Select your Date & Time</h1>
                    <span className="px-3 sm:text-xl py-2 font-bold rounded-full bg-[#EFEFEF] cursor-pointer"
                        onClick={() => { setBook(false) }}>
                        X
                    </span>
                </div>
                <DatePicker setDate={setDate} />
                <TimePicker setTime={setTime} />
            </div>
            <div className="flex items-center w-full">
                <span className="text-md text-[#6F767E] sm:text-lg md:text-xl lg:text-2xl lg:ml-10">Total:</span>
                <span className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl ">&nbsp;INR {price}</span>
                <span className="text-md ml-auto text-[#FC944D] sm:text-lg md:text-xl lg:text-2xl">Bill Details ^</span>
            </div>
            <div className="w-full my-3 flex items-center justify-center">
                <button className="w-1/2 lg:w-1/4 text-md sm:text-lg lg:text-xl font-semibold mx-2 px-4 py-3 rounded-md bg-[#FCFCFC] border-2 border-[#EFEFEF]">Save Draft</button>
                <button className="w-1/2 lg:w-1/4 text-md sm:text-lg lg:text-xl text-white font-semibold mx-2 px-4 py-3 rounded-md bg-[#6759FF]"
                    onClick={() => {
                        if (!book) {
                            setBook(true)
                        }
                        else {
                            handleSubmit()
                        }
                    }
                    }
                >{
                        processing ? "Processing..."
                            :
                            "Book Now"
                    }
                </button>
            </div>
            <div className="w-full bg-black"></div>
        </div>
    )
}

export default Checkout