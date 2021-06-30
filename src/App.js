import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from './routes'
import {useLogin} from "./hooks/useLogin";

function App() {

    const {token} = useLogin()

    const router = useRoutes(!!token)

    return (
        <BrowserRouter>
            <div className="app">
                {router}
            </div>
        </BrowserRouter>
    )
}

export default App
