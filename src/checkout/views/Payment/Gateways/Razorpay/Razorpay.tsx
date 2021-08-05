import React from "react";
import { MutationFn } from "react-apollo";
import styled from "styled-components";

import { CountryCode } from "@temp/@sdk/types/globalTypes";

import { PROVIDERS } from "../../../../../core/config";
import { ProviderProps } from "../../View";
import { TypedPaymentMethodCreateMutation } from "./queries";
import { createPayment, createPaymentVariables } from "./types/createPayment";
import { RAZORPAY_CARD_TYPE } from "./types/razorpay";

const PaymentForm = styled.form`
  width: 100%;
`;

const RazorpayForm = ({
  checkout,
  formRef,
  loading,
  setLoadingState,
  paymentGatewayConfig,
  processPayment,
}: ProviderProps) => {
  const createPaymentObject = async (
    createPaymentMethod: MutationFn<createPayment, createPaymentVariables>,
    token: string,
    gateway: string
  ) => {
    const {
      checkout: { billingAddress, totalPrice, id },
    } = checkout;

    const paymentDetails = await createPaymentMethod({
      variables: {
        checkoutId: id,
        input: {
          amount: totalPrice.gross.amount,
          billingAddress: {
            city: billingAddress.city,
            country: billingAddress.country.code as CountryCode,
            countryArea: billingAddress.countryArea,
            firstName: billingAddress.firstName,
            lastName: billingAddress.lastName,
            postalCode: billingAddress.postalCode,
            streetAddress1: billingAddress.streetAddress1,
            streetAddress2: billingAddress.streetAddress2,
          },
          gateway,
          token,
        },
      },
    });

    return paymentDetails;
  };

  return (
    <TypedPaymentMethodCreateMutation>
      {createPaymentMethod => {
        const handleSubmit = async () => {
          setLoadingState(true);
          const paymentDetails: any = await createPaymentObject(
            createPaymentMethod,
            checkout.checkout.token,
            PROVIDERS.RAZORPAY.label
          );

          const razorpayOrderId =
            paymentDetails.data.checkoutPaymentCreate.payment.token;

          checkout.update({
            cardData: {
              ccType: RAZORPAY_CARD_TYPE,
              lastDigits: "Razorpay",
              token: razorpayOrderId,
            },
          });

          processPayment(razorpayOrderId, PROVIDERS.RAZORPAY.label);
          setLoadingState(false);
        };

        return (
          <PaymentForm ref={formRef} onSubmit={handleSubmit}></PaymentForm>
        );
      }}
    </TypedPaymentMethodCreateMutation>
  );
};

export default RazorpayForm;