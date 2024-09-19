import React from 'react'
import '../styles/WorkWindow.scss'

function WorkWindow({header, img, url}) {
  return (
    <a className='workWindowCont' href={url} target='_blank'>
        <div className='text'>
            <h3>{header}</h3>
        </div>
        <div className='imgCont'>
            <img src={img} alt="" />
        </div>
    </a>
  )
}

export default WorkWindow