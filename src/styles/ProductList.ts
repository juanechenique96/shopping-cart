import styled from "styled-components";

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
  }

  .cardContainer:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    cursor: pointer;
  }

  .container:nth-child(odd) {
    justify-content: flex-end;
    margin-right: 25px;
  }
  .container:nth-child(even) {
    justify-content: flex-start;
    margin-left: 25px;
  }
`;
