import styled from 'styled-components';

export const Wrapper = styled.main`

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    padding: 72px 0px 0px 0px;
`;

export const Profile = styled.div `

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
        color: #853CD9;
        font-size: small;
        font-weight: 500;
    }


`;

export const About = styled.div `
    background-color: none;

    display: flex;
    align-items: start;
    flex-direction: column;

    width: 36rem;

    h3 {
        font-size: medium;
        font-weight: 600;
    }

    p {
        font-size: small;
        text-align: justify;
        line-height: 18px;
    }

    strong{
        color: #853CD9;
    }

    a {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        box-shadow: ${({theme}) => theme.shadow};
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

    div {
        background-color: none;

        width: 30rem;

        display: flex;
        align-items: center;
        justify-content: start;
    }
`; 