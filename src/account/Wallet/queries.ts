import gql from "graphql-tag";

import { TypedMutation } from "../../core/mutations";
import { TypedQuery } from "../../core/queries";
import {
  getUserWallets,
  getWalletRechargeAvailablePaymentGateways,
  WalletById,
  WalletByIdVariables,
  WalletRechargeById,
  WalletRechargeByIdVariables,
  walletRechargeComplete,
  walletRechargeCompleteVariables,
  walletRechargeCreate,
  walletRechargeCreateVariables,
  walletRechargePaymentCreate,
  walletRechargePaymentCreateVariables,
} from "./types";

const walletTransactionFragment = gql`
  fragment WalletTransactionDetail on WalletTransaction {
    id
    created
    transactionId
    transactionType
    amount
    ledgerAmount
    amount
    source
    reason
    description
  }
`;

const walletDetailFragment = gql`
  fragment WalletDetail on Wallet {
    id
    isActive
    created
    currency
    currentBalance {
      currency
      amount
    }

    creditLimit {
      currency
      amount
    }
  }
`;

const walletRechargePaymentDetailFragment = gql`
  fragment WalletRechargePaymentDetail on Payment {
    gateway
    token
    billingEmail
  }
`;

const walletRechargeDetailFragment = gql`
  ${walletDetailFragment}
  ${walletRechargePaymentDetailFragment}
  fragment WalletRechargeDetail on WalletRecharge {
    id
    status
    payment {
      ...WalletRechargePaymentDetail
    }
    wallet {
      ...WalletDetail
    }
  }
`;

const userWalletsQuery = gql`
  ${walletTransactionFragment}
  ${walletDetailFragment}
  query getUserWallets {
    wallets(first: 100) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }

      totalCount

      edges {
        node {
          ...WalletDetail
          walletTransactions {
            ...WalletTransactionDetail
          }
        }
      }
    }
  }
`;

const walletDetailsByIdQuery = gql`
  ${walletDetailFragment}
  query WalletById($id: ID!) {
    wallet(id: $id) {
      ...WalletDetail
    }
  }
`;

const walletRechargeByIdQuery = gql`
  ${walletRechargeDetailFragment}
  query WalletRechargeById($id: ID!) {
    walletRecharge(id: $id) {
      ...WalletRechargeDetail
    }
  }
`;

const walletRechargeAvailablePaymentGateways = gql`
  query getWalletRechargeAvailablePaymentGateways {
    walletRechargeAvailablePaymentGateways {
      name
      config {
        field
        value
      }
    }
  }
`;

const walletRechargeCreateMutation = gql`
  ${walletRechargeDetailFragment}
  mutation walletRechargeCreate($walletId: ID!) {
    walletRechargeCreate(walletId: $walletId) {
      errors {
        field
        message
      }
      walletRecharge {
        ...WalletRechargeDetail
      }
    }
  }
`;

const walletRechargePaymentCreateMutation = gql`
  ${walletRechargeDetailFragment}
  mutation walletRechargePaymentCreate(
    $walletRechargeId: ID!
    $input: WalletRechargePaymentInput!
  ) {
    walletRechargePaymentCreate(
      walletRechargeId: $walletRechargeId
      input: $input
    ) {
      errors {
        field
        message
      }
      walletRecharge {
        ...WalletRechargeDetail
      }
    }
  }
`;

const walletRechargeCompleteMutation = gql`
  ${walletRechargeDetailFragment}
  mutation walletRechargeComplete($walletRechargeId: ID!) {
    walletRechargeComplete(walletRechargeId: $walletRechargeId) {
      errors {
        field
        message
      }
      walletRecharge {
        ...WalletRechargeDetail
      }
    }
  }
`;

export const TypedGetUserWalletsQuery = TypedQuery<getUserWallets, {}>(
  userWalletsQuery
);

export const TypedWalletDetailsByIdQuery = TypedQuery<
  WalletById,
  WalletByIdVariables
>(walletDetailsByIdQuery);

export const TypedWalletRechargeByIdQuery = TypedQuery<
  WalletRechargeById,
  WalletRechargeByIdVariables
>(walletRechargeByIdQuery);

export const TypedGetWalletRechargeAvailablePaymentGateways = TypedQuery<
  getWalletRechargeAvailablePaymentGateways,
  {}
>(walletRechargeAvailablePaymentGateways);

export const TypedWalletRechargeCreateMutation = TypedMutation<
  walletRechargeCreate,
  walletRechargeCreateVariables
>(walletRechargeCreateMutation);

export const TypedWalletRechargePaymentCreateMutation = TypedMutation<
  walletRechargePaymentCreate,
  walletRechargePaymentCreateVariables
>(walletRechargePaymentCreateMutation);

export const TypedWalletRechargeCompleteMutation = TypedMutation<
  walletRechargeComplete,
  walletRechargeCompleteVariables
>(walletRechargeCompleteMutation);
