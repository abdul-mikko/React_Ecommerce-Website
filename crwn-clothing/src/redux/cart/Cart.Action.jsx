import CartactionTypes from "./Cart.types";

const ToggleCartHidden = () => ({
  type: CartactionTypes.TOGGLE_CART_HIDDEN,
});
export default ToggleCartHidden;

export const addItem = (item) => ({
  type: CartactionTypes.ADD_ITEM,
  payload: item,
});
