import React from "react";

const Prescription = () => {
    return (
        <div className="w-[90%] bg-white my-2 rounded-lg flex flex-col justify-around p-2 py-5 relative">
            <span className="w-1/2 px-2 text-left font-semibold text-xl md:text-3xl  border-l-4 border-solid border-[#CABDFF]">Ayurvedic Prescription</span>
            <div className="rounded-xl bg-white  flex w-[91%] lg:w-1/2 mx-2 mt-7 shrink-0 flex-col justify-start ">
                <h1 className="text-left font-semibold m-3 md:text-lg">Offer Aroma Therapy</h1>
                <h1 className=" font-bold text-5xl text-left mx-3 z-10">Get 25%</h1>
                <button className=" bg-white rounded-3xl w-max p-2 px-4 m-2 my-5 text-[#A492EB] md:text-lg">Grab Offer &#x3e;</button>
                <img
                    className="absolute w-[1/2] bottom-0 right-0 "
                    src="https://res.cloudinary.com/drauu5bdm/image/upload/v1698484632/ghar-veda/Patanjali_hnebqn.png" alt="" />
            </div>

        </div>
    )
}

export default Prescription