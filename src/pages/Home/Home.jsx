import styled from "styled-components";

export const Wrapper = styled.main`
  background-color: none;
`;

export const BlocoUm = styled.div`
  background-color: none;

  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: auto auto;
  gap: 100px;

  height: 60vh;
`;

export const CounterAnimation = styled.div`
  background-color: none;

  width: 30vw;
  height: 60vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CounterInformation = styled.div`
  background: none;

  width: 40vw;
  height: 60vh;

  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 18px;

    margin: 6px 0px;

    span {
      color: #731dd8;
      font-weight: 700;
    }
  }

  h2 {
    font-size: 14px;
    font-weight: 600;
  }
  ul {
    padding: 12px 0px;
    li {
      list-style-type: none;
      margin: 6px 0px;
      p {
        font-size: 12px;
        font-weight: 400;
        :hover {
          color: #276395;
        }
        a {
          color: #363636;
          text-decoration: none;
          font-weight: 700;
          padding: 0px 0px 0px 6px;
        }
        img {
          transform: rotate(45deg);
        }
      }
    }
  }
`;

export const BlocoDois = styled.div`
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 24px 0px;

  h1 {
    background-color: none;
    padding: 12px;
    width: 66vw;
    color: #276395;
    font-size: x-large;
  }

  ol {
    background-color: none;

    width: 80vw;

    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: auto auto;
    gap: 60px 300px;
  }
  ul {
    background-color: none;

    height: 42vh;
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: column;
    main {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
      width: 24vw;
      height: 30vh;

      cursor: pointer;
    }

    li {
      color: #276395;

      font-size: 18px;
      font-weight: 600;

      list-style-type: none;
    }

    p {
      color: rgba(54, 54, 54, 0.6);

      font-size: 12px;
      font-weight: 600;

      list-style-type: none;
    }
  }
`;
