import * as api from '../api'
import { getOrders } from './shop'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(authData)
        console.log(data)
        dispatch({ type: 'AUTH', data })
        dispatch({
            type: 'SET_CURRENT_USER',
            payload: JSON.parse(localStorage.getItem('Profile'))
        })
        navigate('/')
    } catch (error) { console.log(error) }
}
export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data })
        dispatch({
            type: 'SET_CURRENT_USER',
            payload: JSON.parse(localStorage.getItem('Profile'))
        })
        dispatch(getOrders())

        navigate('/')
    } catch (error) { console.log(error) }
} 