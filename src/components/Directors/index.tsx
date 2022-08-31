import { Container, ContainerCarousel } from "./styles";

import visivel from '../../assets/visivel.png';
import archive from '../../assets/archive.png';
import events from '../../assets/events.png';
import bordaLaranja from '../../assets/bordaLaranja.png';
import eventos from '../../assets/eventos.png';
import cargos from '../../assets/cargos.png';
import financeiro from '../../assets/financeiro.png';
import secretaria from '../../assets/archive.png';
import classes from '../../assets/classes.png';


import { Slider } from "./Slider";
import { SwiperSlide, SwiperProps } from "swiper/react";

export function Directors(){

    const settings: SwiperProps = {
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: true,
        pagination:{
            clickable: true,
        }
    }

    return(
        
            <Container>
                <div className="container_directors">
                    <div className="container_directors_header">
                        <div className="box_directors_header">
                            <h3>Caixa do Clube</h3>
                            <div className="box_money_header">
                                <h1>R$ 580,00</h1>
                                <img src={visivel}  alt="visivel" className="visivel_img"/>
                            </div>
                            
                        </div>
                        <div className="box_directors_header">
                            <h3>Pêndencias da secretaria</h3>

                            <div className="value_secretaria_header">
                                <img src={archive} alt="arquivos secretaria" className="archive_img" />
                                <h1>4</h1>
                            </div>
                        </div>
                        <div className="box_directors_header">
                            <h3>Eventos em andamento</h3>

                            <div className="value_secretaria_header">
                                <img src={events} alt="arquivos secretaria" className="archive_img" />
                                <h1>4</h1>
                            </div>
                        </div>
                        
                    </div>

                    {/* BORDA LARANJA */}
                    <div className="container_border_orange">
                        <img src={bordaLaranja} alt=""/>
                    </div>
                    
                    
                    <div className="container_content_directors">
                        <ContainerCarousel>
                            
                                <div className="container_slide_directors">
                                    <Slider settings={settings}>
                                        <SwiperSlide>
                                            <div className="container_events">
                                                <div className="container_titulo_events">
                                                    <h1>Confira os próximos <br/>eventos do Clube</h1>
                                                    <button>
                                                       <img src={eventos} alt="eventos" className="img_eventos"/> 
                                                       Confira</button>
                                                </div>
                                                
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="container_cargos">
                                                <div className="container_titulo_events">
                                                    <h1>Altere os cargos <br/>do Clube</h1>
                                                    <button>
                                                       <img src={cargos} alt="eventos" className="img_eventos"/> 
                                                       Altere</button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Slider>
                                </div>
                           
                        </ContainerCarousel>
                        

                        <div className="container_boxs_directors">
                            <div className="box_financeiro_directors">
                                <div className="container_titulo_financeiro">
                                    <img src={financeiro} alt="financeiro"/>
                                    <h1>Financeiro</h1>
                                </div>
                                <span className="border_financeiro"></span>
                                <div className="container_cargos_financeiro" >
                                    <span>D</span>
                                    <span>|</span>
                                    <span>VD</span>
                                    <span>|</span>
                                    <label>T</label>
                                </div>
                            </div>

                            <div className="container_boxs_inferior_directors">
                                <div className="box_financeiro_directors_sec">
                                    <img src={secretaria} alt="secretaria" />
                                    <h1>Secretaria</h1>
                                </div>
                                <div className="box_financeiro_directors_classe">
                                    <img src={classes} alt="secretaria" />
                                    <h1>Classe Agrupadas</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </Container>
        
    )
}