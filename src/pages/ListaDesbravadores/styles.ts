import styled from 'styled-components';

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

