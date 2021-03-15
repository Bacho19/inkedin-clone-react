import React, { useState } from 'react'
import InputOption from '../InputOption'
import { BiLike, BiCommentDetail, BiShareAlt, BiSend } from 'react-icons/bi'
import s from './style/Post.module.css'

function Post({ name, description, message, photoUrl }) {

    const [buttons] = useState([
        {id: 1, title: 'Like', icon: <BiLike style={{color: '#999'}} />},
        {id: 2, title: 'Comment', icon: <BiCommentDetail style={{color: '#999'}} />},
        {id: 3, title: 'Share', icon: <BiShareAlt style={{color: '#999'}} />},
        {id: 4, title: 'Send', icon: <BiSend style={{color: '#999'}} />}
    ])

    return (
        <div className={s.post}>
            <div className={s.post__header}>
                <img className={s.post__profilePhoto} src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" alt="avatar" />
                <div className={s.post__info}>
                    <h2>
                        { name }
                    </h2>
                    <p>
                        { description }
                    </p>
                </div>
            </div>

            <div className={s.post__body}>
                <p>
                    { message }
                </p>
            </div>

            <div className={s.post__buttons}>
                { buttons.map( item => {
                    return <InputOption icon={ item.icon } title={ item.title } key={ item.id } />
                } ) }
            </div>
        </div>
    )
}

export default Post