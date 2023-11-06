import Greeting from "../components/Greeting/greeting"
import CategoryOverview from "../components/Category-Overview/category-overview"
import ServicesOverview from "../components/Services-Overview/services-overview"
import OfferOverview from "../components/Offer-Overview/offer-overview"
import Prescription from "../components/Prescription/prescription"
const Home = () => {
    return (
        <div className=" w-full flex flex-col items-center pb-5">
            <Greeting />
            <CategoryOverview />
            <ServicesOverview />
            <OfferOverview />
            <Prescription />
        </div>
    )
}
export default Home