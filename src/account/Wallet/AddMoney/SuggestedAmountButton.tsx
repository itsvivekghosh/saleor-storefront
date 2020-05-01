import * as React from "react";

import { Money } from "@components/containers";

import * as S from "./styles";

export const SuggestedAmountButton: React.FC<{
  amount: number;
  currency: string;
  handleClick;
}> = ({ amount, currency, handleClick }) => {
  return (
    <S.SuggestedAmountButton
      onClick={event => {
        event.preventDefault();
        handleClick(amount);
      }}
    >
      +{" "}
      <Money
        money={{
          amount,
          currency,
        }}
      />
    </S.SuggestedAmountButton>
  );
};
