import styled from "styled-components";

export const HomeContainer = styled.main `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 60px 0px;

    img {
        width: 80px;
        height: 80px;
        margin: 0px 30px;
        border-radius: 5%;
    }

     div {
        height: 50px;
        display: flex;
        align-items: start;
        justify-content: space-around;
        flex-direction: column;

        h3 {
            font-family: "Alegreya", serif;
            font-size: large;
            font-weight: 700;
        }

        p {
            font-family: "Montserrat", sans-serif;
            font-style: italic;
            font-size: small;
            color: #7543fe;
        }
     }
`;

export const InfoContainer = styled.div`
    width: 36%;
    
    h4 {
        font-family: "Alegreya SC", serif;
        font-size: larger;
        font-weight: bolder;
    }

    p {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: small;
        text-align: justify;
        line-height: 1.5;

        span {
            color: #7543fe;
            font-weight: 600;
        }
    }

    button {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
        display: inline-flex;
        align-items: center;
        gap: 8px;
        border: none;
        box-shadow: ${({theme}) => theme.shadow};
        margin: 0px 0px 24px 0px;
        padding: 12px 24px;
        white-space: nowrap;   
        cursor: pointer;

        h3 {
            font-family: 'Montserrat', sans-serif;
            font-style: italic;
            font-size: small;
            font-weight: 500;
        }
    }

    ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: row;
        padding: 18px 0px;

        li {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            box-shadow: ${({theme}) => theme.shadow};
            margin: 0px 24px 0px 0px;
            padding: 12px 24px;
            white-space: nowrap;   
            cursor: pointer;

            h3 {
                font-family: 'Montserrat', sans-serif;
                font-style: italic;
                font-size: small;
                font-weight: 500;
            }
        }
    }

    ol {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: row;
        padding: 18px 0px;
        overflow: hidden;

        li {
            display: inline-flex;
            align-items: center;
            gap: 0px;
            margin: 0px 0px 0px 0px;
            padding: 12px 19px;
            white-space: nowrap;   

            h3 {
                font-family: "Alegreya SC", serif;
                font-size: larger;
                font-weight: bolder;
            }
        }

    }

`;

export const ProjectContainer = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 6rem;
    height: 30rem;
    width: 36%;

    h4 {
        font-family: "Alegreya SC", serif;
        font-size: larger;
        font-weight: bolder;
        width: 100%;
        margin-top: 72px;
    }

    button {
        background: none;
        border: none;
        border-radius: 6px;
        margin: 24px 0px 24px 0px;
        padding: 6px 12px;
        font-family: 'Montserrat', sans-serif;
        font-size: small;
        font-weight: 400;
        color: #7543fe;
        cursor: pointer;
        
    }
`;