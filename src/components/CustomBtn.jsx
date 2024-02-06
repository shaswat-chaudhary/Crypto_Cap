import React from 'react'

export const CustomBtn = ({ iconRight, containerStyles, onClick, type, title }) => {

    return (
        <>
            <button
                onClick={onClick}
                type={type || "button"}
                className={`inline-flex items-center text-base ${containerStyles}`}>

                {title}
                {iconRight && <span className='mt-2'>{iconRight}</span>}

            </button>
        </>
    )
}
