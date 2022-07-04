
import styled from 'styled-components';

export const Container = styled.div`

    button{
        position: absolute;
        top: 1rem;
        left: 1rem;

        background-color: transparent;
        color: white;
        font-size: 1rem;

        &:hover{
            filter: brightness(0.9);
        }
    }

    width: 100%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;


    form{
        
        h1{
            color: white;
        }

        display: flex;
        min-width: 500px;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
        border-radius: 1rem;

        div{
            display: flex;
            flex-direction: column;
            width: 100%;
            background: white;

            border: 0.1rem solid white;
            padding: 1rem;
            border-radius: 1rem;

            label{
                margin: 0.5rem 0 0.5rem 0;
            }

            input[type="text"],
            input[type="password"]{
                padding: 0.5rem;
                border: none;
                border-radius: 0.3rem;
                background-color: rgb(240,240,240);
            }

            input[type="submit"]{
            width: 100%;
            cursor: pointer;
            padding: 0.6rem;
            border: none;
            background-color: #fa770f;
            color: white;
            margin: 0.7rem 0 0.7rem 0;
        }
        }
    }

`