import React, { useState } from 'react'
import { AiOutlineSearch, AiFillHome, AiFillMessage } from 'react-icons/ai'
import { BsFillPeopleFill, BsFillBriefcaseFill } from 'react-icons/bs'
import { MdNotifications } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

import s from './style/Header.module.css'

function Header() {

    const [menuItems] = useState([
        { id: 1, title: 'Home', icon: <AiFillHome className={s.menu__item__icon} />, url: '/home' },
        { id: 2, title: 'Network', icon: <BsFillPeopleFill className={s.menu__item__icon} />, url: '/network' },
        { id: 3, title: 'Vacancies', icon: <BsFillBriefcaseFill className={s.menu__item__icon} />, url: '/vacancies' },
        { id: 4, title: 'Messages', icon: <AiFillMessage className={s.menu__item__icon} />, url: '/messages' },
        { id: 5, title: 'Notifications', icon: <MdNotifications className={s.menu__item__icon} />, url: '/notifications' }
    ])

    return (
        <div className={s.header}>
            <div className={s.header__wrapper}>
                <div className={s.header__left}>
                    <img className={s.header__left__img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="logo" />
                    <div className={s.header__left__search}>
                        <AiOutlineSearch className={s.search__icon} />
                        <input className={s.search__input} type="text" placeholder="Search" />
                    </div>
                </div>
                <div className={s.header__right}>
                    <nav className={s.menu}>
                        <ul className={s.menu__list}>
                            {menuItems.map(item => (
                                <NavLink to={item.url} className={s.menu__item} activeClassName={s.menu__item__active} key={item.id}>
                                    { item.icon}
                                    <p className={s.menu__item__text}>{item.title}</p>
                                </NavLink>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header