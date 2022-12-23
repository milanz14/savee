import About from "./About";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Stats from "./Stats";
import Features from "./Features";
import FAQ from "./FAQ";

const Landing = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <Stats />
      <Features />
      <CallToAction />
      <FAQ />
      <Footer />
    </>
  );
};

export default Landing;
