/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BasicProductFields
// ====================================================

export interface BasicProductFields_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface BasicProductFields_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface BasicProductFields_variants_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
  alt: string;
}

export interface BasicProductFields_variants_pricing_priceUndiscounted_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface BasicProductFields_variants_pricing_priceUndiscounted_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface BasicProductFields_variants_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: BasicProductFields_variants_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: BasicProductFields_variants_pricing_priceUndiscounted_net;
}

export interface BasicProductFields_variants_pricing_price_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface BasicProductFields_variants_pricing_price_net {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface BasicProductFields_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: BasicProductFields_variants_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: BasicProductFields_variants_pricing_price_net;
}

export interface BasicProductFields_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: BasicProductFields_variants_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: BasicProductFields_variants_pricing_price | null;
}

export interface BasicProductFields_variants_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
}

export interface BasicProductFields_variants_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Name of a value displayed in the interface.
   */
  value: string | null;
}

export interface BasicProductFields_variants_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: BasicProductFields_variants_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (BasicProductFields_variants_attributes_values | null)[];
}

export interface BasicProductFields_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  sku: string;
  name: string;
  /**
   * Quantity of a product available for sale.
   */
  stockQuantity: number;
  /**
   * Whether the variant is in stock and visible or not.
   */
  isAvailable: boolean | null;
  /**
   * List of images for the product variant.
   */
  images: (BasicProductFields_variants_images | null)[] | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: BasicProductFields_variants_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: BasicProductFields_variants_attributes[];
}

export interface BasicProductFields {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: BasicProductFields_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: BasicProductFields_thumbnail2x | null;
  /**
   * List of variants for the product.
   */
  variants: (BasicProductFields_variants | null)[] | null;
}
