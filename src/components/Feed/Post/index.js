import React, {useState, useEffect, useRef} from 'react'
import InputOption from '../InputOption'
import {BiLike, BiCommentDetail, BiShareAlt, BiSend} from 'react-icons/bi'
import {MdMoreHoriz} from 'react-icons/md'

import {useSelector} from 'react-redux'

import s from './style/Post.module.css'

function Post({id, name, description, message, deletePostHandler, photoUrl}) {

    const [buttons] = useState([
        {id: 1, title: 'Like', icon: <BiLike style={{color: '#999'}}/>},
        {id: 2, title: 'Comment', icon: <BiCommentDetail style={{color: '#999'}}/>},
        {id: 3, title: 'Share', icon: <BiShareAlt style={{color: '#999'}}/>},
        {id: 4, title: 'Send', icon: <BiSend style={{color: '#999'}}/>}
    ])

    const [showOptions, setShowOptions] = useState(false)
    const optionsRef = useRef()

    const userName = useSelector(({currentUser}) => currentUser.user.name)

    const showOptionsHandler = (e) => {
        e.preventDefault()
        setShowOptions((prev) => !prev)
    }

    const hideOptionsHandler = (e) => {
        if (!e.path.includes(optionsRef.current)) {
            setShowOptions(false)
        }

    }

    useEffect(() => {
        document.body.addEventListener('click', hideOptionsHandler)

        return () => {
            document.body.removeEventListener('click', hideOptionsHandler)
        }
    }, [])

    return (
        <div className={s.post}>
            <div className={s.post__header}>
                <div className={s.post__headerLeft}>
                    <img className={s.post__profilePhoto}
                         src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                         alt="avatar"/>
                    <div className={s.post__info}>
                        <h2>
                            {name}
                        </h2>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
                {name === userName && <div className={s.post__headerRight} ref={optionsRef}>
                    <button className={s.post__headerRight__button} onClick={showOptionsHandler}>
                        <MdMoreHoriz className={s.post__headerRight__icon}/>
                    </button>
                    {showOptions && <div className={s.post__headerRight__menu}>
                        <button className={s.post__headerRight__menu__button} onClick={() => deletePostHandler(id)}>
                            Remove the post
                        </button>
                    </div>}
                </div>}
            </div>

            <div className={s.post__body}>
                <p>
                    {message}
                </p>
            </div>

            <div className={s.post__buttons}>
                {buttons.map(item => {
                    return <InputOption icon={item.icon} title={item.title} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default Post