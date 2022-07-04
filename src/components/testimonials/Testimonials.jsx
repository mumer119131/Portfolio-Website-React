import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


const data = [
  {
    id : 1,
    avatar : AVTR1,
    name : "Jiya Lames",
    review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni unde, hic libero deleniti repudiandae asperiores quisquam consequatur qui? Voluptatum, quaerat rerum molestiae corrupti odio placeat alias maxime eum quidem!"
  },{
    id : 2,
    avatar : AVTR2,
    name : "Emma Stone",
    review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni unde, hic libero deleniti repudiandae asperiores quisquam consequatur qui? Voluptatum, quaerat rerum molestiae corrupti odio placeat alias maxime eum quidem!"
  },{
    id : 3,
    avatar : AVTR3,
    name : "James Lee",
    review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni unde, hic libero deleniti repudiandae asperiores quisquam consequatur qui? Voluptatum, quaerat rerum molestiae corrupti odio placeat alias maxime eum quidem!"
  },
  {
    id : 4,
    avatar : AVTR4,
    name : "Micheal Johnes",
    review : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium magni unde, hic libero deleniti repudiandae asperiores quisquam consequatur qui? Voluptatum, quaerat rerum molestiae corrupti odio placeat alias maxime eum quidem!"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id,avatar,name,review}) =>{
            return(
              <SwiperSlide className="testimonial" key={id}>
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>  
            );
          })
        }      
      </Swiper>
    </section>
  )
}

export default Testimonials