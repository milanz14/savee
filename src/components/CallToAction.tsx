// library imports
import { useNavigate } from "react-router-dom";

const CallToAction = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStartedClick = (): void => {
    navigate("/register");
  };

  return (
    <section className="cta">
      <div className="container-fluid px-5 bg-secondary">
        <h2 className="text-white display-1 mb-4">
          Stop waiting.
          <br />
          Start building.
        </h2>
        <button
          className="btn btn-primary mb-4 mb-md-0"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
