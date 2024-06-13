import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-around;

  height: 10vh;

  ol {
    button {
      background: none;
      border: none;

      cursor: pointer;
    }
    ul {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;

      position: absolute;
      top: 12vh;
      right: 18vw;
      width: 12vw;
      height: 24vh;
      z-index: 2;

      li {
        background-color: rgba(39, 99, 149, 0);
        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: center;
        width: 10vw;
        height: 5vh;

        list-style-type: none;

        :hover {
          transition: 600ms;
          color: rgba(39, 99, 149, 0.9);
        }

        a {
          color: #363636;
          text-decoration: none;
        }
      }
    }
  }

  @media (max-width: 1080px) {
    ol {
      ul {
        background-color: white;
        border-radius: 12px;
        box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);

        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;

        position: absolute;
        top: 12vh;
        right: 12vw;
        width: 48vw;
        height: 24vh;
        z-index: 2;
      }
    }
  }
`;
