import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: none;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  padding: 100px 100px 12px 160px;
`;

export const Counter = styled.div`
  background-color: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 400px;
  width: 600px;

  padding: 0px 0px 0px 0px;
  h2 {
    font-size: larger;

    margin: 80px 0px 6px 0px;
  }

  h2 span {
    color: #731dd8;
  }

  h3 {
    font-size: medium;

    margin-bottom: 24px;
  }

  ul {
    background-color: none;
    list-style: none;
  }
  ul li {
    font-size: small;
    font-weight: 500;
  }

  ul li a {
    margin-left: 6px;
    text-decoration: none;
    font-weight: 700;
    color: black;
  }

  ul li img {
    transform: rotate(45deg);
  }
`;

export const Animation = styled.div`
  height: 400px;
  width: 500px;

  background-color: none;
`;

export const CounterProject = styled.div`
  background-color: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 219vh;
  padding: 0px 0px 30px 0px;

  h1 {
    background-color: none;
    color: #731dd8;

    width: 160vh;
    padding: 12px;

    font-size: x-large;
    font-weight: 700;
  }

  ol {
    background-color: none;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;

    width: 160vh;
    padding: 12px;
  }

  ul {
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    height: 48vh;
  }

  li {
    color: #276395;

    font-size: large;
    font-weight: 700;

    list-style-type: none;
  }

  main {
    background-color: none;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;

    height: 12vh;
    width: 48vh;

    margin: 24px 0px 0px 0px;
  }

  span {
    color: #363636;
    border-radius: 6px;

    display: flex;
    align-items: center;

    font-size: small;
    font-weight: 400;
  }

  p {
    color: black;

    font-size: large;
    font-weight: 600;
  }
`;
