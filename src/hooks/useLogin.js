import {useState, useEffect, useCallback} from 'react'

export const useLogin = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)

    const localStorageName = 'userData'

    const login = useCallback((jwtToken, userId) => {
        setToken(jwtToken)
        setUserId(userId)
        localStorage.setItem(localStorageName, JSON.stringify({
            token: jwtToken, id: userId
        }))

    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(localStorageName)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(localStorageName))

        if (data && data.token) {
            login(data.token, data.id)
        }

        setReady(true)

    }, [login, logout])

    return {token, userId, ready, login, logout}
}