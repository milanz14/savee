// library imports
import { useNavigate } from "react-router-dom";

// assets
import success from "../assets/success.svg";
import appStoreBadge from "../assets/app-store-badge.svg";
import googlePlayBadge from "../assets/google-play-badge.png";

const CallToAction = (): JSX.Element => {
  const navigate = useNavigate();

  const handleGetStartedClick = (): void => {
    navigate("/register");
  };

  return (
    <section className="bg-info py-5" id="features">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center justify-content-md-between">
          <div className="col-sm-8 col-md-6 mx-auto">
            <div className="px-5 px-sm-0 pb-5">
              <img
                className="img-fluid rounded mx-auto"
                src={success}
                alt="success"
              />
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex row">
            <h2 className="display-5 mb-4 text-white">
              Stop waiting. Start building wealth today.
            </h2>
            <button onClick={handleGetStartedClick} className="btn btn-primary">
              Get Started For Free
            </button>
            <div className="container py-5">
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
                <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                  <img
                    className="app-badge"
                    src={appStoreBadge}
                    alt="appple app store badge"
                  />
                </a>
                <a className="me-lg-3 mb-4 mb-lg-0" href="#!">
                  <img
                    className="app-badge"
                    src={googlePlayBadge}
                    alt="googlePlayBadge"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
