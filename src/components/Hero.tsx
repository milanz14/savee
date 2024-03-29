// library imports
import { useNavigate } from "react-router-dom";

// assets
import budgeting from "../assets/budgeting.gif";

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
      <div className="container-fluid row align-items-center mx-auto">
        <div className="col-md-6">
          <h1 className="display-1 lh-1 mb-3 text-md-start text-center">
            Savee. <br />A smarter way to save.
          </h1>
          <p className="lead fw-normal text-muted mb-5">
            Grow your wealth by building good habits through tracking and
            measuring every monetary transaction!
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
            {currentUser ? (
              <button
                className="btn btn-secondary mb-4 mb-md-0"
                onClick={handleDashboardNavigateClick}>
                Dashboard
              </button>
            ) : (
              <button
                className="btn btn-primary mb-4 mb-md-0"
                onClick={handleGetStartedClick}>
                Get Started
              </button>
            )}
          </div>
        </div>
        <div className="col-md-6" style={{ position: "relative" }}>
          <img
            src={budgeting}
            alt="bear chart hero"
            className="img-fluid w-100 h-100 py-0 py-sm-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
