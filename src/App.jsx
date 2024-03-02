import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Why from './components/Why'
import Trend from './components/Trend'
import Popular from "./components/Popular";
import Off from "./components/Off"

export default function App() {
  return (
     <main>
      <Navbar/>
      <Hero/>
      <Why/>
      <Trend/>
      <Popular/>
      <Off/>
      

      <Footer/> 
      </main>
    
    
  )
}
