import React, { createContext, useEffect, useState } from 'react'
import { instance } from '../config.axios'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    instance.defaults.withCredentials = true

    const [User, setUser] = useState({
        logged: null,
        load: true,
        id: ''
    })

    let history = useHistory()

    const refreshToken = async () => {
        try {
            const res = await instance.get('/auth/verify')
            const data = await res.data
            console.log(data)
            setUser({ username: data.username, id: data.id, logged: true, load: false })
        } catch (error) {
            logout()
            history.push('/signin')
        }
    }
    useEffect(() => {
        instance.defaults.withCredentials = true
        let path = history.location.pathname
        if (path === '/signin' || path === '/signup') {
            return;
        }
        refreshToken()
        // eslint-disable-next-line
    }, [])

    const logout = () => (
        <button onClick={_ => {
            Cookie.remove('refresh_token', { sameSite: 'None' })
            instance.get('/auth/logout').then(res => {
                history.push('/signin')
            })
        }} className="btn btn-danger w-100 waves-effect waves-light" type="submit">Logout</button>
    )

    return (
        <AuthContext.Provider value={{ refreshToken, User, setUser, logout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
