/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { WalletTransactionType } from "./../../../../types/globalTypes";

// ====================================================
// GraphQL fragment: WalletTransactionDetail
// ====================================================

export interface WalletTransactionDetail {
  __typename: "WalletTransaction";
  /**
   * The ID of the object.
   */
  id: string;
  created: any;
  transactionId: number | null;
  transactionType: WalletTransactionType | null;
  amount: number;
  ledgerAmount: number;
  source: string;
  reason: string;
  description: string;
}
