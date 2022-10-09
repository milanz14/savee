import About from "./About";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Stats from "./Stats";

const Landing = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <Stats />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Landing;
