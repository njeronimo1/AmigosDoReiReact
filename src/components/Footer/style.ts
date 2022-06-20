import styled from "styled-components";

export const Container = styled.footer`

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #161717;
    
    width: 100%;
    position: absolute;
    bottom: 0;
    
    h3{
        display: none;
    }

    @media(max-width:500px) {
        font-size: 0.6rem;
        position: relative;
        h4{
            display: none;
        }

        h3{
            display: flex;
            text-align: center;
        }

    }
`