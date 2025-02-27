import styled from "styled-components";

export const HomeContainer = styled.main `
    display: flex;
    align-items: center;
    justify-content: center;
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

        p {
            color: #7543fe;
        }
     }
`;