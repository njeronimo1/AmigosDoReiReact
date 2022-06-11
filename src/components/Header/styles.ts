
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #161717;
    color: white;
    padding-left: 1rem;

    display:flex;
    justify-content: space-between;

    p{
        display: none;
    }

    div{
        display: flex;
        align-items: center;

        span{
            padding: 0 1rem 00;
            color: white;
            cursor: pointer;

            &:hover{
                opacity: 0.8;
            }
            &:focus{
                opacity: 1;
            }
        }
    }

    @media(max-width:500px){
        font-size:1rem;

        h2{
            display: none;
            
        }
        p{
            display: block;
            
        }
        
    }
`