import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    width: 36rem;
    height: 24rem;
    padding: 24px 0px 24px 0px;

    background-color: ${({ theme }) => theme.body};
    box-shadow: ${({theme}) => theme.shadow};
    border: none;
    border-radius: 24px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h4 {
        color: ${({theme}) => theme.title};
        font-size: small;

        width: 30rem;
        text-align: start;

        margin: 0px 0px 12px 0px;
    }

    a {
        text-decoration: none;
    }
`;

export const ButtonToggle = styled.button `
    background-color: ${({theme}) => theme.body};
    //box-shadow: ${({theme}) => theme.shadow};
    color: ${({theme}) => theme.text};
    
    border: none;
    border-radius: 6px;
    width: 30rem;
    height: 3rem;
    
    display: flex;
    align-items: center;
    justify-content: start;
    
    margin: 0px 0px 6px 0px;
    padding: 0px 0px 0px 12px;
    
    text-align: start;
    font-weight: 600;

    cursor: pointer;

    img{
        pointer-events: none;
        margin: 0px 24px 0px 0px;
    }
`;

