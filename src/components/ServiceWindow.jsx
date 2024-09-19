import React from 'react'
import '../styles/ServiceWindow.scss'


function ServiceWindow({header, text, icon}) {
  return (
    <div className='serviceWindowCont'>
        <div className='icon'>
            {icon}
        </div>
        <div className='text'>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ServiceWindow