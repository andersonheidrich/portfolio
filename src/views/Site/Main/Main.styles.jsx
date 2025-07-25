import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  font-family: "Inter", sans-serif;
  padding: 80px 200px 80px 40px;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 1440px) {
    padding-right: 120px;
  }

  @media screen and (max-width: 1024px) {
    padding-right: 40px;
    padding-left: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 40px;
    overflow-y: hidden;
  }

  @media screen and (max-width: 425px) {
    padding: 24px;
  }
`;
