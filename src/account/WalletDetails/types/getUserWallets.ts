/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WalletTransactionType } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL query operation: getUserWallets
// ====================================================

export interface getUserWallets_wallets_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface getUserWallets_wallets_edges_node_currentBalance {
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

export interface getUserWallets_wallets_edges_node_creditLimit {
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

export interface getUserWallets_wallets_edges_node_walletTransactions {
  __typename: "WalletTransaction";
  /**
   * The ID of the object.
   */
  id: string;
  transactionId: any | null;
  created: any;
  transactionType: WalletTransactionType | null;
  amount: number;
  ledgerAmount: number;
  source: string;
  reason: string;
  description: string;
}

export interface getUserWallets_wallets_edges_node {
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
  currentBalance: getUserWallets_wallets_edges_node_currentBalance | null;
  /**
   * Current Wallet Credit limit.
   */
  creditLimit: getUserWallets_wallets_edges_node_creditLimit | null;
  /**
   * List of transactions for the wallet.
   */
  walletTransactions: (getUserWallets_wallets_edges_node_walletTransactions | null)[] | null;
}

export interface getUserWallets_wallets_edges {
  __typename: "WalletCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: getUserWallets_wallets_edges_node;
}

export interface getUserWallets_wallets {
  __typename: "WalletCountableConnection";
  /**
   * Pagination data for this connection.
   */
  pageInfo: getUserWallets_wallets_pageInfo;
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
  edges: getUserWallets_wallets_edges[];
}

export interface getUserWallets {
  /**
   * List of wallets of authenticated user
   */
  wallets: getUserWallets_wallets | null;
}
