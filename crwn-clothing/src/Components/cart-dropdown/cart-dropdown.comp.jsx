import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CustomButton from "../Custom_Button/Custom_Button_component";
import { CartItemsComp } from "../cart-item-component/cart_item_comp";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItemsComp key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton> GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
