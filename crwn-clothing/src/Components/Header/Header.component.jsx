import React from "react";
import "./header.styles.scss";
import { auth } from "../../Firebase/Firebase_Util";
import CartIcon from "../cart/cart-item-component";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./original.svg";
import { connect } from "react-redux";
import CartDropdow from "../cart-dropdown/cart-dropdown.comp";
const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        {" "}
        <Logo className="logo" />{" "}
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          ABOUT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdow />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
