const INITIAL_STATE = {
    clinics: [],
    category: "Loading..."
}

const clinicReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FETCH_CLINICS":
            return { ...state, clinics: action.payload.clinics, category: action.payload.category }
        default:
            return state
    }
}
export default clinicReducer