import styled from "styled-components";

export const AmountWrapperDiv = styled.div``;

export const SuggestedAmountsWrapper = styled.div`
  margin-bottom: 1rem;

  button:not(:last-child) {
    margin-right: 10px
  }
`;

export const SuggestedAmountButton = styled.button`
  display: inline-block;
  box-sizing: content-box;
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid #018dc4;
  border-radius: 3px;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-overflow: clip;
  background: #0199d9;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  text-shadow: -1px -1px 0 rgba(15, 73, 168, 0.66);
  transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
`;

export const AmountInput = styled.div``;

export const ClickToPay = styled.button`
display: inline-block;
  box-sizing: content-box;
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid #018dc4;
  border-radius: 3px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-overflow: clip;
  background: #0199d9;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
  text-shadow: -1px -1px 0 rgba(15, 73, 168, 0.66);
  transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
`;

export const Tile = styled.label<{ checked: boolean }>`
  display: block;
  background-color: ${props => props.theme.colors.light};
  padding: 20px;
  ${props => props.checked && `border: 2px solid #21125E;`}
  cursor: pointer;
`;