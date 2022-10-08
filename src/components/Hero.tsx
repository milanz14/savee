// components
import Button from "./Button";

// library imports
import { useNavigate } from "react-router-dom";

// assets
import bear from "../assets/bear.png";

const Hero = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStartedClick = (): void => {
    navigate("/register");
  };

  return (
    <section
      id="hero"
      className="container d-flex flex-column flex-md-row pt-5"
    >
      <div
        className="d-flex flex-column ml-4 col-6 sm-col-12"
        style={{ width: "600px" }}
      >
        <p className="pb-2 mb-2 display-5 align-items-left">
          This is Savee, <br />
          the next generation <br />
          financial tracker.
        </p>
        <div>
          <button className="btn btn-primary" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
      <div className="d-flex pt-sm-5 mt-sm-5 col-6 sm-col-12">
        <img src={bear} alt="bear chart hero" className="img-fluid" />
      </div>
    </section>
  );
};

export default Hero;
