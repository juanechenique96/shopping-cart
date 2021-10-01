import styled from "styled-components";

export const Navbar = styled.header`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 13vh;

  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    height: 10vh;
    width: 100%;
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

  .nav-menu {
    display: flex;
    justify-content: space-between;
    width: 360px;
  }

  .nav-menu li {
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
  }

  .nav-menu li:hover {
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

  .hamburger {
    display: none;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: #101010;
  }

  @media only screen and (max-width: 890px) {
    .business-logo {
      position: fixed;
      left: 40px;
      font-size: 24px;
    }

    .header-logos {
      position: fixed;
      right: 10px;
      text-align: right;
    }

    .header-logos img {
      margin-right: 20px;
    }

    .nav-menu {
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      position: fixed;
      left: -100%;
      top: 70px;
      width: 100%;
      height: 120px;
      font-weight: 600;
      background-color: white;
    }

    .nav-menu li {
      font-size: 18px;
    }

    .nav-menu.active {
      left: 0;
    }

    .menu {
      display: block;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 360px) {
    .header-logos {
      padding-left: 10px;
    }

    .nav-menu {
      top: 49px;
    }

    .business-logo {
      left: 20px;
    }
  }

  @media only screen and (max-width: 360px) {
    .search,
    .shopping-cart {
      display: none;
    }

    .menu {
      position: fixed;
      right: 0px;
    }

    .business-logo {
      left: 20px;
    }

    .nav-menu {
      top: 49px;
    }
  }
`;
