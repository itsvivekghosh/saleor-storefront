/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WalletRechargePaymentInput, WalletRechargeStatus } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: walletRechargePaymentCreate
// ====================================================

export interface walletRechargePaymentCreate_walletRechargePaymentCreate_errors {
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

export interface walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge_payment {
  __typename: "Payment";
  gateway: string;
  token: string;
  billingEmail: string;
}

export interface walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge_wallet_currentBalance {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge_wallet_creditLimit {
  __typename: "Money";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money.
   */
  amount: number;
}

export interface walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge_wallet {
  __typename: "Wallet";
  /**
   * The ID of the object.
   */
  id: string;
  isActive: boolean;
  created: any;
  currency: string;
  /**
   * Current Wallet Balance.
   */
  currentBalance: walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge_wallet_currentBalance | null;
  /**
   * Current Wallet Credit limit.
   */
  creditLimit: walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge_wallet_creditLimit | null;
}

export interface walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge {
  __typename: "WalletRecharge";
  /**
   * The ID of the object.
   */
  id: string;
  status: WalletRechargeStatus | null;
  payment: walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge_payment | null;
  wallet: walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge_wallet;
}

export interface walletRechargePaymentCreate_walletRechargePaymentCreate {
  __typename: "WalletRechargePaymentCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: walletRechargePaymentCreate_walletRechargePaymentCreate_errors[];
  /**
   * Wallet recharge object.
   */
  walletRecharge: walletRechargePaymentCreate_walletRechargePaymentCreate_walletRecharge | null;
}

export interface walletRechargePaymentCreate {
  /**
   * Create a new payment for given wallet recharge.
   */
  walletRechargePaymentCreate: walletRechargePaymentCreate_walletRechargePaymentCreate | null;
}

export interface walletRechargePaymentCreateVariables {
  walletRechargeId: string;
  input: WalletRechargePaymentInput;
}
