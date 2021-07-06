import React, {useState, useEffect, useRef} from 'react'
import {MdClose} from 'react-icons/md'
import s from './style/Popup.module.css'

const Popup = ({title = 'Message', text, onClick = () => {}}) => {

    const [showPopup, setShowPopup] = useState(true)

    const popupRef = useRef()

    const hideModal = (e) => {
        if (!e.path.includes(popupRef.current)) {
           setShowPopup(false)
        }
    }

    const closeHandler = (e) => {
        e.preventDefault()
        setShowPopup(false)
    }

    useEffect(() => {
        document.body.addEventListener('click', hideModal)

        return () => {
            document.body.removeEventListener('click', hideModal)
        }
    }, [])

    return (
        showPopup && (<div className={s.modal}>
            <div className={s.content} ref={popupRef}>
                <div className={s.top}>
                    <h4 className={s.title}>
                        {title}
                    </h4>
                    <button className={s.closeButton} onClick={closeHandler}>
                        <MdClose style={{fontSize: '32px', color: '#4F4F4F'}}/>
                    </button>
                </div>
                <div className={s.text}>
                    <p>
                        {text}
                    </p>
                </div>
                <div className={s.bottom}>
                    <button onClick={closeHandler}>
                        OK
                    </button>
                </div>
            </div>
        </div>)
    )
}

export default Popup