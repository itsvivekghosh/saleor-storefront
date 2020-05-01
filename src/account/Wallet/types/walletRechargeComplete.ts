/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WalletRechargeStatus } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: walletRechargeComplete
// ====================================================

export interface walletRechargeComplete_walletRechargeComplete_errors {
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

export interface walletRechargeComplete_walletRechargeComplete_walletRecharge_payment {
  __typename: "Payment";
  gateway: string;
  token: string;
  billingEmail: string;
}

export interface walletRechargeComplete_walletRechargeComplete_walletRecharge_wallet_currentBalance {
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

export interface walletRechargeComplete_walletRechargeComplete_walletRecharge_wallet_creditLimit {
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

export interface walletRechargeComplete_walletRechargeComplete_walletRecharge_wallet {
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
  currentBalance: walletRechargeComplete_walletRechargeComplete_walletRecharge_wallet_currentBalance | null;
  /**
   * Current Wallet Credit limit.
   */
  creditLimit: walletRechargeComplete_walletRechargeComplete_walletRecharge_wallet_creditLimit | null;
}

export interface walletRechargeComplete_walletRechargeComplete_walletRecharge {
  __typename: "WalletRecharge";
  /**
   * The ID of the object.
   */
  id: string;
  status: WalletRechargeStatus | null;
  payment: walletRechargeComplete_walletRechargeComplete_walletRecharge_payment | null;
  wallet: walletRechargeComplete_walletRechargeComplete_walletRecharge_wallet;
}

export interface walletRechargeComplete_walletRechargeComplete {
  __typename: "WalletRechargeComplete";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: walletRechargeComplete_walletRechargeComplete_errors[] | null;
  /**
   * Wallet recharge object.
   */
  walletRecharge: walletRechargeComplete_walletRechargeComplete_walletRecharge | null;
}

export interface walletRechargeComplete {
  /**
   * Completes the checkout. As a result a new order is created and a payment
   * charge is made. This action requires a successful payment before it can be
   * performed. In case additional confirmation step as 3D secure is required
   * confirmationNeeded flag will be set to True and no order created until payment
   * is confirmed with second call of this mutation.
   */
  walletRechargeComplete: walletRechargeComplete_walletRechargeComplete | null;
}

export interface walletRechargeCompleteVariables {
  walletRechargeId: string;
}
