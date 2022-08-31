
import styled from 'styled-components';

export const Container = styled.div`

.btn_voltar{
        position: absolute;
        top: 1rem;
        left: 1rem;

        background-color: transparent;
        color: white;
        font-size: 1rem;
        border: none;

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

    background-color: #161b22 ;

    .formulario_login{
        
        h1{
            text-align: center;
            color: black;
        }
        
        background-color: white;
        width: 30%;
        display: flex;
        min-width: 500px;
        flex-direction: column;
        align-items: center;
        padding: 1.5rem;
        border-radius: 1rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        .btn_entrar_with_google{
            width: 70%;
            cursor: pointer;
            padding: 0.6rem;
            border: none;
            background-color: white;
            border:0.15rem solid #161b22; 
            transition: 0.3s all;
            color: orange;

            &:hover{
                
                background-color: #161b22;
                color: white;
            }        
        }
    

    }

    

`