import styled from 'styled-components';

export const Wrapper = styled.div `
    background: #4361EE;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    padding: 2rem;

    h1 {
        max-width: 24rem;
        font-size: 1.5rem;
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