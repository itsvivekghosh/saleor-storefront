/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: WalletById
// ====================================================

export interface WalletById_wallet_currentBalance {
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

export interface WalletById_wallet_creditLimit {
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

export interface WalletById_wallet {
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
  currentBalance: WalletById_wallet_currentBalance | null;
  /**
   * Current Wallet Credit limit.
   */
  creditLimit: WalletById_wallet_creditLimit | null;
}

export interface WalletById {
  /**
   * Look up an wallet by ID.
   */
  wallet: WalletById_wallet | null;
}

export interface WalletByIdVariables {
  id: string;
}
