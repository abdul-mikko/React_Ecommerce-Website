import { combineReducers } from "redux";
import userReducer from "./user/user_reducer_comp";
import CartReducer from "../redux/cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: CartReducer,
});
