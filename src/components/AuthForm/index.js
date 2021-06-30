import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom'

import axios from 'axios'

import {useInput} from "../../hooks/useInput";
import {useLogin} from "../../hooks/useLogin";

import s from './style/AuthForm.module.css'


const AuthForm = () => {

    const name = useInput('')
    const password = useInput('')

    const history = useHistory()

    const registerHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post('/auth/register', {name: name.value, password: password.value})
        name.setValue('')
        password.setValue('')
    }

    const {login} = useLogin()

    const loginHandler = async (e) => {
        e.preventDefault()
        const response = await axios.post('/auth/login', {name: name.value, password: password.value})

        login(response.data.token, response.data.userId)
        name.setValue('')
        password.setValue('')
    }

    return (
        <div className={s.form__wrapper}>
            <form className={s.form}>
                <input value={name.value} onChange={name.onChange} type="text" placeholder="Name"/>
                <input value={password.value} onChange={password.onChange} className={s.form__passwordInput} type="password" placeholder="Password"/>
                <button className={s.form__loginBtn} onClick={loginHandler}>Login</button>
                <button className={s.form__registerBtn} onClick={registerHandler}>Register</button>
            </form>
        </div>
    );
};

export default AuthForm;