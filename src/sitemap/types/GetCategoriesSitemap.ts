/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategoriesSitemap
// ====================================================

export interface GetCategoriesSitemap_categories_pageInfo {
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

export interface GetCategoriesSitemap_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface GetCategoriesSitemap_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetCategoriesSitemap_categories_edges_node;
}

export interface GetCategoriesSitemap_categories {
  __typename: "CategoryCountableConnection";
  /**
   * Pagination data for this connection.
   */
  pageInfo: GetCategoriesSitemap_categories_pageInfo;
  edges: GetCategoriesSitemap_categories_edges[];
}

export interface GetCategoriesSitemap {
  /**
   * List of the shop's categories.
   */
  categories: GetCategoriesSitemap_categories | null;
}

export interface GetCategoriesSitemapVariables {
  cursor?: string | null;
  perPage?: number | null;
}
