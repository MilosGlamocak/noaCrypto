import './App.scss'
import AboutPage from './components/AboutPage'
import Background from './components/Background'
import WelcomePage from './components/WelcomePage'

function App() {

  return (
    <div className='appCont'>
      <Background />
      <WelcomePage />
      <AboutPage />
    </div>
  )
}

export default App
