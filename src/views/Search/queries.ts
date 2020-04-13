import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { productPricingFragment, productVariantFragment } from "../Product/queries";
import {
  SearchProducts,
  SearchProductsVariables,
} from "./types/SearchProducts";

export const searchProductsQuery = gql`
  ${productVariantFragment}
  ${productPricingFragment}
  query SearchProducts(
    $query: String!
    $attributes: [AttributeInput]
    $pageSize: Int
    $sortBy: ProductOrder
    $after: String
  ) {
    products(
      filter: { search: $query, attributes: $attributes }
      first: $pageSize
      sortBy: $sortBy
      after: $after
    ) {
      totalCount
      edges {
        node {
          ...ProductPricingField
          id
          name
          thumbnail {
            url
            alt
          }
          thumbnail2x: thumbnail(size: 510) {
            url
          }
          category {
            id
            name
          }
          variants {
            ...ProductVariantFields
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    attributes(first: 100) {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
  }
`;

export const TypedSearchProductsQuery = TypedQuery<
  SearchProducts,
  SearchProductsVariables
>(searchProductsQuery);
