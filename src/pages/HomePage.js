import React, {useEffect, useCallback, useContext} from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import {useHttp} from "../hooks/useHttp";
import Loader from "../components/Loader";
import Popup from "../components/Popup";

import {useDispatch, useSelector} from 'react-redux'
import {fetchCurrentUser} from "../redux/actions/user";
import {AuthContext} from "../context/authContext";

function HomePage() {

    const dispatch = useDispatch()

    const {request, loading, error} = useHttp()

    const {isAuth, token} = useContext(AuthContext)

    const fetchUser = useCallback(async () => {
        const response = await request(`/auth/get-user/${token}`, 'GET')
        dispatch(fetchCurrentUser(response))
    }, [request, token, dispatch])

    useEffect(() => {
        isAuth && fetchUser()
    }, [isAuth, fetchUser])

    const {user} = useSelector(state => state.currentUser)

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <Popup text={error.message} />
    }

    const styles = {
        content: {
          backgroundColor: '#f3f2ef',
          padding: '0 24px'
        },
        contentWrapper: {
          display: 'flex',
          justifyContent: 'spase-between',
          maxWidth: '1128px',
          margin: '0 auto',
          paddingTop: '45px',
          minHeight: 'calc(100vh - 75px)'
        }
      }

    return (
        <>
            <Header />
            <div className="content" style={styles.content}>
                <div className="content__wrapper" style={styles.contentWrapper}>
                    <Sidebar currentUser={user}/>
                    <Feed currentUser={user}/>
                    <Widgets />
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default HomePage
