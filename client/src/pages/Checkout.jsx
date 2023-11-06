import react from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from "react"
import Counter from "../components/Counter/counter"
import Editor from "../components/Editor/editor"
import Checkout from "../components/Checkout/checkout"
import Address from "../components/Address/address"
import Gender from "../components/Gender/gender"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getClinics } from "../actions/shop"
const CheckoutPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getClinics(catId))
    }, [])
    const params = useParams()
    const { clinId, catId } = params
    const clinics = useSelector(state => state.clinicReducer.clinics)
    const clinic = clinics.find(clinic => clinic._id.toString() === clinId.toString())
    const price = clinic?.services[0].price
    const [age, setAge] = useState(18)
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [address3, setAddress3] = useState("")
    const [gender, setGender] = useState(null)
    const [ongoing, setOngoing] = useState(0)
    const [desc, setDesc] = useState("")
    const [book, setBook] = useState(false)
    const [date, setDate] = useState({})
    const [time, setTime] = useState({})
    const catName = useSelector(state => state.clinicReducer.category.name)
    const catUrl = useSelector(state => state.clinicReducer.category.imageUrl)
    return (
        <div className="w-full flex flex-col items-center">
            <div style={{ "--image-url": `url(${catUrl})` }}
                className=" w-full bg-[image:var(--image-url)] bg-gray-700 bg-contain bg-center bg-no-repeat aspect-[3/2] md:aspect-[2/1] lg:aspect-[3/1] 2xl:aspect-[5/1]  relative">
                <div className="w-1/2 absolute bottom-14">
                    <div className="w-max mx-3 flex items-center px-2 rounded-xl sm:text-xl md:text-2xl  bg-[#FB9450]">
                        <img src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698696055/ghar-veda/star-2_rrjezt.svg" alt="" />
                        <span className=" text-white font-bold mx-2">4.5</span>
                    </div>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl text-left w-full px-3 font-bold">{catName} Service</h1>
                </div>
            </div>
            <Gender gender={gender} setGender={setGender} />
            <Counter title="Age" count={age} setCount={setAge} low={10} high={80} />
            <Counter title="Number of Previous / Ongoing Treatments" count={ongoing} setCount={setOngoing} low={0} high={10} />
            <Address address1={address1} address2={address2} address3={address3} setAddress1={setAddress1} setAddress2={setAddress2} setAddress3={setAddress3} />
            <Editor desc={desc} setDesc={setDesc} />
            <Checkout date={date} setDate={setDate} time={time} setTime={setTime} book={book} setBook={setBook}
                catId={catId} clinId={clinId} price={price} age={age} line1={address1} line2={address2}
                line3={address3} desc={desc} ongoing={ongoing} gender={gender}
            />
        </div>
    )
}

export default CheckoutPage