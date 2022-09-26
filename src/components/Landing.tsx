import About from "./About";
import CallToAction from "./CallToAction";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Stats from "./Stats";

const Landing = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Landing;
