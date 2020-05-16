import isEqual from 'lodash/isEqual';
import React from 'react';
import { Link } from 'react-router-dom';

import { TaxedMoney } from '@components/containers';
import { Thumbnail } from '@components/molecules';
import { ProductVariantPicker } from '@components/organisms';
import { ProductDetails_product_variants } from '@sdk/queries/types/ProductDetails';
import { IProductVariantsAttributesSelectedValues } from '@types';

import AddToCartV2 from '../../../../components/ProductDescription/AddToCartV2';
import { generateProductUrl } from '../../../../core/utils';
import * as S from './styles';
import { IProps, IState } from './types';

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
      if (isEqual(variantPricing.priceUndiscounted, variantPricing.price)) {
        return <TaxedMoney taxedMoney={variantPricing.price as any} />;
      } else {
        return (
          <>
            <span className="product-description__undiscounted_price">
              <TaxedMoney
                taxedMoney={variantPricing.priceUndiscounted as any}
              />
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TaxedMoney taxedMoney={variantPricing.price as any} />
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


  canAddToCart = () => {
    const { items } = this.props;
    const { variant, quantity, variantStock } = this.state;

    const cartItem = items?.find(item => item.variant.id === variant);
    const syncedQuantityWithCart = cartItem
      ? quantity + (cartItem?.quantity || 0)
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
          <S.Grid>
            <S.Image>
              <Thumbnail source={this.props.product} />
            </S.Image>
            <S.DetailsColumn>
              <S.Details>
                <S.Title>{this.props.product.name}</S.Title>
                <S.AttributeList>
                  {this.props.product.attributes &&
                    this.props.product.attributes.map(attribute => (
                      <p>
                        <S.AttributeName>
                          {attribute.attribute.name}:{" "}
                        </S.AttributeName>{" "}
                        {attribute.values
                          .map(value => value && value.name)
                          .join(", ")}
                      </p>
                    ))}
                </S.AttributeList>
                <ProductVariantPicker
                  productVariants={this.props.product.variants as any}
                  onChange={this.onVariantPickerChange}
                  selectSidebar={false}
                />
              </S.Details>
              <S.AddToCartRow>
                <S.Price>{this.getProductPrice()}</S.Price>
                    <AddToCartV2
                      variantId={this.state.variant}
                      disabled={!this.canAddToCart()}
                      largeButtons={true}
                    />
              </S.AddToCartRow>
            </S.DetailsColumn>
          </S.Grid>
        </Link>
      </S.Wrapper>
    );
  }
}