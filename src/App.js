import Menu from "./Components/Menu";
import "./App.css";
import Slider from "./Components/Slider";
import Companies from "./Components/Companies";
import About from "./Components/About";
import WhyUs from "./Components/WhyUs";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Menu />
      <Slider />

      <main id="main">
      <Companies />
      <About/>
      <WhyUs/>
      <Services/>
      <Portfolio/>
      <Team/>
      <Contact/>
    
      </main>

      <Footer/>

      {/* <div id="preloader"></div> */}
  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default App;
