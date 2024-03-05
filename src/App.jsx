import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import Why from './components/Why'
import Trend from './components/Trend'
import Popular from "./components/Popular";
import Off from "./components/Off"
import Book from './components/book'
import Articles from './components/Articles'

export default function App() {
  return (
     <main>
      <Navbar/>
      <Hero/>
      <Why/>
      <Trend/>
      <Popular/>
      <Off/>
      <Book/>
      <Articles/>
      

      <Footer/> 
      </main>
    
    
  )
}
