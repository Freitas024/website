import styled from 'styled-components';

export const Wrapper = styled.div`
  background: white;
  box-shadow: rgba(54, 54, 54, .2) 0px 0px 6px 0px ;
  
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6%;
  padding: 12px 0px;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-around;

  ul {
    background-color: none;
    width: 18em;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  li {
    font-family: 'Open sans', sans-serif;
    font-size: 14px;
    font-weight: normal;
    list-style-type: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #363636;
  }

`;

export const Title = styled.h3`
    color: #4361EE;
    font-family: 'Open sans', sans-serif;
    font-size: 1.2em;
`;