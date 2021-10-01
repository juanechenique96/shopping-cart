import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  margin-bottom: 10vh;

  img {
    width: 90%;
    height: auto;
    object-fit: cover;
    object-position: center center;
    filter: brightness(65%);
  }

  .hero-title {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
  }

  .hero-title h1 {
    font-size: 92px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: 4px 4px 2px rgba(2, 30, 93, 0.7);
  }

  @media only screen and (max-width: 890px) {
    .hero-title h1 {
      font-size: 64px;
    }
  }

  @media only screen and (max-width: 580px) {
    .hero-title h1 {
      font-size: 36px;
    }
  }

  @media only screen and (max-width: 360px) {
    .hero-title h1 {
      font-size: 30px;
    }
  }
`;
