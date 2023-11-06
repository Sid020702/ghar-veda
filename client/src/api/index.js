import axios from "axios"
const API = axios.create({
    baseURL: "http://localhost:80",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

API.interceptors.request.use(req => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req
})
export const getAllCategories = () => API.get("/shop/categories")

export const getClinics = (catId) => API.get(`/shop/categories/${catId}`)

export const postOrder = (orderData, catId, clinId) => { return API.post(`/shop/categories/${catId}/book/${clinId}`, orderData) }
export const getOrders = () => { return API.get("/shop/bookings") }

export const signUp = (authData) => { return API.post("/auth/signup", authData) }
export const logIn = (authData) => { return API.post("/auth/login", authData) }