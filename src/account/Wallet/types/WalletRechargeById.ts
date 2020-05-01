/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WalletRechargeStatus } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL query operation: WalletRechargeById
// ====================================================

export interface WalletRechargeById_walletRecharge_payment {
  __typename: "Payment";
  gateway: string;
  token: string;
  billingEmail: string;
}

export interface WalletRechargeById_walletRecharge_wallet_currentBalance {
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

export interface WalletRechargeById_walletRecharge_wallet_creditLimit {
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

export interface WalletRechargeById_walletRecharge_wallet {
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
  currentBalance: WalletRechargeById_walletRecharge_wallet_currentBalance | null;
  /**
   * Current Wallet Credit limit.
   */
  creditLimit: WalletRechargeById_walletRecharge_wallet_creditLimit | null;
}

export interface WalletRechargeById_walletRecharge {
  __typename: "WalletRecharge";
  /**
   * The ID of the object.
   */
  id: string;
  status: WalletRechargeStatus | null;
  payment: WalletRechargeById_walletRecharge_payment | null;
  wallet: WalletRechargeById_walletRecharge_wallet;
}

export interface WalletRechargeById {
  /**
   * Look up an wallet recharge by ID.
   */
  walletRecharge: WalletRechargeById_walletRecharge | null;
}

export interface WalletRechargeByIdVariables {
  id: string;
}
