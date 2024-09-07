
import './App.css'
import Hero from './Components/Heroes/Hero'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Feature from './Components/Feature/Feature'
import Faq from './Components/FAQS/Faq'
import CaseStudy from './Components/CaseStudy/CaseStudy'
import Portfolio from './Components/Portfolio/Portfolio'
import Blog from './Components/Blog/Blog'

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Faq />
      <CaseStudy />
      <Portfolio />
      <Blog />
      <Footer />      
    </>
  )
}

export default App
