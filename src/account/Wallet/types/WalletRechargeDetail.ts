/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WalletRechargeStatus } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL fragment: WalletRechargeDetail
// ====================================================

export interface WalletRechargeDetail_payment {
  __typename: "Payment";
  gateway: string;
  token: string;
  billingEmail: string;
}

export interface WalletRechargeDetail_wallet_currentBalance {
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

export interface WalletRechargeDetail_wallet_creditLimit {
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

export interface WalletRechargeDetail_wallet {
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
  currentBalance: WalletRechargeDetail_wallet_currentBalance | null;
  /**
   * Current Wallet Credit limit.
   */
  creditLimit: WalletRechargeDetail_wallet_creditLimit | null;
}

export interface WalletRechargeDetail {
  __typename: "WalletRecharge";
  /**
   * The ID of the object.
   */
  id: string;
  status: WalletRechargeStatus | null;
  payment: WalletRechargeDetail_payment | null;
  wallet: WalletRechargeDetail_wallet;
}
