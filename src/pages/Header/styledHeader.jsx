import styled from "styled-components";

export const Wrapper = styled.nav`
  background-color: none;

  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  img {
    background-color: none;

    padding: 6px;
  }

  ul {
    background-color: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 30vh;
    height: 30px;
  }

  li {
    display: block;
    color: #363636;

    font-size: small;
    font-weight: 600;

    list-style-type: none;
    cursor: pointer;

    :hover {
      color: #276395;
    }
  }

  a {
    color: #363636;

    text-decoration: none;
  }
`;
