import React from 'react'
import { connect } from 'react-redux'
import { AiFillInfoCircle } from 'react-icons/ai'
import { BsFillCircleFill } from 'react-icons/bs'
import s from './style/Widgets.module.css'

function Widgets({ syncNews }) {
    return (
        <div className={s.widgets}>
            <div className={s.widgets__news}>
                <div className={s.widgets__title}>
                    <h2 className={s.widgets__title__text}>LinkedIn News</h2>
                    <AiFillInfoCircle className={s.widgets__title__icon} />
                </div>
                { syncNews.map(item => (
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

const mapStateToProps = state => {
    return {
        syncNews: state.posts.news
    }
}

export default connect(mapStateToProps, null)(Widgets)
