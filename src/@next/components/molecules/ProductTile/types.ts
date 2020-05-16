import { ProductDetails_product_variants_pricing } from '@sdk/queries/types/ProductDetails';
import { ProductList_products_edges_node } from '@sdk/queries/types/ProductList';
import { ICheckoutModelLine } from '@sdk/repository';
import { ITaxedMoney } from '@types';

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface IProps {
  product: PartialBy<ProductList_products_edges_node, "category">;
  items: ICheckoutModelLine[];
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
