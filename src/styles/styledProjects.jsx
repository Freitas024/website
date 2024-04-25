import styled from 'styled-components';

export const Wrapper = styled.div`
    background: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0rem 0rem 6rem 0rem;

    h2 {
        margin: 4rem 0rem;
        font-size: 2rem;
        color: #4361EE;
    }
    
`
export const Container = styled.div`
    background: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6rem 18rem;

    h3 {
        color: #363636;
        font-size: 1.1rem;
        margin: 1rem 0rem;
    }

    li {
        list-style-type: none;
        background: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 10rem;
    }
    
    li span {
        background: #4361EE;
        border-radius: 3px;
        color: white;
        padding: 6px;
        font-size: 0.8rem;
        font-weight: medium;
    }
    
`

export const Screembox = styled.div `
    border-radius: 1rem;
    width: 24rem;
    height: 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`