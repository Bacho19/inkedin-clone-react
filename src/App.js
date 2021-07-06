import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import {useRoutes} from './routes'
import {useLogin} from "./hooks/useLogin";
import {AuthContext} from './context/authContext'

function App() {

    const {token, userId, login, logout} = useLogin()
    const isAuth = !!token
    const router = useRoutes(isAuth)

    return (
        <AuthContext.Provider value={{token, userId, login, logout, isAuth}}>
            <BrowserRouter>
                <div className="app">
                    {router}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
