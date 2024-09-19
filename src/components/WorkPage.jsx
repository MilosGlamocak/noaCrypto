import React from 'react'
import '../styles/WorkPage.scss'
import WorkWindow from './WorkWindow'


function WorkPage() {

    const work = [
        {name: 'CATE', url: 'https://cateoneth.com/', img: '/images/cate.png'},
        {name: '$WOOFIE', url: 'https://woofiesolana.com/', img: '/images/woofie.png'},
        {name: '$BLOOP', url: 'https://bloopcoin.meme/', img: '/images/bloop.png'},
        {name: '$BLUB', url: 'https://www.blubsui.com/', img: '/images/blub.png'},
        {name: 'RA COIN', url: 'https://www.racoin.lol/', img: '/images/racoin.png'},
    ]

  return (
    <div className='workPageCont' id='work'>
        <h2>check out some of our products</h2>
            <div className='workDiv'>
                {work.map((s) => {
                  return <WorkWindow header={s.name} img={s.img} url={s.url} key={s.name}/>
                })}
            </div>  
    </div>
  )
}

export default WorkPage