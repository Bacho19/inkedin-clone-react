import React, {useState, useEffect} from 'react'
import {HiPencil} from 'react-icons/hi'
import {MdPhoto, MdVideoLibrary, MdEventNote, MdAssignment} from 'react-icons/md'
import InputOption from './InputOption'
import Post from './Post'

import {useSelector, useDispatch} from 'react-redux'
import {addPost, fetchPosts} from "../../redux/actions/posts";

import s from './style/Feed.module.css'
import {useHttp} from "../../hooks/useHttp";
import Loader from "../Loader";
import Popup from "../Popup";

function Feed({currentUser}) {

    const dispatch = useDispatch()

    const [options] = useState([
        {id: 1, title: 'Photo', icon: <MdPhoto style={{color: '#70B5F9'}}/>},
        {id: 2, title: 'Video', icon: <MdVideoLibrary style={{color: '#E7A33E'}}/>},
        {id: 3, title: 'Event', icon: <MdEventNote style={{color: '#C0CBCD'}}/>},
        {id: 4, title: 'Write article', icon: <MdAssignment style={{color: '7FC15E'}}/>}
    ])

    const posts = useSelector(state => state.posts.sharedPosts)

    const [messageInput, setMessageInput] = useState('')

    const addPostHttp = useHttp()

    const submitPostHandler = async (e) => {
        try {
            e.preventDefault()

            const newMessage = {
                owner: currentUser.name,
                text: messageInput
            }

            const response = await addPostHttp.request('/posts', 'POST', newMessage)

            dispatch(addPost(response.post))

            setMessageInput('')
        } catch (e) {
            console.log(e)
        }
    }

    const fetchPostHttp = useHttp()

    const fetchPostsFromServer = async () => {
        try {
            const response = await fetchPostHttp.request('/posts', 'GET')
            dispatch(fetchPosts(response))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchPostsFromServer()

        return () => {
            fetchPostHttp.clearError()
        }
        // eslint-disable-next-line
    }, [])

    if (fetchPostHttp.loading || addPostHttp.loading) {
        return <Loader/>
    }

    if (fetchPostHttp.error) {
        return <Popup text={fetchPostHttp.error.message}/>
    }

    if (addPostHttp.error) {
        return <Popup text={addPostHttp.error.message}/>
    }

    return (
        <div className={s.feed}>
            <div className={s.feed__input}>
                <form className={s.feed__input__text} onSubmit={submitPostHandler}>
                    <HiPencil className={s.feed__input__text__icon}/>
                    <input type="text" value={messageInput} className={s.feed__input__text__item}
                           onChange={e => setMessageInput(e.target.value)}/>
                </form>
                <div className={s.feed__input__options}>
                    {options.map(item => {
                        return <InputOption icon={item.icon} title={item.title} key={item.id}/>
                    })}
                </div>
            </div>

            {posts?.length ? posts.map(({_id, owner, text}) => (
                <Post
                    key={_id}
                    name={owner}
                    description={''}
                    message={text}
                    photoUrl={''}
                />
            )) : <p className={s.noPosts}>No posts..</p>}

        </div>
    )
}

export default Feed