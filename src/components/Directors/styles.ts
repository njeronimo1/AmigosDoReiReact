
import acampamento from '../../assets/acampamento.jpg';

import styled from 'styled-components';

export const ContainerCarousel = styled.div`

    display: flex;
    justify-content: center;
    /* align-items: center; */
    
    font-size: 1rem;
    width: 49%;
    border-radius: 0.5rem;

    .container_slide_directors{
        width: 100%;
        border-radius: 0.5rem;
    }
`

export const ContainerSlider = styled.div`
    .swiper{
           width: 100%;
           height: 49vh;
           border-radius: 1rem;
    }

    .swiper-slide{
        display: flex;
        justify-content: center;
        height: 46vh;
    }

    .container_events{
        background-image: url(${acampamento});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 1rem;
        width: 100%;
        display: flex;
        height: 48vh;

        .container_titulo_events{
            
            width: 100%;
            position: relative;

            button{
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 15%;
                    margin-right: 0.5rem;
                }

                position: absolute;
                bottom: 20px;
                right: 20px;
                color: var(--blackprimary);
                font-weight: 600;
                padding: 0.5rem;
                border: none;
                border-radius: 1rem;
                background-color: white;
                width: 20%;
                z-index: 1000px;

                &:hover{
                    filter: brightness(0.9);
                }
            }
        }

        h1{
            color: white;
            text-align: left;
            text-shadow: 1px 1px 10px black;
            padding: 2rem 2rem 2rem 2rem;
            font-size: 2rem;
            border-radius: 1rem;
        }
    }

    .container_cargos{
        background-image: url(${acampamento});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 1rem;
        width: 100%;
        display: flex;
        height: 48vh;

        .container_titulo_events{
            
            width: 100%;
            position: relative;

            button{
                display: flex;
                justify-content: center;
                align-items: center;

                img{
                    width: 15%;
                    margin-right: 0.5rem;
                }

                position: absolute;
                bottom: 20px;
                right: 20px;
                color: var(--blackprimary);
                font-weight: 600;
                padding: 0.5rem;
                border: none;
                border-radius: 1rem;
                background-color: white;
                width: 20%;
                z-index: 1000px;

                &:hover{
                    filter: brightness(0.9);
                }
            }
        }

        h1{
            color: white;
            text-align: left;
            text-shadow: 1px 1px 10px black;
            padding: 2rem 2rem 2rem 2rem;
            font-size: 2rem;
            border-radius: 1rem;
        }
    }

    .swiper-pagination-bullet-active{
        background-color: var(--orange);
    }

    .swiper-button-prev{
        color: var(--orange);
    }

    .swiper-button-next{
        color: var(--orange);
    }

`

export const Container = styled.div`

    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: var(--blacksecundary);

    .container_directors{
        width: 100%;
        
        max-width: 1600px;
        margin:0 auto;
        margin-top: 1.3rem;
    }

    .container_directors_header{
        display: flex;
        justify-content: space-around;
    }

    .box_directors_header{
        background-color: white;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 30%;
        border-radius: 0.5rem;
    }

    .box_money_header{
        display: flex;
        align-items: center;

        h1{
            font-size: 2.5rem;
        }
    }

    .visivel_img{
        margin-left: 0.8rem;
        height: 30px;
        width: 30px;
    }

    .archive_img{
        margin-right: 0.8rem;
        height: 50px;
        width: 50px;
    }

    .value_secretaria_header{
        display: flex;
        align-items: center;

        h1{
            font-size: 2.5rem;
        }
    }

    .container_border_orange{
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
        margin-top: 0.8rem;

        img{
            width: 100%;
        }
    }


    .container_content_directors{
        display: flex;
        width: 100%;
        justify-content: space-between;
        max-width: 1550px!important;
        margin: 0 auto;
        margin-top: 0.8rem;
    }

    

    .container_boxs_directors{
        width: 49%;
    }

    .container_boxs_inferior_directors{
        display: flex;
    }

    .box_financeiro_directors{
        background-color: white;
        padding: 6rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
    }

    .border_financeiro{
        height: 1rem;
        border-left: 0.15rem solid black;
    }

    .container_titulo_financeiro{
        display: flex;
        align-items: center;
        width: 50%;

        img{
            width: 3rem;
            height: 3rem;
            margin-right: 1rem;
        }
    }

    .container_cargos_financeiro{
        display: flex;
        justify-content: center;
        color: var(--orange);
        font-weight: 600;

        width: 50%;
        cursor: default;
        span{
            padding-right: 1rem;
        }
    }

    .box_financeiro_directors_sec{
        background-color: white;
        padding: 3.5rem;
        border-radius: 0.5rem;
        width: 50%;
        margin: 1rem 1rem 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;

        img{
            width: 2.5rem;
            height: 2.5rem;
            margin-right: 0.6rem;
        }
    }

    .box_financeiro_directors_classe{
        background-color: white;
        padding: 3rem;
        border-radius: 0.5rem;
        width: 50%;
        margin: 1rem 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.7rem;

        img{
            width: 3rem;
            height: 3rem;
            margin-right: 0.4rem;
        }
    }

`