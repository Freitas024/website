import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  padding: 72px 0px 0px 0px;
`;

export const Profile = styled.div`
  background-color: none;
  width: 36rem;

  display: flex;
  align-items: center;
  justify-content: start;

  margin: 0px 0px 36px 0px;

  img {
    border: none;
    border-radius: 100%;
    margin: 0px 24px 0px 0px;
  }

  div {
    background-color: none;
    height: 2.5rem;

    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: column;
  }

  h2 {
    font-size: medium;
    font-weight: 800;
  }

  h3 {
    color: #853cd9;
    font-size: small;
    font-weight: 500;
  }

`;

export const About = styled.div`
  background-color: none;

  display: flex;
  align-items: start;
  flex-direction: column;

  width: 36rem;

  margin: 0px 0px 36px 0px;

  h3 {
    font-size: medium;
    font-weight: 600;
  }

  p {
    font-size: small;
    text-align: justify;
    line-height: 18px;
  }

  strong {
    color: rgba(133, 60, 217, 1);
  }

  div {
    background-color: none;

    width: 30rem;

    display: flex;
    align-items: center;
    justify-content: start;
  }

  div > a {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.shadow};
    border: none;
    border-radius: 6px;

    width: 6rem;

    padding: 12px 12px;
    margin: 0px 24px 0px 0px;

    list-style: none;
    text-decoration: none;

    font-weight: 500;
    font-size: small;

    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
      transform: translateY(-2px);
    }
  }

  ul {
    background-color: none;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Projects = styled.div`
  background-color: none;

  display: flex;
  align-items: start;
  flex-direction: column;

  width: 36rem;

  margin: 0px 0px 36px 0px;

  h3 {
    color: ${({ theme }) => theme.text};
    font-size: medium;
    font-weight: 600;
  }

  li {
    border: none;
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.shadow};

    width: 36rem;

    padding: 18px;
    margin: 0px 0px 24px 0px;

    list-style: none;
  }

  li > h3 {
    color: #853cd9;
  }

  li > p {
    font-size: small;
    font-weight: 500;
    text-align: justify;
    line-height: 18px;

    margin: 12px 0px;
  }

  div {
    background-color: none;

    width: 18rem;

    display: flex;
    align-items: center;
    justify-content: start;
  }

  div > a {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.shadow};
    border: none;
    border-radius: 6px;

    width: 6rem;

    padding: 12px 12px;
    margin: 0px 24px 0px 0px;

    list-style: none;
    text-decoration: none;

    font-weight: 500;
    font-size: small;

    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Contact = styled.div`
  background-color: none;

  display: flex;
  align-items: start;
  flex-direction: column;

  width: 36rem;

  margin: 0px 0px 36px 0px;

  h3 {
    color: ${({ theme }) => theme.text};
    font-size: medium;
    font-weight: 600;
  }

  label {
    color: ${({ theme }) => theme.text};
    font-size: medium;
    font-weight: 400;

    margin: 18px 0px 12px 0px;
  }

  form {
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: column;
  }

  form > input {
    background-color: ${({ theme }) => theme.body};
    box-shadow: ${({ theme }) => theme.shadow};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 3px;

    width: 36rem;
    height: 2rem;
    padding: 0px 6px;
  }

  form > textarea {
    background-color: ${({ theme }) => theme.body};
    box-shadow: ${({ theme }) => theme.shadow};
    color: ${({ theme }) => theme.text};
    border: none;
    border-radius: 3px;

    width: 36rem;
    height: 12rem;
    padding: 12px 6px;
  }

  form > button {
    background-color: ${({ theme }) => theme.body};
    color: #853cd9;
    box-shadow: ${({ theme }) => theme.shadow};
    border: none;
    border-radius: 6px;

    width: 6rem;

    padding: 12px 12px;
    margin: 24px 0px;

    list-style: none;
    text-decoration: none;

    font-weight: 700;
    font-size: small;

    display: flex;
    align-items: center;
    justify-content: space-around;

    cursor: pointer;

    &:hover {
      transform: translateY(-1px);
    }
  }
`;

export const Social = styled.div`
  background-color: none;

  width: 36rem;

  padding: 12px;

  h3 {
    color: ${({ theme }) => theme.text};
    font-size: medium;
    font-weight: 600;
  }

  a {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    box-shadow: ${({ theme }) => theme.shadow};
    border: none;
    border-radius: 6px;

    width: 6rem;

    padding: 6px 6px;

    list-style: none;
    text-decoration: none;

    font-weight: 500;
    font-size: small;

    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
      transform: translateY(-1px);
    }
  }

  div {
    background-color: none;

    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 12px 0px;
  }
`;
