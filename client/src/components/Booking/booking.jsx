const Booking = ({ clinName, catName, catUrl, sched, id }) => {
    return (
        <div className="flex flex-col w-full my-3 p-3 border-b-2 bg-white rounded-md border-b-[#EFEFEF]">
            <div className="flex items-center w-full border-b-2 border-b-[#EFEFEF]">
                <div style={{
                    '--image-url': `url(${catUrl})`
                }}
                    className=" w-1/5 md:w-1/6 lg:w-1/12 m-4 aspect-square rounded-full bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat">

                </div>
                <div className="flex flex-col w-full lg:mx-10">
                    <h1 className="text-lg md:text-2xl px-3 font-semibold text-left w-full">{catName}</h1>
                    <h1 className="text-sm md:text-lg px-3 text-gray-500 text-left w-full">Reference Code: #{id}</h1>
                </div>
            </div>
            <div className="w-full py-3 flex flex-col lg:px-10">
                <div className="flex items-center justify-between">
                    <span className=" text-gray-500 md:text-lg font font-semibold">Status</span>
                    <span className="p-1 rounded-md md:text-lg bg-[#dcefe5] font-semibold text-[#7FC09C]">Confirmed</span>
                </div>
                <div className="flex items-center my-3 w-full" >
                    <div className="border-2 border-[#F5F5F5] p-2 rounded-full ">
                        <img src="https://res.cloudinary.com/drauu5bdm/image/upload/v1699205483/ghar-veda/Calendar_kka6n2.svg"
                            className=" md:w-10" alt="" />
                    </div>
                    <div className="flex flex-col mx-5">
                        <span className="text-sm md:text-lg font-semibold w-full text-left">{sched}</span>
                        <span className="w-full md:text-lg text-sm text-gray-500 font-semibold text-left">Schedule</span>
                    </div>
                </div>
                <div className="flex items-center w-full" >
                    <div className="rounded-full ">
                        <img className=" md:w-[60px]" src="https://res.cloudinary.com/drauu5bdm/image/upload/v1699206865/ghar-veda/48_place_holder_saswub.svg" alt="" />
                    </div>
                    <div className="flex flex-col mx-5">
                        <span className="text-sm md:text-lg font-semibold w-full text-left">{clinName}</span>
                        <span className="w-full text-sm md:text-lg text-gray-500 font-semibold text-left">Katpadi</span>
                    </div>
                    <div className="px-4 py-3 md:w-1/5 cursor-pointer text-md text-white rounded-lg font-semibold ml-auto bg-[#6759FF]">&#x260F;&nbsp;Call</div>
                </div>

            </div>
        </div>
    )
}

export default Booking