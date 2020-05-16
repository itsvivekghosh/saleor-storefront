import React from "react";

import { useCart } from "@sdk/react";

const AddToCartV2: React.FC<{
  disabled: boolean;
  variantId: string;
  largeButtons?: boolean;
}> = ({ disabled, variantId }) => {
  const { addItem, items } = useCart();

  const cartLineForVariant = items && items.find(item => item.variant.id === variantId);
  const currentQuantitty = cartLineForVariant ? cartLineForVariant.quantity : 0;

  if (!currentQuantitty) {
    return (
      <div className="product-description__add-to-cart-v2">
        <button
          className="product-description__add-to-cart-v2__button"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            addItem(variantId, 1);
          }}
          disabled={disabled}
        >
          Add<span> to basket</span>
        </button>
      </div>
    );
  } else {
    return (
      <div className="product-description__add-to-cart-v2 product-description__add-to-cart-v2__update-quantity">
        <button
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            addItem(variantId, -1);
          }}
        >
          -
        </button>
        <span className="quantity">
          {currentQuantitty}
          <span className="quantity-description"> in basket</span>
        </span>
        <button
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            addItem(variantId, 1);
          }}
        >
          +
        </button>
      </div>
    );
  }
};

export default AddToCartV2;
