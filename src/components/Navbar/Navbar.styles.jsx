import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  justify-content: space-between;
  font-family: "Inter", sans-serif;
  padding: 80px 40px 80px 200px;

  span {
    font-size: 14px;
    font-weight: bold;
  }

  @media screen and (max-width: 1440px) {
    padding-left: 120px;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 40px;
    padding-right: 20px;

    span {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 60px 40px 40px;
  }

  @media screen and (max-width: 425px) {
    padding: 60px 24px 40px;
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 12px;

  @media screen and (max-width: 1024px) {
    font-size: 42px;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navigation = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 64px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .nav-menu {
    display: flex;
    flex-direction: column;
  }

  .menu-item {
    position: relative;
    color: ${({ active }) => (active ? "#ed6104" : "#fff")};
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    width: max-content;
    margin-top: 24px;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      width: ${({ active }) => (active ? "100%" : "0%")};
      height: 1px;
      background-color: #ed6104;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #ed6104;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  .contact-icon {
    margin: 0 8px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    justify-content: flex-start;
  }
`;
