/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProductsSitemap
// ====================================================

export interface GetProductsSitemap_products_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface GetProductsSitemap_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface GetProductsSitemap_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetProductsSitemap_products_edges_node;
}

export interface GetProductsSitemap_products {
  __typename: "ProductCountableConnection";
  /**
   * Pagination data for this connection.
   */
  pageInfo: GetProductsSitemap_products_pageInfo;
  edges: GetProductsSitemap_products_edges[];
}

export interface GetProductsSitemap {
  /**
   * List of the shop's products.
   */
  products: GetProductsSitemap_products | null;
}

export interface GetProductsSitemapVariables {
  cursor?: string | null;
  perPage?: number | null;
}
