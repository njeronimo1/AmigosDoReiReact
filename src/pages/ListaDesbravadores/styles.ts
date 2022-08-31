import styled from 'styled-components';

export const ContainerHeader = styled.div`
    background-color: #2c2c2c;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    .txt_bem_vindo{
        border-right: 0.15rem solid gray;
        padding-right: 1rem;
    }

    .user_name{
        margin-left: 1rem;
    }

    .btn_sair{
        margin-left: 1rem;
        border: 0.15rem solid #ce6a00;
        padding: 0.2rem 0.6rem;
        background-color: transparent;
        color: white;
        border-radius: 14px;
        transition: 0.3s all;

        &:hover{
            background-color: #ce6a00;
            border: 0.15rem solid #2c2c2c;
        }
    }

`

export const Container = styled.div `

    color: white;
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;

    table{
        border: 0.2rem solid #ce6a00;
        border-radius: 0.8rem;
        padding: 2%;
        width: 100%;
        text-align: left;
    }

    div{
        display: flex;
        align-items: center;
        h1{
            width: 90%;
        }
    }
    
    
    tbody{
        td{
            button{
                cursor: pointer;
                background-color:transparent;
                color: white;
                border: 0.15rem solid white;
                border-radius: 0.5rem;

                &:hover{
                    border:0.15rem solid #ce6a00;
                    color: #ce6a00;
                }
            }
        }
    }

    @media (max-width:500px){
        padding: 2%;
        p{
            font-size: 0.8rem;
        }
        h1{
            font-size: 1rem;
        }
        thead{
            th{
                font-size: 0.75rem;
            }
        }
        tbody{
            td{
                font-size: 0.65rem;
                button{
                    font-size: 0.65rem;
                }
            }
        }

    }

    
    

`

export const ContainerBlockedAccess = styled.div`

    width: 100%;
    height: 100vh;
    background: #2c2c2c;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #ce6a00;

    p{
        border: 0.15rem solid white;
        padding: 0.2rem 1.5rem;
        transition: 0.2s all;

        &:hover{
            background-color: white;
            color: #2c2c2c;
        }

        &:active{
            opacity: 0.8;
        }
    }

`
