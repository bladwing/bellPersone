
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu";
import Slider from "./Components/Slider";
import Companies from "./Components/Companies";
import About from "./Components/About";
import WhyUs from "./Components/WhyUs";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Team from "./Components/Team";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import PortfolioDetails from "./Components/Portfolio/PortfolioDetails";

import "./App.css";


function App() {

  return (
    <>
      <Menu />
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<TempPage />} />
          <Route path="/portfolio" element={<PortfolioDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;


const TempPage = () => {
  return (
    <>
      <Slider />
      <main id="main">
        <Companies />
        <About />
        <WhyUs />
        <Services />
        <Portfolio />
        <Team />
        <Contact />
      </main>
    </>
  )
}

const NotFound = () => {
  return (
    <>
      <h1>
        Page Not Found 404
      </h1>

    </>
  )
}