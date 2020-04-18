import { ProductDetails_product_variants_pricing } from '@sdk/queries/types/ProductDetails';
import { ProductList_products_edges_node } from '@sdk/queries/types/ProductList';
import { ITaxedMoney } from '@types';

export interface IProps {
  product: ProductList_products_edges_node;
}

export interface IState {
  quantity: number;
  variant: string;
  variantStock: number;
  variantPricing: ProductDetails_product_variants_pricing | null;
  variantPricingRange: {
    min: ITaxedMoney | null;
    max: ITaxedMoney | null;
  };
}
