
import {createGlobalStyle} from 'styled-components';
import imgFundo  from '../assets/body.jpg';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        background-image: url(${imgFundo});
    }

    body, button, input, textarea{
        font-family: 'Poppins', sans-serif;
    }
    button{
        cursor: pointer;
    }

    .edit_user_overlay{
        background-color: rgba(0,0,0,0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .edit_user_content{
        background-color: aliceblue;
        border-radius: 0.25rem;
        padding: 1.5rem;

        width: 100%;
        max-width: 500px;

        display: flex;
        flex-direction: column;
        position: relative;
    }

    .react-modal-close{
        background-color: transparent;
        border: none;
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;

        &:hover{
            filter: brightness(0.9);
        }
    }

    @media (max-width: 500px){
        .edit_user_content{
            margin: 3%;
        }
    }
    
`