/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCollectionsSitemap
// ====================================================

export interface GetCollectionsSitemap_collections_pageInfo {
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

export interface GetCollectionsSitemap_collections_edges_node {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface GetCollectionsSitemap_collections_edges {
  __typename: "CollectionCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetCollectionsSitemap_collections_edges_node;
}

export interface GetCollectionsSitemap_collections {
  __typename: "CollectionCountableConnection";
  /**
   * Pagination data for this connection.
   */
  pageInfo: GetCollectionsSitemap_collections_pageInfo;
  edges: GetCollectionsSitemap_collections_edges[];
}

export interface GetCollectionsSitemap {
  /**
   * List of the shop's collections.
   */
  collections: GetCollectionsSitemap_collections | null;
}

export interface GetCollectionsSitemapVariables {
  cursor?: string | null;
  perPage?: number | null;
}
