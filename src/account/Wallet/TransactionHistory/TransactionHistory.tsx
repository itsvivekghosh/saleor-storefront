import React from "react";
import Media from "react-media";
import { ThemeContext } from "styled-components";

import { Money } from "@components/containers";

import * as S from "./styles";
import { IProps } from "./types";

const header = (matches: boolean) => (
  <S.HeaderRow>
    <S.IndexNumber>SN</S.IndexNumber>
    {matches && (
      <>
        <S.TxnId>Txn Id</S.TxnId>
        <S.TxnDate>Date/Time</S.TxnDate>
        <S.TransactionType>Type</S.TransactionType>
        <S.Amount>Amount</S.Amount>
        <S.Ledgeramount>Ledger Amount</S.Ledgeramount>
        <S.Source>Source</S.Source>
        <S.Description>Description</S.Description>
        <S.Reason>Reason</S.Reason>
      </>
    )}
  </S.HeaderRow>
);

export const TransactionHistory: React.FC<IProps> = ({
  wallet,
  history,
}: IProps) => {
  const theme = React.useContext(ThemeContext);
  return (
    <S.Wrapper>
      <Media
        query={{
          minWidth: theme.breakpoints.mediumScreen,
        }}
      >
        {(matches: boolean) => {
          return (
            <>
              <S.Row>{header(matches)}</S.Row>
              {wallet &&
                wallet.walletTransactions.map((walletTransaction, index) => {
                  const date = new Date(walletTransaction.created);
                  return (
                    <S.Row key={index}>
                      <S.IndexNumber>{index + 1}</S.IndexNumber>
                      {matches ? (
                        <>
                          <S.TxnId>
                            <p>{walletTransaction.transactionId}</p>
                          </S.TxnId>
                          <S.TxnDate>
                            <p>{`${date.toLocaleString()}`}</p>
                          </S.TxnDate>
                          <S.TransactionType>
                            {walletTransaction.transactionType}
                          </S.TransactionType>
                          <S.Amount>
                            <Money
                              money={{
                                amount: walletTransaction.amount,
                                currency: wallet.currency,
                              }}
                            />
                          </S.Amount>
                          <S.Ledgeramount>
                            <Money
                              money={{
                                amount: walletTransaction.ledgerAmount,
                                currency: wallet.currency,
                              }}
                            />
                          </S.Ledgeramount>
                          <S.Source>
                            <p></p>
                            {walletTransaction.source}
                            <p></p>
                          </S.Source>

                          <S.Description>
                            <p>{walletTransaction.description}</p>
                          </S.Description>

                          <S.Reason>
                            <p>{walletTransaction.reason}</p>
                          </S.Reason>
                        </>
                      ) : (
                        ""
                      )}
                    </S.Row>
                  );
                })}
            </>
          );
        }}
      </Media>
    </S.Wrapper>
  );
};
