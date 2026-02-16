import Hero from "./components/Hero";
import GetStarted from "./components/GetStarted";
import Carousel from "./components/Carousel";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const Landing = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Hero />
      <GetStarted />
      <Carousel />
      <Testimonials />
      <CallToAction />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Landing;
