// library imports
import { useNavigate } from "react-router-dom";

const FAQ = (): JSX.Element => {
  const navigate = useNavigate();

  const faqs = [
    {
      q: "",
      a: "",
      isOpen: false,
    },
    {
      q: "",
      a: "",
      isOpen: false,
    },
    {
      q: "",
      a: "",
      isOpen: false,
    },
  ];

  const handleGetStartedClick = (): void => {
    navigate("/register");
  };

  return (
    <section id="faq" className="text-center py-5">
      <div className="pb-2 h2 fs-1 mb-4">Frequenty Asked Questions</div>
      <div className="container h-100">
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                Does this connect directly to my bank account?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne">
              <div className="accordion-body">
                <strong>No.</strong> The app currently does not have bank level access. It may be
                something that is added in the future but for the time being, this is strictly
                manual tracking.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                What information does this app gather about me?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                The only information stored is your <em>name</em> and your <em>email address.</em>{" "}
                These are stored for account login purposes, your personal data is safe!
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Is this app free?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>Yes!</strong> This is currently a free app with no plans to change to a
                monetizing platform.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <button onClick={handleGetStartedClick} className="btn btn-info text-white">
          Join
        </button>
      </div>
    </section>
  );
};

export default FAQ;
