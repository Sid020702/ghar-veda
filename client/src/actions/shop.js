import * as api from "../api"

export const getAllCategories = () => async (dispatch) => {
    try {
        const { data } = await api.getAllCategories()
        dispatch({ type: "FETCH_CATEGORIES", payload: data })
    } catch (err) {
        console.log(err)
    }
}

export const getClinics = (catId) => async (dispatch) => {
    try {
        const { data } = await api.getClinics(catId)
        const { clinics, category } = data
        dispatch({ type: "FETCH_CLINICS", payload: { clinics, category } })
    } catch (err) {
        console.log(err)
    }
}

export const postOrder = (orderData, catId, clinId, navigate) => async dispatch => {
    try {
        dispatch({ type: "PROCESSING" })
        const { data } = await api.postOrder(orderData, catId, clinId)
        alert(data.message)
        dispatch(getOrders())
        navigate("/")
    } catch (err) {
        console.log(err)
    }
}

export const getOrders = () => async (dispatch) => {
    try {
        const { data } = await api.getOrders()
        const { orders } = data
        dispatch({ type: "GET_ORDERS", payload: orders })
    } catch (err) {
        console.log(err)
    }
}

