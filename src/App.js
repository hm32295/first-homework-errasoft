import Header from "./components/Header";
import "./App.css"
import HeroSection from "./components/HeroSection";
import Footer from "./components/footer/Footer";

export default function App(){
  return(
    <div id="App">
        <Header />
        <HeroSection />
        <Footer />
    </div>
      );
}