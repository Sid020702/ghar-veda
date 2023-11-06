import { useLocation, useNavigate } from "react-router-dom"

const Service = ({ imageUrl, rating, price, name, reviews, clinic }) => {
    const location = useLocation()
    const current = location.pathname
    const navigate = useNavigate()
    return (
        <div className="flex w-full my-2 py-2  border-b-2 border-b-[#EFEFEF]">
            <div style={{ '--image-url': `url(${imageUrl})` }} className="cursor-pointer w-2/6 sm:w-1/5 xl:w-[12%] aspect-[9/10] bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat rounded-lg">
            </div>
            <div className="flex flex-col flex-grow pl-3 ">
                <div className="flex w-full items-center">
                    <img src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698566094/ghar-veda/star_ayjk7k.svg" alt="" />
                    <span className="font-bold p-1 text-xs md:text-base">{rating}</span>
                    <span className="font-bold text-xs md:text-base text-[#6F767E]">({reviews})</span>
                    <div className="relative ml-auto [&>div]:hover:block">
                        <img className="md:w-8 cursor-pointer" src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698566094/ghar-veda/more_unav03.svg" alt="" />
                        <div className="bg-[#FBFBFB] p-3 absolute w-max top-[100%] left-0 hidden shadow-md">
                            <span className="my-1 cursor-pointer font-semibold block hover:text-blue-500"
                                onClick={() => { navigate(current + "/book" + clinic) }}
                            >Open in Maps</span>
                            <span className="my-1 font-semibold block hover:text-blue-500 cursor-pointer" onClick={() => { navigate(current + "/book/" + clinic) }}>Go to Booking</span>
                        </div>
                    </div>
                </div>
                <span className="text-sm md:text-lg w-full text-left font-semibold">{name}</span>
                <span className="text-xs md:text-base w-full text-left text-[#9A9FA5] py-1">Starts From</span>
                <span className="bg-[#B5E4CA] rounded-md w-max font-bold text-xs md:text-base px-2 py-1">Rs.{price}</span>
            </div >
        </div >
    )
}

export default Service