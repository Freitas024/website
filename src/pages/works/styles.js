import styled from "styled-components";



export const Wrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
        background-color:rgb(22, 22, 22);
        width: 75%;
        height: 3rem;
        border: none;
        border-radius: 6px;
        margin: 60px 0px;

        &::placeholder {
            padding: 18px;
            color: #c4c4c4;
        }
    }
`;
export const Ul = styled.ul`
    width: 80%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    place-items: center;
    gap: 20px;

    li {
        width: 100%;
        max-width: 24rem;
        box-shadow: ${({theme}) => theme.shadow};
        padding: 12px;
        border-radius: 6px;
        list-style: none;

        h3 {
            font-family: 'Alegreya SC', serif;
            font-size: medium;
            font-weight: 600;
            font-style: italic;
            color: #7543fe;
        }

        p {
            font-family: 'Montserrat', sans-serif;
            font-size: small;
            font-weight: 500;
            font-style: italic;
            color: ${({theme}) => theme.text};
            margin: 12px 0px;
        }
        ol {
            display: flex;
            align-items: start;
            justify-content: center;
            flex-direction: column;
            margin-bottom: 14px;
        }

        a{
            color: #7543fe;
            text-decoration: none;
            font-family: 'Montserrat', serif;
            font-size: small;
            font-style: italic;
        }

    }
`;