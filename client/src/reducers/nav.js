const navReducer = (state = { tab: "home" }, action) => {
    switch (action.type) {
        case "SET_TAB":
            return ({ ...state, tab: action.payload })
        default:
            return state
    }
}

export default navReducer