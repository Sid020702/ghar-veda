const Address = ({ address1, address2, address3, setAddress1, setAddress2, setAddress3 }) => {
    return (
        <div className="my-2 py-5 px-3 w-[90%] lg:w-3/4 bg-white">
            <h1 className="px-3 my-4 text-xl font-semibold border-l-[4px] border-l-[#CABDFF] text-left w-full sm:text-2xl lg:text-3xl">Address</h1>
            <input type="text" className="p-3 text-md sm:text-lg lg:text-xl rounded-md w-full border-[#EFEFEF] border-2 my-2" placeholder="Address Line 1"
                onChange={(e) => setAddress1(e.target.value)}
            />
            <input type="text" className="p-3 text-md sm:text-lg lg:text-xl rounded-md w-full border-[#EFEFEF] border-2 my-2" placeholder="Address Line 2"
                onChange={(e) => setAddress2(e.target.value)}
            />
            <input type="text" className="p-3 text-md sm:text-lg lg:text-xl rounded-md w-full border-[#EFEFEF] border-2 my-2" placeholder="Address Line 3"
                onChange={(e) => setAddress3(e.target.value)}
            />
        </div>
    )
}

export default Address