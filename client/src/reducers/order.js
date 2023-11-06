const INITIAL_STATE = {
    processing: false,
    orders: []
}

const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "PROCESSING":
            return ({ ...state, processing: true })
        case "GET_ORDERS":
            return ({ ...state, orders: action.payload, processing: false })
        default:
            return state
    }
}
export default orderReducer