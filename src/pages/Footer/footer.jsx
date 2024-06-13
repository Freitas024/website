import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #276395;

  height: 18vh;

  display: flex;
  align-items: center;
  justify-content: space-around;

  ol {
    background-color: none;

    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: space-around;

    width: 24vw;
    height: 12vh;

    h2 {
      background: linear-gradient(to right, #ffb703, #fb8500);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: medium;
      font-weight: 600;
    }

    div {
      background-color: none;
      width: 18vw;
      height: 8vh;

      display: flex;
      align-items: start;
      justify-content: space-around;
      flex-direction: column;
      p {
        color: white;
        font-size: small;
        font-weight: 500;
      }
    }
  }

  ul {
    background-color: none;

    width: 18vw;
    height: 6vh;

    display: flex;
    align-items: center;
    justify-content: space-around;

    li {
      list-style-type: none;
      text-decoration: none;
      :hover {
        color: rgba(255, 255, 255, 0.6);
        transition: 600ms;
      }
    }

    a {
      color: white;
      font-size: small;
      text-decoration: none;
    }
  }

  @media (max-width: 1080px) {
    background-color: #276395;

    height: 18vh;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    ol {
      background-color: none;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;

      width: 60vw;
      height: 12vh;

      h2 {
        background: linear-gradient(to right, #ffb703, #fb8500);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: medium;
        font-weight: 600;
      }

      div {
        background-color: none;
        width: 60vw;
        height: 8vh;

        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        p {
          color: white;
          font-size: small;
          font-weight: 500;
        }
      }
    }

    ul {
      background-color: none;

      width: 60vw;
      height: 6vh;

      display: flex;
      align-items: center;
      justify-content: space-around;

      li {
        list-style-type: none;
        text-decoration: none;
      }

      a {
        color: white;
        font-size: small;
        text-decoration: none;
      }
    }
  }
`;
