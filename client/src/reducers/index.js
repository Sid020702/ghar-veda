import { combineReducers } from "redux"
import categoryReducer from "./categories"
import clinicReducer from "./clinics"
import orderReducer from "./order"
import userReducer from "./user"
import authReducer from "./auth"
import navReducer from "./nav"
export default combineReducers(
    { categoryReducer, clinicReducer, orderReducer, userReducer, authReducer, navReducer }
)