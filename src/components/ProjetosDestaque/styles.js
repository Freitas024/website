import styled from 'styled-components';

export const Wrapper = styled.main `
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    li{
        border: none;
        border-radius: 12px;
        box-shadow: ${({ theme }) => theme.shadow};

        width: 36rem;

        padding: 18px;
        margin: 0px 0px 30px 0px;

        list-style: none;
        

        a {
            color: #7543fe;
            text-decoration: none;
            font-family: 'Courier New', Courier, monospace;
            font-size: medium;
        }

        p {
            font-family: 'Courier New', Courier, monospace;
            font-size: 14px;
            font-weight: 400;
        }
    }
`