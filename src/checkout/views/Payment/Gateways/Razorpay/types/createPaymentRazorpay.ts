/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PaymentInput } from "./../../../../../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: createPaymentRazorpay
// ====================================================

export interface createPaymentRazorpay_checkoutPaymentCreate_errors {
  __typename: "Error";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
}

export interface createPaymentRazorpay_checkoutPaymentCreate_payment {
  __typename: "Payment";
  token: string;
}

export interface createPaymentRazorpay_checkoutPaymentCreate {
  __typename: "CheckoutPaymentCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: createPaymentRazorpay_checkoutPaymentCreate_errors[] | null;
  /**
   * A newly created payment.
   */
  payment: createPaymentRazorpay_checkoutPaymentCreate_payment | null;
}

export interface createPaymentRazorpay {
  /**
   * Create a new payment for given checkout.
   */
  checkoutPaymentCreate: createPaymentRazorpay_checkoutPaymentCreate | null;
}

export interface createPaymentRazorpayVariables {
  input: PaymentInput;
  checkoutId: string;
}
