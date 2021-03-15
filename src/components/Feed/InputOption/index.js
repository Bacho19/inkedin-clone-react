import React from 'react'
import s from './style/InputOption.module.css'

function InputOption({ icon, title }) {
    return (
        <div className={s.feed__input__option}>
            { icon}
            <p className={s.feed__input__option__text}>{ title }</p>
        </div>
    )
}

export default InputOption
