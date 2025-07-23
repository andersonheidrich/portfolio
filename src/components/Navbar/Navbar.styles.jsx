import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  justify-content: space-between;
  font-family: Barlow, sans-serif;
  padding: 80px 60px 80px 280px;

  span {
    font-size: 16px;
    font-weight: bold;

    @media screen and (max-width: 990px) {
      font-size: 14px;
    }

    @media screen and (max-width: 425px) {
      font-size: 12px;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Subtitle = styled.div`
  display: flex;
  font-size: 16px;
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
`;

export const Home = styled.div`
  width: 180px;
`;

export const Logo = styled.div`
  margin-top: auto;
  margin-bottom: auto;

  img {
    width: 80px;
    max-width: 80px;
    cursor: pointer;

    @media screen and (max-width: 990px) {
      width: 70px;
    }

    @media screen and (max-width: 480px) {
      width: 60px;
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .nav-menu {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
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
`;
