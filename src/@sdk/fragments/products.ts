import gql from "graphql-tag";
import { checkoutPriceFragment } from "./checkout";

export const selectedAttributeFragment = gql`
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
    }
    values {
      id
      name
    }
  }
`;

export const productVariantFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductVariantFields on ProductVariant {
    id
    sku
    name
    stockQuantity
    isAvailable
    images {
      id
      url
      alt
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
      }
      values {
        id
        name
        value: name
      }
    }
  }
`;

export const basicProductFragment = gql`
  ${productVariantFragment}
  fragment BasicProductFields on Product {
    id
    name
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 510) {
      url
    }
    variants {
      ...ProductVariantFields
    }
  }
`;
