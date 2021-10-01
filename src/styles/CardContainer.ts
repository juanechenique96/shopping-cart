import styled from "styled-components";

export const CardContainer = styled.div`
  width: 360px;
  height: 500px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
  }

  .price {
    margin-top: 5px;
    font-weight: 600;
  }

  .price-before {
    text-decoration: line-through;
    font-size: 14px;
    color: #292929;
  }

  .descount {
    z-index: 1;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 30px;
    margin-top: 10px;
    background-color: #054bf0;
  }

  .descount p {
    color: white;
  }

  .image-container {
    width: 300px;
    height: 400px;
    padding: 30px;
  }

  .image-container img {
    z-index: 0;
    width: 100%;
    height: 350px;
    object-fit: scale-down;
    object-position: center center;
  }

  @media only screen and (max-width: 420px) {
    width: 260px;
    height: 400px;

    h1 {
      margin-top: 3px;
      font-size: 14px;
      text-align: center;
    }

    .image-container {
      width: 200px;
      height: 300px;
      padding: 0px 30px 30px 30px;
    }
  }
`;
