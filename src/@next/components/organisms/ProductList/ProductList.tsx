import React from "react";

import { Button, Loader } from "@components/atoms";
import { ProductTile } from "@components/molecules";
import { useCart } from "@sdk/react";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductList: React.FC<IProps> = ({
  products,
  canLoadMore = false,
  loading = false,
  onLoadMore = () => null,
}: IProps) => {
  const { items } = useCart();
  return (
    <>
      <S.List>
        {products.map(product => (
          <ProductTile product={product} items={items} />
        ))}
      </S.List>
      <S.Loader>
        {loading ? (
          <Loader />
        ) : (
          canLoadMore && (
            <Button
              data-cy="load-more_button"
              color="secondary"
              onClick={onLoadMore}
            >
              More +
            </Button>
          )
        )}
      </S.Loader>
    </>
  );
};
