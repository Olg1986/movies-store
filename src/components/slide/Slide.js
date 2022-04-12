import React from 'react'
import Information from '../information/Information'
import './slide.css'

const Slide = ({item}) => {
  const {src, title, type} = item
  console.log(item[0])
  return (
    <div className="slide">
        <img className="slide-img" src={src} alt={title}/>
        <Information 
          title={title}
          type={type}
          />
    </div>
  )
}

export default Slide