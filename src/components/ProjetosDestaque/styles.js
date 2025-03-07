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
        margin: 30px 0px 0px 0px;

        list-style: none;
        

        strong {
            font-family: 'Montserrat', sans-serif;
            color: #7543fe;
            font-style: italic;
            font-size: 15px;
        }

        a {
            font-family: 'Montserrat', sans-serif;
            color: #7543fe;
            font-style: italic;
            font-size: small;
            text-decoration: none;
        }

        p {
            font-family: 'Montserrat', sans-serif;
            font-size: small;
            font-style: italic;
            font-weight: 400;
            margin: 12px 0px;

        }
    }
`