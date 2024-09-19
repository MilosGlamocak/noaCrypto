import React from 'react'
import '../styles/WorkWindow.scss'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

function WorkWindow({header, img, url}) {
  return (
    <a className='workWindowCont' href={url} target='_blank'>
        <div className='text'>
            <h3>{header}</h3>
            <OpenInNewIcon className='urlIcon'/>
        </div>
        {/*<div className='imgCont'>
            <img src={img} alt="" />
        </div>*/}
    </a>
  )
}

export default WorkWindow