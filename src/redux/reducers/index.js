import {combineReducers} from "redux";
import {productRducer} from "./product";
import {userReducer} from "./user";

export const allReducers =  combineReducers({
	products:productRducer,
	user:userReducer
})