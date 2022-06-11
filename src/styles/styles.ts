
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
    
`