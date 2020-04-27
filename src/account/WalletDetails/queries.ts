import gql from "graphql-tag";

import { TypedQuery } from "@temp/core/queries";

import { getUserWallets } from "./types/getUserWallets";

export const userWalletsQuery = gql`
  query getUserWallets {
    wallets(first: 100) {
      pageInfo {
        hasPreviousPage
        hasNextPage
      }

      totalCount

      edges {
        node {
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

          walletTransactions {
            id
            transactionId
            created
            transactionType
            amount
            ledgerAmount
            amount
            source
            reason
            description
          }
        }
      }
    }
  }
`;

export const TypedGetUserWalletsQuery = TypedQuery<getUserWallets, {}>(
  userWalletsQuery
);
