import React from 'react'
import '../styles/WelcomePage.scss'

function WelcomePage() {
  return (
    <div className='welcomePageCont'>
        {/*<h1>we value creativity.</h1>*/}
        <img src="/images/noa/NOA3.svg" alt="logo" className='welcomeLogo'/>
        <h1>The only marketing agency you will ever need.</h1>
        <div className='bookBtn'>
          <p>Book us now</p>
        </div>
        <img src="/images/glow4.png" alt="glow" className='glow1'/>
    </div>
  )
}

export default WelcomePage