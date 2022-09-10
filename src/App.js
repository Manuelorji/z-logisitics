import Hero from "./components/Hero/Hero";
import SectionOne from "./components/Section-one/Section-one";
import SectionThree from "./components/Section-three/Section-three";
import SectionTwo from "./components/Section-two/Section-two";
import Footer from "./components/Footer/Footer";

import "./general.scss";

function App() {
  return (
    <div className="App">
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
