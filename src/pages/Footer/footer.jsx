import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: #276395;

  height: 124px;
  padding-bottom: 30px;

  display: flex;
  align-items: flex-end;
  justify-content: space-around;

  ol h2 {
    color: #ffffff;

    font-size: large;
    font-weight: 600;
    margin: 12px 6px;
  }

  ol {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  ol p {
    color: #ffffff;

    font-size: small;
    font-weight: 500;
    margin: 6px;
  }

  ul {
    background-color: none;

    width: 300px;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  li {
    color: #ffffff;
    font-size: small;
    font-weight: 600;

    cursor: pointer;
    list-style-type: none;

    :hover {
      color: #c4c4c4;
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;
