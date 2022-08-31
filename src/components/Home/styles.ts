
import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: var(--blacksecundary);

    .container_home{
        display: flex;
        width: 100%;
    }

    .container_home_esquerda{
        width: 60%;
        /* height: 100%; */
        padding: 2%;
    }

    .container_home_direita{
        width: 40%;
        padding: 2%;
    }

    .shape_box_home_esq{
        background-color: white;
        width: 100%;
        height: 92.5%!important;
        margin: 10px 0 10px 0 ;
        border-radius: 0.45rem;
        padding: 2%;
    }

    .shape_box_home{
        background-color: white;
        width: 100%;
        /* height: 100%; */
        margin: 10px 0 10px 0 ;
        border-radius: 0.45rem;
        padding: 2%;
    }

    //////////////////////////////

    .nrm_desbravadores_home{
        text-align: center;

        h2{
            font-size: 3rem;
        }
    }

`