import './App.scss'
import AboutPage from './components/AboutPage'
import Background from './components/Background'
import ServicesPage from './components/ServicesPage'
import TopNav from './components/TopNav'
import WelcomePage from './components/WelcomePage'

function App() {

  return (
    <div className='appCont'>
      <TopNav />
      <Background />
      <WelcomePage />
      <AboutPage />
      <ServicesPage />
    </div>
  )
}

export default App
