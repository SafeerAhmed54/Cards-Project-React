import React from 'react'
import { Bookmark } from "lucide-react"
const Card = ({company,posted,title,type,level,rate,location,image}) => {
  return (
    <>
      <div className='card'>
        <div className='header'>
          <div className='logo-div'>
            <img src={image} alt="" className='logo' />
          </div>
          <div className='saved-Button'>
            <button className='save'>Save<Bookmark size={16} /></button>
          </div>
        </div>
        <div className='content'>
          <div className='content-place'>
            <h3 className='company-name'>{company} <span className='post-time'>{posted}</span></h3>
            <h2 className='role'>{title}</h2>
          </div>
          <div className='tags-div'>
            <div className='tags'><p>{type}</p></div>
            <div className='tags'><p>{level}</p></div>
          </div>
        </div>
        <div className='footer'>
          <div className='price-div'>
            <p className='price'>{rate}</p>
            <p className='location'>{location}</p>
          </div>
          <div className='apply-div'>
            <button className='apply-button'>Apply Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
