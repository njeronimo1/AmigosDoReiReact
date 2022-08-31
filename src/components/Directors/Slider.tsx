import { ReactNode } from 'react';
import {Navigation, Pagination, A11y} from 'swiper';
import { Swiper, SwiperProps  } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ContainerSlider } from './styles';


interface SliderProps{
    settings: SwiperProps,
    children: ReactNode
}

export function Slider({settings, children}: SliderProps){

    return (
        <ContainerSlider>
            <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>{children}</Swiper>
        </ContainerSlider>
    )
    
    

}