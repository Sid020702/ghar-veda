import React from "react";

const Service = ({ name, imageURL, ...props }) => {
    return (
        <div className="rounded-xl flex w-5/12 mx-2 shrink-0 flex-col items-center justify-center">
            <div style={{ '--image-url': `url(${imageURL})}` }} className={`rounded-xl w-full h-[18vh] relative before:bg-[image:var(--image-urlf))] before:rounded-xl before:bg-no-repeat before:bg-cover before:bg-center before:absolute before:object-fill before:w-full before:h-full  before:top-0 before:left-0 `}>
            </div>
            <span className="p-2 font-semibold">{name}</span>
        </div>
    )
}

export default Service