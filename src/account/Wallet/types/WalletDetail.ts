/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: WalletDetail
// ====================================================

export interface WalletDetail_currentBalance {
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

export interface WalletDetail_creditLimit {
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

export interface WalletDetail {
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
  currentBalance: WalletDetail_currentBalance | null;
  /**
   * Current Wallet Credit limit.
   */
  creditLimit: WalletDetail_creditLimit | null;
}
