import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { signup, login } from "../actions/auth"
import { useDispatch } from "react-redux"

const Auth = () => {
    const dispatch = useDispatch()
    const [isSignup, setIsSignup] = useState(true)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        let orders = []
        if (!email || !password) {
            alert("Enter email and password")
        }
        if (isSignup) {
            if (!name) {
                alert("Enter a name to continue")
            }
            dispatch(signup({ name, email, password, orders }, navigate))

        } else {
            dispatch(login({ email, password }, navigate))
        }
    }
    return (
        <div className="flex w-full flex-col items-center p-4">
            <div style={{ '--image-url': "url(https://res.cloudinary.com/drauu5bdm/image/upload/v1699213178/ghar-veda/Main-logo_uvyfng.svg)" }}
                className="w-1/6 md:w-[10%] xl:w-1/12 aspect-square bg-[image:var(--image-url)] bg-cover bg-no-repeat bg-center"
            ></div>
            <h1 className="w-full text-2xl font-bold text-left my-5 md:w-3/4 xl:w-1/2">
                {isSignup ? "Sign Up" : "Login"}
            </h1>
            <form action="" className="w-full my-2 md:w-3/4 xl:w-1/2" onSubmit={handleSubmit}>
                {
                    isSignup && (
                        <>
                            <label htmlFor="Full Name" className="w-full block text-left font-semibold mt-2">Full Name</label>
                            <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Full Name" name="Full Name" className="my-3 w-full p-3 rounded-md bg-[#EFEFEF]" />
                        </>

                    )
                }
                <label htmlFor="Email" className="w-full block text-left font-semibold mt-2">Email</label>
                <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Email" name="Email" className="my-3 w-full p-3 rounded-md bg-[#EFEFEF]" />
                <label htmlFor="Password" className="w-full block text-left font-semibold mt-2">Password</label>
                <input onChange={(e) => { setPassword(e.target.value) }} type="text" placeholder="Password" name="Password" className="my-3 w-full p-3 rounded-md bg-[#EFEFEF]" />
                <button type="submit" className="mt-5 p-4 cursor-pointer font-semibold bg-[#EFEFEF] hover:bg-gray-300 xl:w-1/4 rounded-md w-full">
                    {isSignup ? "Sign Up" : "Login"}
                </button>
            </form>
            {
                isSignup && (
                    <>
                        <span className="text-md text-[#9A9FA5] font-semibold">Aldready have an account?</span>
                    </>
                )
            }
            <span className="text-md cursor-pointer text-blue-500 font-semibold" onClick={() => { navigate(setIsSignup(!isSignup)) }}>{
                isSignup ? "Sign In" : "Sign Up"}
            </span>
        </div>
    )
}

export default Auth