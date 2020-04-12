import React from 'react';

import { useUserDetails } from '@sdk/react';

import { CheckoutContext } from '../../checkout/context';
import { TypedCreateCheckoutMutation } from '../../checkout/queries';
import { CartContext } from '../CartProvider/context';
import AddToCartButton from './AddToCartButton';

const AddToCartV2: React.FC<{
  disabled: boolean;
  variantId: string;
  largeButtons?: boolean;
}> = ({ disabled, variantId, largeButtons = false }) => {
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
                    <AddToCartButton
                      className="product-description__action"
                      onClick={() => {
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
                      disabled={disabled || mutationLoading || checkoutLoading}
                    >
                      Add to basket
                    </AddToCartButton>
                  )}
                </TypedCreateCheckoutMutation>
              )}
            </CheckoutContext.Consumer>
          );
        } else {
          const updateQuantityClassNames = [
            `product-description__update-quantity`,
          ];
          if (largeButtons) {
            updateQuantityClassNames.push("large");
          }

          return (
            <div className={updateQuantityClassNames.join(" ")}>
              <button onClick={() => subtract(variantId)}>-</button>
              <span className="quantity">{currentQuantitty}</span>
              <button onClick={() => add(variantId)}>+</button>
            </div>
          );
        }
      }}
    </CartContext.Consumer>
  );
};

export default AddToCartV2;
