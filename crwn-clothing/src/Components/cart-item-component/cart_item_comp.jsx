import React from "react";
import "./cart_item_comp.scss";

export const CartItemsComp = ({
  item: { quantity, imageUrl, price, name },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
