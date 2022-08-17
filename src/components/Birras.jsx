import React from "react";
// Import Swiper React components
import { Autoplay, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';

const images = [
    {id:1, title: "Dos Dingos", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/dingo-200x200.png"},
    {id:2, title: "Ogham", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/Sin-t%C3%ADtulo-1-200x200.png"},
    {id:3, title: "Darwin", url:"https://labirreria.com.ar/wp-content/uploads/2017/02/DARWIN-200x200.png"},
    {id:4, title: "Guten Bier", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/guten-1-200x200.png"},
    {id:5, title: "La Paloma", url:"https://labirreria.com.ar/wp-content/uploads/2018/07/paloma-200x200.png"},
    {id:6, title: "Minga", url:"https://labirreria.com.ar/wp-content/uploads/2018/07/minga-200x200.png"},
    {id:7, title: "Astor", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/astor-2-200x200.png"},
    {id:8, title: "Cheverry", url:"https://labirreria.com.ar/wp-content/uploads/2019/04/cheverry-200x200.png"}
  ];

const Birras = () =>{
    return(      
        <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            "@0.50": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            "@1.25": {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
            >
                 
            {images.map((element) => (
                <SwiperSlide> <img className="item" id="birras" src={element.url} alt={element.title} /> </SwiperSlide>            
            ))}
              
        </Swiper>
    );  
}
export default Birras; 