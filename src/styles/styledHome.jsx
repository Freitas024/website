import styled from 'styled-components';


export const Wrapper = styled.main `
    margin: 150px 0px 60px 0px;
    background-color: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const Container = styled.div `
    background-color: none;
    padding: 110px 0px 0px 160px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
        font-size: 1.3rem;
        margin-bottom: 6px;
    }

    h2 span {
        color: #4361EE;
    }

    h3 {
        font-size: 1rem;
        margin-bottom: 18px;
    }

    li {
        font-size: 14px;
        list-style-type: none;
        margin-bottom: 6px;
    }
    li span {
        font-size: 14px;
        font-weight: bolder;

        padding: 0px 6px;

        cursor: pointer;
    }

    a {
        color: #363636;
        text-decoration: none;
    }
`;
