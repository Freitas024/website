import styled, { keyframes } from 'styled-components';



const slideDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px); 
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;


export const Wrapper = styled.ul`
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;

    width: 18rem;
    height: 12rem;

    background-color: ${({ theme }) => theme.body};
    box-shadow: ${({theme}) => theme.shadow};
    border: none;
    border-radius: 6px;

    position: fixed;
    top: 8%;
    left: 72%;

    li {
        color: ${({theme}) => theme.title};
        font-size: medium;

        width: 16rem;
        text-align: center;

        padding: 12px 12px;
        margin: 12px 0px;
        border-radius: 6px;
        list-style-type: none;

        div {
            width: 90%;
            padding: 12px;
            border: none;
            border-radius: 3px;
            cursor: pointer;

            &:hover {
                background: ${({theme}) => theme.hover};
            }
        }
    }

    animation: ${({toggle}) => (toggle ? "none  " : slideDown)} 0.6s ease-out;

`;

