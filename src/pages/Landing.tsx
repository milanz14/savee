import { useNavigate } from "@tanstack/react-router";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import CtaPrimary from "./components/CallToAction";
import CtaSecondary from "./components/CallToActionTwo";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function LandingPage() {
  const navigate = useNavigate();

  // fix
  const goToAuth = () => {
    navigate({ to: "/auth" });
  };

  return (
    <div
      style={{
        background: "#0f1117",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=DM+Mono:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0f1117; }
        ::selection { background: rgba(129,140,248,0.3); }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #252836; border-radius: 3px; }
      `}</style>

      <Navbar onLogin={() => goToAuth()} onRegister={() => goToAuth()} />
      <Hero onRegister={() => goToAuth()} />
      <About />
      <CtaPrimary onRegister={() => goToAuth()} />
      <Testimonials />
      <CtaSecondary onRegister={() => goToAuth()} />
      <Footer />
    </div>
  );
}
