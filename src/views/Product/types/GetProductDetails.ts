/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductDetails
// ====================================================

export interface GetProductDetails_product_thumbnail {
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

export interface GetProductDetails_product_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface GetProductDetails_product_variants_images {
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

export interface GetProductDetails_product_variants_pricing_priceUndiscounted_gross {
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

export interface GetProductDetails_product_variants_pricing_priceUndiscounted_net {
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

export interface GetProductDetails_product_variants_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_variants_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_variants_pricing_priceUndiscounted_net;
}

export interface GetProductDetails_product_variants_pricing_price_gross {
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

export interface GetProductDetails_product_variants_pricing_price_net {
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

export interface GetProductDetails_product_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_variants_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_variants_pricing_price_net;
}

export interface GetProductDetails_product_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: GetProductDetails_product_variants_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: GetProductDetails_product_variants_pricing_price | null;
}

export interface GetProductDetails_product_variants_attributes_attribute {
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

export interface GetProductDetails_product_variants_attributes_values {
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

export interface GetProductDetails_product_variants_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: GetProductDetails_product_variants_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (GetProductDetails_product_variants_attributes_values | null)[];
}

export interface GetProductDetails_product_variants {
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
  images: (GetProductDetails_product_variants_images | null)[] | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: GetProductDetails_product_variants_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: GetProductDetails_product_variants_attributes[];
}

export interface GetProductDetails_product_pricing_priceRangeUndiscounted_start_gross {
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

export interface GetProductDetails_product_pricing_priceRangeUndiscounted_start_net {
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

export interface GetProductDetails_product_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_pricing_priceRangeUndiscounted_start_net;
}

export interface GetProductDetails_product_pricing_priceRangeUndiscounted_stop_gross {
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

export interface GetProductDetails_product_pricing_priceRangeUndiscounted_stop_net {
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

export interface GetProductDetails_product_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_pricing_priceRangeUndiscounted_stop_net;
}

export interface GetProductDetails_product_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: GetProductDetails_product_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: GetProductDetails_product_pricing_priceRangeUndiscounted_stop | null;
}

export interface GetProductDetails_product_pricing_priceRange_start_gross {
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

export interface GetProductDetails_product_pricing_priceRange_start_net {
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

export interface GetProductDetails_product_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_pricing_priceRange_start_net;
}

export interface GetProductDetails_product_pricing_priceRange_stop_gross {
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

export interface GetProductDetails_product_pricing_priceRange_stop_net {
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

export interface GetProductDetails_product_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_pricing_priceRange_stop_net;
}

export interface GetProductDetails_product_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: GetProductDetails_product_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: GetProductDetails_product_pricing_priceRange_stop | null;
}

export interface GetProductDetails_product_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: GetProductDetails_product_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: GetProductDetails_product_pricing_priceRange | null;
}

export interface GetProductDetails_product_category_products_edges_node_thumbnail {
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

export interface GetProductDetails_product_category_products_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface GetProductDetails_product_category_products_edges_node_variants_images {
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

export interface GetProductDetails_product_category_products_edges_node_variants_pricing_priceUndiscounted_gross {
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

export interface GetProductDetails_product_category_products_edges_node_variants_pricing_priceUndiscounted_net {
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

export interface GetProductDetails_product_category_products_edges_node_variants_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_category_products_edges_node_variants_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_category_products_edges_node_variants_pricing_priceUndiscounted_net;
}

export interface GetProductDetails_product_category_products_edges_node_variants_pricing_price_gross {
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

export interface GetProductDetails_product_category_products_edges_node_variants_pricing_price_net {
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

export interface GetProductDetails_product_category_products_edges_node_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_category_products_edges_node_variants_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_category_products_edges_node_variants_pricing_price_net;
}

export interface GetProductDetails_product_category_products_edges_node_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: GetProductDetails_product_category_products_edges_node_variants_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: GetProductDetails_product_category_products_edges_node_variants_pricing_price | null;
}

export interface GetProductDetails_product_category_products_edges_node_variants_attributes_attribute {
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

export interface GetProductDetails_product_category_products_edges_node_variants_attributes_values {
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

export interface GetProductDetails_product_category_products_edges_node_variants_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: GetProductDetails_product_category_products_edges_node_variants_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (GetProductDetails_product_category_products_edges_node_variants_attributes_values | null)[];
}

export interface GetProductDetails_product_category_products_edges_node_variants {
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
  images: (GetProductDetails_product_category_products_edges_node_variants_images | null)[] | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: GetProductDetails_product_category_products_edges_node_variants_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: GetProductDetails_product_category_products_edges_node_variants_attributes[];
}

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_net {
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

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
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

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRange_start_gross {
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

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRange_start_net {
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

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_category_products_edges_node_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_category_products_edges_node_pricing_priceRange_start_net;
}

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRange_stop_gross {
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

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRange_stop_net {
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

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: GetProductDetails_product_category_products_edges_node_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: GetProductDetails_product_category_products_edges_node_pricing_priceRange_stop_net;
}

export interface GetProductDetails_product_category_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: GetProductDetails_product_category_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: GetProductDetails_product_category_products_edges_node_pricing_priceRange_stop | null;
}

export interface GetProductDetails_product_category_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: GetProductDetails_product_category_products_edges_node_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: GetProductDetails_product_category_products_edges_node_pricing_priceRange | null;
}

export interface GetProductDetails_product_category_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface GetProductDetails_product_category_products_edges_node_attributes_attribute {
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

export interface GetProductDetails_product_category_products_edges_node_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
}

export interface GetProductDetails_product_category_products_edges_node_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: GetProductDetails_product_category_products_edges_node_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (GetProductDetails_product_category_products_edges_node_attributes_values | null)[];
}

export interface GetProductDetails_product_category_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: GetProductDetails_product_category_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: GetProductDetails_product_category_products_edges_node_thumbnail2x | null;
  /**
   * List of variants for the product.
   */
  variants: (GetProductDetails_product_category_products_edges_node_variants | null)[] | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: GetProductDetails_product_category_products_edges_node_pricing | null;
  category: GetProductDetails_product_category_products_edges_node_category | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: GetProductDetails_product_category_products_edges_node_attributes[];
}

export interface GetProductDetails_product_category_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetProductDetails_product_category_products_edges_node;
}

export interface GetProductDetails_product_category_products {
  __typename: "ProductCountableConnection";
  edges: GetProductDetails_product_category_products_edges[];
}

export interface GetProductDetails_product_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of products in the category.
   */
  products: GetProductDetails_product_category_products | null;
}

export interface GetProductDetails_product_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface GetProductDetails_product_attributes_attribute {
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

export interface GetProductDetails_product_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
}

export interface GetProductDetails_product_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: GetProductDetails_product_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (GetProductDetails_product_attributes_values | null)[];
}

export interface GetProductDetails_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: GetProductDetails_product_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: GetProductDetails_product_thumbnail2x | null;
  /**
   * List of variants for the product.
   */
  variants: (GetProductDetails_product_variants | null)[] | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: GetProductDetails_product_pricing | null;
  descriptionJson: any;
  category: GetProductDetails_product_category | null;
  /**
   * List of images for the product.
   */
  images: (GetProductDetails_product_images | null)[] | null;
  /**
   * List of attributes assigned to this product.
   */
  attributes: GetProductDetails_product_attributes[];
  seoDescription: string | null;
  seoTitle: string | null;
  /**
   * Whether the product is in stock and visible or not.
   */
  isAvailable: boolean | null;
}

export interface GetProductDetails {
  /**
   * Look up a product by ID.
   */
  product: GetProductDetails_product | null;
}

export interface GetProductDetailsVariables {
  id: string;
}
