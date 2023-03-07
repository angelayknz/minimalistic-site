import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from "./components/Header/Header"
import Home from './components/home/Home'
import Qualification from './components/qualification/Qualification.jsx'
import ScrollUp from './components/scrollup/ScrollUp'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import Testimonial from './components/testimonial/Testimonial'

function App() {

  return (
    <>
      <Header />
      <main className="main">
          <Home />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Testimonial />
          <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
