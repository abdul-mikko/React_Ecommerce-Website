import CartactionTypes from "./Cart.types";
import { addItemToCart } from "./cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartactionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartactionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default CartReducer;
