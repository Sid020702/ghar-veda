const Gender = ({ gender, setGender }) => {
    return (
        <div className="flex flex-col items-center pt-5 px-5 bg-white rounded-md w-[90%] lg:w-3/4 -translate-y-8">
            <h1 className="px-3 sm:text-2xl lg:text-3xl my-4 text-xl font-semibold border-l-[4px] border-l-[#CABDFF] text-left w-full">Gender</h1>
            <div className="flex items-center w-full justify-center">
                <div className="cursor-pointer flex flex-col w-1/2 my-4 items-center" onClick={() => { setGender("male") }}>
                    <div style={{ "--image-url": `url('https://res.cloudinary.com/drauu5bdm/image/upload/v1698694325/ghar-veda/male_jtkovu.svg')` }}
                        className={`bg-[image:var(--image-url)] border-2 border-[#D1D3D4] ${gender == "male" ? "border-blue-500 border-4" : ""} rounded-xl p-3 bg-cover bg-center bg-no-repeat aspect-square w-2/5
                         sm:w-1/3 lg:w-1/4 2xl:w-1/6`}
                    >
                    </div>
                    <span className="text-base font-semibold p-2 sm:text-lg lg:text-xl">Male</span>
                </div>
                <div className="cursor-pointer flex flex-col w-1/2 items-center justify-center" onClick={() => { setGender("female") }}>
                    <div style={{ "--image-url": `url('https://res.cloudinary.com/drauu5bdm/image/upload/v1698694325/ghar-veda/male_jtkovu.svg')` }}
                        className={`bg-[image:var(--image-url)] border-2 border-[#D1D3D4] ${gender == "female" ? "border-blue-500 border-4" : ""} rounded-xl p-3 bg-cover bg-center bg-no-repeat aspect-square w-2/5
                        sm:w-1/3 lg:w-1/4 2xl:w-1/6`}>
                    </div>
                    <span className="text-base font-semibold p-2 sm:text-lg lg:text-xl">Female</span>
                </div>
            </div>
        </div>
    )
}
export default Gender