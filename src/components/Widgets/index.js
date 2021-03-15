import React, { useState } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BsFillCircleFill } from 'react-icons/bs'
import s from './style/Widgets.module.css'

function Widgets() {

    const [news] = useState([
        { id: 1, title: 'React is back', description: 'Top news - 1919 readers' },
        { id: 1, title: 'Angular is back', description: 'Web news - 719 readers' },
        { id: 1, title: 'Vue is back', description: 'Frontend news - 987 readers' },
        { id: 1, title: 'Swelte is back', description: 'Backend) news - 357 readers' },
        { id: 1, title: 'Hello is back)', description: 'What?? news - 519 readers' }
    ])

    return (
        <div className={s.widgets}>
            <div className={s.widgets__news}>
                <div className={s.widgets__title}>
                    <h2 className={s.widgets__title__text}>LinkedIn News</h2>
                    <AiFillInfoCircle className={s.widgets__title__icon} />
                </div>
                { news.map(item => (
                    <div className={s.widgets__news__item} key={item.id}>
                        <BsFillCircleFill className={s.widgets__news__item__fillIcon} />
                        <div>
                            <h2 className={s.widgets__title__text__title}>
                                { item.title }
                            </h2>
                            <p className={s.widgets__title__text__desc}>
                                { item.description }
                            </p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Widgets
