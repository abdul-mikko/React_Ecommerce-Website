import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/original.svg";
import { connect } from "react-redux";
import ToggleCartHidden from "../../redux/cart/Cart.Action";
import "./cart-icon.styles.scss";

const CartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
