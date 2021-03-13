import React from 'react'
import s from './style/Sidebar.module.css'

function Sidebar() {
    return(
        <div className={s.sidebar}>
            <div className={s.sidebar__top}>
                <img className={s.sidebar__top__cover} src="https://i.pinimg.com/originals/e4/02/59/e4025992f83181ef484b3244aaf21252.jpg" alt="cover" />
                <img className={s.sidebar__top__avatar} src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar" />
                <h2 className={s.sidebar__top__name}>Bacho Usubovi</h2>
                <p className={s.sidebar__top__email}>b@gmail.com</p>
            </div>

            <div className={s.sidebar__stats}>
                <div className={s.sidebar__stat}>
                    <p className={s.sidebar__stat__title}>Who viewed you</p>
                    <p className={s.sidebar__stat__count}>2,717</p>
                </div>
                <div className={s.sidebar__stat}>
                    <p className={s.sidebar__stat__title}>Views on post</p>
                    <p className={s.sidebar__stat__count}>10,719</p>
                </div>
            </div>

            <div className={s.sidebar__recent}>
                <h4 className={s.sidebar__recent__title}>
                    Recent
                </h4>
                <div className={s.sidebar__recent__items}>
                    <div className={s.sidebar__recent__item}>
                        #<span>javascript</span>
                    </div>
                    <div className={s.sidebar__recent__item}>
                        #<span>reactjs</span>
                    </div>
                    <div className={s.sidebar__recent__item}>
                        #<span>html</span>
                    </div>
                    <div className={s.sidebar__recent__item}>
                        #<span>css</span>
                    </div>
                    <div className={s.sidebar__recent__item}>
                        #<span>design</span>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Sidebar