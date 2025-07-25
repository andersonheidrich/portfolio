import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Menu = styled.div`
  display: flex;
  margin-bottom: 16px;

  span {
    font-size: 16px;
    font-weight: bold;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 24px;
  }
`;
