import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: #101010;
    }

    h1 {
        font-size: 32px;
    }

    h2 {
        font-size: 24px;
    }

    a, li, p {
        font-weight: 500;
        font-size: 16px;
    }

    li {
        list-style-type: none;
    }

    a  {
        text-decoration: none;
    }

    body {
        overflow-x: hidden;
        background-color: white;
    }
`;
