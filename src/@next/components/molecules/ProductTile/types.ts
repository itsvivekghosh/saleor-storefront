import {
  ProductList_products_edges_node,
  ProductList_products_edges_node_pricing,
} from "@sdk/queries/types/ProductList";
import { ITaxedMoney } from "@types";

export interface IProps {
  product: ProductList_products_edges_node;
}

export interface IState {
  quantity: number;
  variant: string;
  variantStock: number;
  variantPricing: ProductList_products_edges_node_pricing | null;
  variantPricingRange: {
    min: ITaxedMoney | null;
    max: ITaxedMoney | null;
  };
}
