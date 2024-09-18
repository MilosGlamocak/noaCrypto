import React from 'react'
import '../styles/AboutPage.scss'
import '../styles/TopNav.scss'

function AboutPage() {
  return (
    <div className='aboutPageCont' id='about'>
      <div className='aboutTextDiv'>
        <div className='aboutHeader'>
          <h2>about</h2>
          <img src='/images/noa/NOA3.svg' alt='logoSmall' className='logoSmall' />
          <h2>®</h2>
        </div>
        <div className='aboutText'>
          <p>At Noa, we don’t just create—we captivate. 
From sleek, high-impact websites to words that sell with punchy copywriting, we make your crypto one of a kind. 

Supercharge your social with X services that rocket your follower count, likes, and verifications. Dominate Telegram with raid bots, custom channels, and more.</p>
        <h2>Need jaw-dropping visuals?</h2>
        <p>We’ve got you covered with stunning 2D/3D stickers, animated logos, memes, and spinning coins. Whether it’s killer video ads, viral marketing campaigns, or exclusive NFT art, NOA crafts experiences that grab attention—and never let go.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage