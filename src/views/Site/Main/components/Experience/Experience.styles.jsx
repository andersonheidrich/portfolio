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

export const Card = styled.div`
  display: flex;
  min-height: 200px;
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(41, 56, 90, 0.4);
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Period = styled.div`
  margin-right: 16px;
  font-size: 13px;
  font-weight: bold;
  width: 200px;
  opacity: 0.9;

  @media screen and (max-width: 425px) {
    margin-bottom: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 16px;
  font-weight: bold;
  color: #ed6104;
`;

export const Text = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 16px;

  ul {
    margin-left: 20px;
  }
`;

export const StackGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Stack = styled.div`
  display: flex;
  border-radius: 24px;
  margin: 4px 4px 0 0;
  padding: 8px;
  font-size: 12px;
  font-weight: bold;
  background-color: #ed6104;
`;
