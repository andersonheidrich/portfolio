import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const Image = styled.div`
  display: flex;
  margin-right: 16px;
  width: 200px;
  height: auto;
  /* max-width: 200px; */

  img {
    width: 200px;
    height: auto;
    border-radius: 4px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Text = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 16px;
`;

export const StackGroup = styled.div`
  display: flex;
`;

export const Stack = styled.div`
  display: flex;
  border-radius: 24px;
  margin-right: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: bold;
  background-color: #ed6104;
`;
