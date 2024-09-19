import React from 'react'
import '../styles/ServicesPage.scss'
import ServiceWindow from './ServiceWindow'
import CodeIcon from '@mui/icons-material/Code';
import EditNoteIcon from '@mui/icons-material/EditNote';
import XIcon from '@mui/icons-material/X';
import TelegramIcon from '@mui/icons-material/Telegram';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import InsightsIcon from '@mui/icons-material/Insights';
import AnimationIcon from '@mui/icons-material/Animation';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import CampaignIcon from '@mui/icons-material/Campaign';
import DiamondIcon from '@mui/icons-material/Diamond';
import GifIcon from '@mui/icons-material/Gif';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function ServicesPage() {

  const services = [
    {name: 'Web development', desc: `Creating custom websites with responsive designs and easy navigation, tailored to your brand's needs.`, icon: <CodeIcon />},
    {name: 'Copywriting', desc: `Writing compelling, SEO-focused content that engages your audience and boosts conversions.`, icon: <EditNoteIcon />},
    {name: 'X management', desc: `Increasing followers and engagement with professional tweet creation, retweets, likes, and verification boosts.`, icon: <XIcon />},
    {name: 'Telegram management', desc: `Overseeing channels, notifications, group chats, and bots for secure, seamless communication.`, icon: <TelegramIcon />},
    {name: 'Video advertisement', desc: `Producing high-quality videos to promote products, services, or events effectively.`, icon: <VideoLibraryIcon />},
    {name: 'Infographics', desc: `Designing visually engaging banners or posters that effectively communicate your message.`, icon: <InsightsIcon />},
    {name: '2D & 3D animations', desc: `Creating dynamic 2D and 3D animations for marketing, education, or entertainment purposes.`, icon: <AnimationIcon />},
    {name: 'Stickers', desc: `Designing custom stickers for personal or business use, perfect for both online and print platforms.`, icon: <EmojiEmotionsIcon />},
    {name: 'Marketing campaigns', desc: `Launching targeted marketing campaigns to boost brand visibility and drive growth.`, icon: <CampaignIcon />},
    {name: 'Logo', desc: `Designing unique logos that embody your brand identity and stand out in the market.`, icon: <DiamondIcon />},
    {name: 'GIFs and memes', desc: `Creating shareable GIFs and memes to enhance social media presence and user engagement.`, icon: <GifIcon />},
    {name: 'NFT art', desc: `Designing eye-catching NFT art to help you make a mark in the growing digital art space.`, icon: <ColorLensIcon />},
    {name: 'Project user support', desc: `Providing dedicated support to ensure seamless user interactions and resolve technical issues.`, icon: <SupportAgentIcon />},
  ]

  return (
    <div className='servicesPageCont' id='services'>
        <h2>what do we offer?</h2>
        <div className='servicesPageDiv'>
            <div className='servicesCont'>
                {services.map((s) => {
                  return <ServiceWindow header={s.name} text={s.desc} icon={s.icon} key={s.name}/>
                })}
            </div>
        </div>
        
    </div>
  )
}

export default ServicesPage