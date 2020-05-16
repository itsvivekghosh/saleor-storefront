import { media, styled } from "@styles";
import { css } from "styled-components";

const textProps = css`
  font-size: ${props => props.theme.typography.baseFontSize};
  margin: 0 0 0.5rem 0;
  text-align: left;
`;

export const Wrapper = styled.div`
  // background: ${props => props.theme.colors.light};
  padding: 2.5rem;
  text-align: center;
  max-height: 30rem;
  transition: 0.3s;

  // :hover {
  //   background-color: ${props => props.theme.colors.hoverLightBackground};
  // }

  ${media.largeScreen`
    padding: 1.8rem;
  `}

  ${media.smallScreen`
    padding: 0;
    padding-bottom: 1rem;

    :last-child { border-bottom: none; }
  `}

  border-bottom: 1px dashed grey;
`;

export const Grid = styled.div`
  ${media.smallScreen`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;

  `}
`;

export const DetailsColumn = styled.div`
  ${media.smallScreen`
  padding-left: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `}
`;

export const Details = styled.div`
${media.smallScreen`
  display: flex;
  flex-direction: column;
  justify-content: top;
  `}
`;

export const AddToCartRow = styled.div`
  ${media.smallScreen`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  `}
`;

export const Title = styled.h4`
  // text-transform: uppercase;
  font-weight: normal;
  ${textProps}
`;

export const Price = styled.p`
  ${textProps}
  font-weight: bold;
`;

export const Image = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 14rem
  height: 14rem;

  ${media.mediumScreen`
    width: 12rem;
    height: 12rem;
  `}

  ${media.smallScreen`
    width: 8rem;
    height: 8rem;
  `}

  > img {
    width: auto;
    height: auto;
    max-height: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const AttributeList = styled.div`
  display: flex;
  align-items: left;
  width: 100%;
  padding: 0;
  margin: 0;
  font-size: 90%;
`;

export const AttributeName = styled.span`
  color: ${props => props.theme.colors.listAttributeName};
`;
