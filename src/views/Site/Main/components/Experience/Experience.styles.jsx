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

export const Period = styled.div`
  margin-right: 16px;
  font-size: 14px;
  font-weight: bold;
  width: 200px;
  /* color: #ed6104; */
  opacity: 0.9;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-left: 16px;
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
  /* width: 100%; */
`;
export const Stack = styled.div`
  display: flex;
  border-radius: 24px;
  margin-right: 8px;
  padding: 8px;
  font-size: 12px;
  font-weight: bold;
  /* color: #131a2a; */
  background-color: #ed6104;
`;
