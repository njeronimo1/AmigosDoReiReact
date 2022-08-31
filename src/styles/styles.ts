
import {createGlobalStyle} from 'styled-components';
import imgFundo  from '../assets/body.jpg';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        height: 100vh;
        background-image: url(${imgFundo});
        background-size: cover;
        background-position: center;
        background-repeat:no-repeat;
    }

    body, button, input, textarea{
        font-family: 'Poppins', sans-serif;
    }

    :root{
        --blackprimary: #363636;
        --orange: #F6750D;
        --blacksecundary: #2C2C2C;
        --orangehover: rgba(246, 117, 13, 0.3);

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