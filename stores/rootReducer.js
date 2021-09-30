import { combineReducers } from "redux";

import counter from "./reducers/counter";
import cart from "./reducers/cart";
export default combineReducers({
  counter,
  cart
});
