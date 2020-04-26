import React from "react";
import CollectionMenuItem from "../Collection-menu-item/Collection-menu-item-component";
import "./collection-preview.styles.scss";

const ShopHomePage = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionMenuItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ShopHomePage;
