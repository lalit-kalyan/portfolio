import "./App.scss";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/port/Portfolio";
import Testimonial from "./pages/testimonial/Testimonisl";
import Footer from "./pages/footer/Footer";
import Experience from "./pages/experience/Experience";

function App() {
  return (
    <div className="app">
      <div className="section">
        <Home />
        <About />
        <Portfolio />
        <Testimonial />
        <Experience />
        <Contact />
        <Footer />
        
      </div>
    </div>
  );
}

export default App;
