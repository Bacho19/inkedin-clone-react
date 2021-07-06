import React from 'react'
import './style/Loader.css'

const Loader = () => {
    return (
        <div className="lds-ring__wrapper">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader