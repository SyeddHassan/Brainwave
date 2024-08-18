import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/layouts/Header";
import Hero from "./components/routes/Hero";
import Benefits from "./components/routes/Benefits";
import Collaboration from "./components/routes/Collaboration";
import Services from "./components/routes/Services";
import Pricing from "./components/routes/Pricing";
import Roadmap from "./components/routes/Roadmap";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
