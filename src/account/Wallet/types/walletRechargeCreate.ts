/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WalletRechargeStatus } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL mutation operation: walletRechargeCreate
// ====================================================

export interface walletRechargeCreate_walletRechargeCreate_errors {
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

export interface walletRechargeCreate_walletRechargeCreate_walletRecharge_payment {
  __typename: "Payment";
  gateway: string;
  token: string;
  billingEmail: string;
}

export interface walletRechargeCreate_walletRechargeCreate_walletRecharge_wallet_currentBalance {
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

export interface walletRechargeCreate_walletRechargeCreate_walletRecharge_wallet_creditLimit {
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

export interface walletRechargeCreate_walletRechargeCreate_walletRecharge_wallet {
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
  currentBalance: walletRechargeCreate_walletRechargeCreate_walletRecharge_wallet_currentBalance | null;
  /**
   * Current Wallet Credit limit.
   */
  creditLimit: walletRechargeCreate_walletRechargeCreate_walletRecharge_wallet_creditLimit | null;
}

export interface walletRechargeCreate_walletRechargeCreate_walletRecharge {
  __typename: "WalletRecharge";
  /**
   * The ID of the object.
   */
  id: string;
  status: WalletRechargeStatus | null;
  payment: walletRechargeCreate_walletRechargeCreate_walletRecharge_payment | null;
  wallet: walletRechargeCreate_walletRechargeCreate_walletRecharge_wallet;
}

export interface walletRechargeCreate_walletRechargeCreate {
  __typename: "WalletRechargeCreate";
  /**
   * List of errors that occurred executing the mutation.
   */
  errors: walletRechargeCreate_walletRechargeCreate_errors[] | null;
  /**
   * Wallet recharge object.
   */
  walletRecharge: walletRechargeCreate_walletRechargeCreate_walletRecharge | null;
}

export interface walletRechargeCreate {
  /**
   * Create a new wallet recharge.
   */
  walletRechargeCreate: walletRechargeCreate_walletRechargeCreate | null;
}

export interface walletRechargeCreateVariables {
  walletId: string;
}
