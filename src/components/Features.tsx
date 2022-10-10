import statistics from "../assets/statistics.svg";

const Features = (): JSX.Element => {
  return (
    <section className="bg-light py-5" id="features">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center justify-content-md-between">
          <div className="col-12 col-lg-6">
            <h2 className="display-4 mb-4">
              Enter a new age of financial prosperity.
            </h2>
            <p className="lead fw-normal text-muted mb-5 mb-lg-0">
              Growing your wealth has never been easier. The best time to start
              is yesterday, the second best time is today. What else are you
              waiting for? Join for free today to start on a path to financial
              freedom.
            </p>
          </div>
          <div className="col-sm-8 col-md-6 mx-auto">
            <div className="px-5 px-sm-0">
              <img
                className="img-fluid rounded"
                src={statistics}
                alt="statistics"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
