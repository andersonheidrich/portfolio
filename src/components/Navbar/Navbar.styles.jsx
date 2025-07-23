import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  justify-content: space-between;
  /* align-items: center; */
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
  /* padding: 0 16px; */
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
  /* justify-content: center; */
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
    /* color: #fff; */
    color: ${({ active }) => (active ? "#ed6104" : "#fff")};
    /* text-decoration: none; */
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
      /* width: 0%; */
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

  /* .menu-item {
    display: flex;
    align-items: center;
    width: 120px;
    margin-top: 24px;
    cursor: pointer;
  }
  .menu-item:hover {
    color: #ed6104;
  }

  .menu-item::after {
    content: "";
    width: 0%;
    height: 1px;
    background-color: #ed6104;
    transition: width 0.3s ease;
  }

  .menu-item:hover::after {
    width: 100%;
  } */

  /* @media screen and (max-width: 990px) {
    .menu-item {
      width: 100px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;

    .menu-item {
      display: none;
    }

    &.show {
      max-height: 100%;
      flex-direction: row;
      align-items: flex-start;
      background-color: #f5eedc;
      box-shadow: 1px 1px 3px rgba(128, 128, 128, 0.15);
      position: absolute;
      top: 0;
      width: 100%;
      padding: 10px 16px;

      .menu-item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        margin: 4px 0;
      }
    }

    .menu-sandwich {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .brand {
      width: 100%;
      height: 3px;
      background-color: black;
    }
  } */
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
