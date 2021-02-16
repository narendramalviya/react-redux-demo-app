import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
	cakeReducer,
	userReducer,
});
export default rootReducer;
