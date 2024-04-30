import styled from 'styled-components';

export const Wrapper = styled.div `
    background: #4361EE;

    min-width: 100vh;
    min-height: 6rem;
    padding: 2rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;

    h1 {
        max-width: 24rem;
        font-size: 1.2rem;
        color: white;
    }
    ul {
        background: none;
        width: 18rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    ul li {
        list-style-type: none;
    }

    ul li img {
        cursor: pointer;
    }
`