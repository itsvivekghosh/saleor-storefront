import { media, styled } from "@styles";

export const Wrapper = styled.div`
  font-size: 0.8rem;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: auto;

  border-bottom: 1px solid ${props => props.theme.colors.tableDivider};
`;

export const HeaderRow = styled(Row)`
  color: ${props => props.theme.colors.lightFont};
  cursor: default;
  justify-content: center;
  align-items: center;
`;

export const IndexNumber = styled.div`
  width: 5%;
  ${media.smallScreen`
     width: 50%;
  `}
`;
export const TxnId = styled.div`
  width: 25%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  img {
    max-width: 50px;
    height: auto;
  }
`;
export const TxnDate = styled.div`
  width: 15%;
`;

export const TransactionType = styled.div`
  width: 10%
`;
export const Amount = styled.div`
  width: 15%;
`;
export const Ledgeramount = styled.div`
  width: 15%;
`;
export const Source = styled.div`
  width: 15%;
`;
export const Description = styled.div`
  width: 30%;
`;
export const Reason = styled.div`
  width: 20%;
`;
