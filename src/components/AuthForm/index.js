import React, {useState, useContext, useEffect} from 'react'

import {useInput} from '../../hooks/useInput'
import {useHttp} from '../../hooks/useHttp'

import {AuthContext} from '../../context/authContext'

import s from './style/AuthForm.module.css'
import Popup from "../Popup";
import Loader from "../Loader";


const AuthForm = () => {

    const [modalMessage, setModalMessage] = useState(null)

    const name = useInput('')
    const password = useInput('')

    const {login} = useContext(AuthContext)

    const registerQuery = useHttp()

    useEffect(() => {
        return () => {
            registerQuery.clearError()
        }
    }, [registerQuery])

    const registerHandler = async (e) => {
        try {
            e.preventDefault()

            if (name.value.trim()) {
                const response = await registerQuery.request('/auth/register', 'POST', {
                    name: name.value,
                    password: password.value
                })
                let responseMessage = response.message ? response.message : response
                if (typeof response !== 'string' && typeof response.message !== 'string') {
                    responseMessage = response.errors
                }
                setModalMessage(responseMessage)
                name.setValue('')
                password.setValue('')
            }
        } catch (e) {
            console.log(e)
        }

    }

    const loginQuery = useHttp()

    useEffect(() => {
        return () => {
            loginQuery.clearError()
        }
    }, [loginQuery])


    const loginHandler = async (e) => {
        try {
            e.preventDefault()
            if (name.value.trim()) {

                const response = await loginQuery.request('/auth/login', 'POST', {
                    name: name.value,
                    password: password.value
                })
                const responseMessage = response.token ? null : response
                setModalMessage(responseMessage)
                login(response.token, response.userId)
                name.setValue('')
                password.setValue('')
            }
        } catch (e) {
            console.log(e)
        }
    }

    // useEffect(() => {
    //     setModalMessage(null)
    // }, [])

    if (registerQuery.loading || loginQuery.loading) {
        return <Loader/>
    }

    if (registerQuery.error) {
        return <Popup text={'An error has occurred: ' + registerQuery.error.message}/>
    }

    if (loginQuery.error) {
        return <Popup text={'An error has occurred: ' + loginQuery.error.message}/>
    }

    return (
        <div className={s.form__wrapper}>
            {modalMessage && <Popup text={modalMessage}/>}
            <form className={s.form}>
                <input value={name.value} onChange={name.onChange} type="text" placeholder="Name"/>
                <input value={password.value} onChange={password.onChange} className={s.form__passwordInput}
                       type="password" placeholder="Password"/>
                <button className={s.form__loginBtn} onClick={loginHandler}>Login</button>
                <button className={s.form__registerBtn} onClick={registerHandler}>Register</button>
            </form>
        </div>
    );
};

export default AuthForm;