import * as React from "react";

import { ProductList } from "@components/organisms";

import { GetProductDetails_product_category_products_edges } from "./types/GetProductDetails";

const OtherProducts: React.FC<{
  products: GetProductDetails_product_category_products_edges[];
}> = ({ products }) => (
  <div className="product-page__other-products">
    <div className="container">
      <h4 className="product-page__other-products__title">
        Other products in this category
      </h4>
      <ProductList products={products.map(({ node }) => node)} />
    </div>
  </div>
);

export default OtherProducts;
