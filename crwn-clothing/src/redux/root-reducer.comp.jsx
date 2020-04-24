import userReducer from "./user/user_reducer_comp";
import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
});
