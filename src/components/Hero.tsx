// library imports
import { useNavigate } from "react-router-dom";

// assets
import bear from "../assets/bear.png";

// Auth
import { useAuth } from "../contexts/AuthContext";

const Hero = (): JSX.Element => {
  const navigate = useNavigate();

  const { currentUser } = useAuth();

  const handleGetStartedClick = (): void => {
    navigate("/register");
  };

  const handleDashboardNavigateClick = (): void => {
    navigate("/dashboard");
  };

  return (
    <section id="hero" className="px-5 py-5">
      <div className="container-fluid row align-items-center">
        <div className="col-md-6">
          <h1 className="display-1 lh-1 mb-3">
            Savee. <br />A new financial tracker.
          </h1>
          <p className="lead fw-normal text-muted mb-5">
            Grow your wealth by building good habits through tracking and
            measuring every monetary transaction!
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
            {currentUser ? (
              <button
                className="btn btn-secondary mb-4 mb-md-0"
                onClick={handleDashboardNavigateClick}
              >
                Dashboard
              </button>
            ) : (
              <button
                className="btn btn-primary mb-4 mb-md-0"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
        <div className="col-md-6" style={{ position: "relative" }}>
          {/* <div
            className="bg-primary opacity-25"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
            }}
          ></div> */}
          <img
            src={bear}
            alt="bear chart hero"
            className="img-fluid w-100 h-100 py-0 py-sm-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
