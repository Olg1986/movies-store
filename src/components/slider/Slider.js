import React from 'react'
import Slide from '../slide/Slide'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './slider.css'

const slides = [
  {src: "game-covers/slide/slide_1.jpg",  title: "Райя и последний дракон", type: ["Мультфильм", "Детям", "Семейный"], id: "mrkr"},
  {src: "game-covers/slide/slide_2.jpg",  title: "Монстры на каникулах 4", type: ["Мультфильм", "Детям", "Семейный"], id: "nfgn"},
  {src: "game-covers/slide/slide_3.jpg",  title: "Охотники за привидениями", type: ["Мультфильм", "Детям", "Семейный"], id: "wtgwrg"}
]

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows : false,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
          {
            slides.map(item => {
              return <div><Slide key={item.id} item={item}/></div>
            })
          }
    </Slider>
  )
}

export default Carousel