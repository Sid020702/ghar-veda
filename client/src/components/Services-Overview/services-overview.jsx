import React from "react";


const ServicesOverview = () => {
    const services = [
        {
            name: "Acupuncture",
            imageUrl: "https://res.cloudinary.com/drauu5bdm/image/upload/v1698484528/ghar-veda/Acupuncture_yqyefo.webp"
        },
        {
            name: "Chiropractic",
            imageUrl: "https://res.cloudinary.com/drauu5bdm/image/upload/v1698484627/ghar-veda/Chiro_zariju.webp"
        },
        {
            name: "Spine Basti",
            imageUrl: "https://res.cloudinary.com/drauu5bdm/image/upload/v1698484627/ghar-veda/Spine_fxgiv0.webp"
        },
        {
            name: "Abhyangam",
            imageUrl: "https://res.cloudinary.com/drauu5bdm/image/upload/v1698484468/ghar-veda/Abhyangam_dljea0.webp"
        }
    ]
    return (
        <div className="w-[90%] bg-white my-2 rounded-lg flex flex-col justify-center p-2">
            <div className=" flex justify-between items-center ml-3 md:mb-5">
                <span className="w-1/5 px-2 text-left font-semibold text-xl md:text-3xl  border-l-4 border-solid border-[#CABDFF]">Ayurvedic Services</span>
                <div className=" h-max w-max border bg-[#FAFAFA] px-4 py-2 border-[#ECECEC] rounded-3xl cursor-pointer "><span className="m-auto text-[#6F767E] md:text-xl font-semibold">See All &gt;</span></div>
            </div>
            <div className="flex items-center justify-between overflow-x-scroll my-5">
                {
                    services.map(service => (
                        <div className="rounded-xl flex w-5/12 mx-2 shrink-0 flex-col items-center justify-center lg:w-1/4">
                            <div
                                style={{ '--image-url': `url(${service.imageUrl})` }}
                                className={`rounded-xl w-full h-[18vh] lg:h-[30vh] md:h-[25vh] relative before:bg-[image:var(--image-url)] before:rounded-xl before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:object-fill before:w-full before:h-full  before:top-0 before:left-0 hover:before:opacity-70 cursor-pointer `}>
                            </div>
                            <span className="p-2 font-semibold md:text-xl">{service.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ServicesOverview