import React from "react";

import { useUserDetails } from "@sdk/react";

import { CheckoutContext } from "../../checkout/context";
import { TypedCreateCheckoutMutation } from "../../checkout/queries";
import { CartContext } from "../CartProvider/context";

const AddToCartV2: React.FC<{
  disabled: boolean;
  variantId: string;
  largeButtons?: boolean;
}> = ({ disabled, variantId }) => {
  const { data: user } = useUserDetails();
  return (
    <CartContext.Consumer>
      {({ add, lines, subtract }) => {
        const cartLineForVariant = lines.find(
          line => line.variantId === variantId
        );
        const currentQuantitty = cartLineForVariant
          ? cartLineForVariant.quantity
          : 0;

        if (!currentQuantitty) {
          const onSubmit = () => add(variantId);

          return (
            <CheckoutContext.Consumer>
              {({ checkout, update, loading: checkoutLoading }) => (
                <TypedCreateCheckoutMutation
                  onCompleted={async ({
                    checkoutCreate: { checkout, errors },
                  }) => {
                    if (!errors.length) {
                      await update({ checkout });
                    }
                    onSubmit();
                  }}
                >
                  {(createCheckout, { loading: mutationLoading }) => (
                    <div className="product-description__add-to-cart-v2">
                      <button
                        className="product-description__add-to-cart-v2__button"
                        onClick={e => {
                          e.preventDefault();
                          e.stopPropagation();

                          // if (process.env.REDIRECT_TO_APP_STORE) {
                          //   window.location.href = `https://onelink.to/yub375`;
                          //   return;
                          // }

                          if (user && !checkout) {
                            createCheckout({
                              variables: {
                                checkoutInput: { email: user.email, lines },
                              },
                            });
                          } else {
                            onSubmit();
                          }
                        }}
                        disabled={
                          disabled || mutationLoading || checkoutLoading
                        }
                      >
                        Add<span> to basket</span>
                      </button>
                    </div>
                  )}
                </TypedCreateCheckoutMutation>
              )}
            </CheckoutContext.Consumer>
          );
        } else {
          return (
            <div className="product-description__add-to-cart-v2 product-description__add-to-cart-v2__update-quantity">
              <button
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                  subtract(variantId);
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
                  add(variantId);
                }}
              >
                +
              </button>
            </div>
          );
        }
      }}
    </CartContext.Consumer>
  );
};

export default AddToCartV2;
