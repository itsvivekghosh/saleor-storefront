import React from 'react';

import { Button, Loader } from '@components/atoms';
import { ProductTile } from '@components/molecules';

import * as S from './styles';
import { IProps } from './types';

export const ProductList: React.FC<IProps> = ({
  products,
  canLoadMore = false,
  loading = false,
  onLoadMore = () => null,
}: IProps) => {
  return (
    <>
      <S.List>
        {products.map(product => (
          <ProductTile product={product} />
        ))}
      </S.List>
      <S.Loader>
        {loading ? (
          <Loader />
        ) : (
          canLoadMore && (
            <Button color="secondary" onClick={onLoadMore}>
              More +
            </Button>
          )
        )}
      </S.Loader>
    </>
  );
};
