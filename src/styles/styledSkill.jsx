import styled, {keyframes} from 'styled-components'; 


const scrollx = keyframes` 
    from {
        left: translateX(0);
    }
    to { 
        transform: translateX(-106%);
    }
`;

export const Wrapper = styled.main `
    background: none;
    margin-bottom: 0px 0px 0px 0px;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        background: none;
        max-width: 1080px;
        padding: 18px;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 72px;
        overflow: hidden;
    }
    
    ul {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 72px;
        animation: ${scrollx} 20s linear infinite;
    }

    li {
        background: white;
        display: flex;
        align-items: center;
        border-radius: 0.5rem;
        gap: 12px;
        padding: 10px 20px;
        list-style-type: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

`;


