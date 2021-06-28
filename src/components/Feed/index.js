import React, { useState } from 'react'
import { HiPencil } from 'react-icons/hi'
import { MdPhoto, MdVideoLibrary, MdEventNote, MdAssignment } from 'react-icons/md'
import InputOption from './InputOption'
import Post from './Post'

import {useSelector, useDispatch} from 'react-redux'
import {addPost} from "../../redux/actions";

import s from './style/Feed.module.css'

function Feed() {

    const dispatch = useDispatch()

    const [options] = useState([
        { id: 1, title: 'Photo', icon: <MdPhoto style={{ color: '#70B5F9' }} /> },
        { id: 2, title: 'Video', icon: <MdVideoLibrary style={{ color: '#E7A33E' }} /> },
        { id: 3, title: 'Event', icon: <MdEventNote style={{ color: '#C0CBCD' }} /> },
        { id: 4, title: 'Write article', icon: <MdAssignment style={{ color: '7FC15E' }} /> }
    ])

    const {posts} = useSelector(state => state.posts)

    const [messageInput, setMessageInput] = useState('')

    function submitPostHandler(e) {
        e.preventDefault()

        const newMessage = {
            name: 'Jack Daniels',
            description: 'asdasdasda',
            message: messageInput,
            photoUrl: ''
        }
        dispatch(addPost(newMessage))

        setMessageInput('')
    }

    return (
        <div className={s.feed}>
            <div className={s.feed__input}>
                <form className={s.feed__input__text} onSubmit={submitPostHandler}>
                    <HiPencil className={s.feed__input__text__icon} />
                    <input type="text" value={messageInput} className={s.feed__input__text__item} onChange={e => setMessageInput(e.target.value)} />
                </form>
                <div className={s.feed__input__options}>
                    {options.map(item => {
                        return <InputOption icon={item.icon} title={item.title} key={item.id} />
                    })}
                </div>
            </div>

            { posts.length ? posts.map(({ id, name, description, message, photoUrl }, index) => (
                <Post
                    key={name + index}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            )): <p className={s.noPosts}>No posts..</p>}

        </div>
    )
}

export default Feed