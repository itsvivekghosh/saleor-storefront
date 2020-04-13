import isEqual from "lodash/isEqual";
import React from "react";
import { Link } from "react-router-dom";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { ProductVariantPicker } from "@components/organisms";
import { ProductDetails_product_variants } from "@sdk/queries/types/ProductDetails";
import { IProductVariantsAttributesSelectedValues } from "@types";

import {
  CartContext,
  CartLine,
} from "../../../../components/CartProvider/context";
import AddToCartV2 from "../../../../components/ProductDescription/AddToCartV2";
import { generateProductUrl } from "../../../../core/utils";
import * as S from "./styles";
import { IProps, IState } from "./types";

export class ProductTile extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      quantity: 1,
      variant: "",
      variantPricing: null,
      variantPricingRange: {
        max:
          this.props.product.pricing && this.props.product.pricing.priceRange
            ? this.props.product.pricing.priceRange.stop
            : null,
        min:
          this.props.product.pricing && this.props.product.pricing.priceRange
            ? this.props.product.pricing.priceRange.start
            : null,
      },
      variantStock: 0,
    };
  }

  getProductPrice = () => {
    // const price =
    //   product.pricing &&
    //   product.pricing.priceRange &&
    //   product.pricing.priceRange.start
    //     ? product.pricing.priceRange.start
    //     : undefined;

    const { variantPricingRange, variantPricing } = this.state;

    const { min, max }: { min?: any; max?: any } = variantPricingRange;
    if (variantPricing) {
      if (
        isEqual(
          variantPricing.priceRangeUndiscounted,
          variantPricing.priceRange
        )
      ) {
        return <TaxedMoney taxedMoney={variantPricing.priceRange as any} />;
      } else {
        return (
          <>
            <span className="product-description__undiscounted_price">
              <TaxedMoney
                taxedMoney={variantPricing.priceRangeUndiscounted as any}
              />
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TaxedMoney taxedMoney={variantPricing.priceRange as any} />
          </>
        );
      }
    }
    if (isEqual(min, max)) {
      return <TaxedMoney taxedMoney={min} />;
    } else {
      return (
        <>
          <TaxedMoney taxedMoney={min} /> - <TaxedMoney taxedMoney={max} />
        </>
      );
    }
  };

  onVariantPickerChange = (
    _selectedAttributesValues?: IProductVariantsAttributesSelectedValues,
    selectedVariant?: ProductDetails_product_variants
  ) => {
    if (selectedVariant) {
      this.setState({
        variant: selectedVariant.id,
        variantPricing: selectedVariant.pricing as any,
        variantStock: selectedVariant.stockQuantity,
      });
    } else {
      this.setState({
        variant: "",
        variantPricing: null,
      });
    }
  };

  canAddToCart = (lines: CartLine[]) => {
    const { variant, quantity, variantStock } = this.state;
    const cartLine = lines.find(({ variantId }) => variantId === variant);
    const syncedQuantityWithCart = cartLine
      ? quantity + cartLine.quantity
      : quantity;
    return quantity !== 0 && variant && variantStock >= syncedQuantityWithCart;
  };

  render() {
    return (
      <S.Wrapper>
        <Link
          to={generateProductUrl(
            this.props.product.id,
            this.props.product.name
          )}
          key={this.props.product.id}
        >
          <S.Title>{this.props.product.name}</S.Title>
          <S.Price>
            {/* <TaxedMoney taxedMoney={price} /> */}
            {this.getProductPrice()}
          </S.Price>
          <S.Image>
            <Thumbnail source={this.props.product} />
          </S.Image>
        </Link>
        <ProductVariantPicker
          productVariants={this.props.product.variants as any}
          onChange={this.onVariantPickerChange}
          selectSidebar={false}
        />
        <CartContext.Consumer>
          {({ lines }) => (
            <div className="product-description__add-to-cart-v2">
              <AddToCartV2
                variantId={this.state.variant}
                disabled={!this.canAddToCart(lines)}
                largeButtons={true}
              />
            </div>
          )}
        </CartContext.Consumer>
      </S.Wrapper>
    );
  }
}
