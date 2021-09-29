import styled from "styled-components";

export const Navbar = styled.header`
  width: 100%;
  margin-bottom: 13vh;

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    height: 10vh;
  }

  .fixed-top {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }

  .navbar > * {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navbar ul {
    display: flex;
    justify-content: space-between;
    width: 360px;
  }

  .navbar ul li {
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }

  .navbar ul li:hover {
    color: #054bf0;
  }

  .business-logo {
    font-family: "Urbanist", sans-serif;
    font-size: 36px;
    font-weight: 700;
    cursor: pointer;
    letter-spacing: -1px;
    color: #021e5d;
  }

  .header-logos {
    display: flex;
    justify-content: space-around;
    width: 150px;
  }

  .header-logos img {
    cursor: pointer;
  }
  .search,
  .shopping-cart {
    width: 20px;
    height: 20px;
  }

  .menu {
    display: none;
    width: 32px;
    height: auto;
  }
`;
