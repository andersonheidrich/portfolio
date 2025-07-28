import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  padding: 16px 16px 0 16px;

  span {
    color: #ffffff4a;
    font-size: 14px;
  }

  a {
    color: #ffffff7a;
    cursor: pointer;

    &:hover {
      color: #ed6104;
    }
  }
`;
