import statistics from "../assets/statistics.svg";

const Features = (): JSX.Element => {
  return (
    <section className="bg-light py-5">
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
          <div className="col-12 col-lg-5">
            <h2 className="display-4 mb-4">
              Enter a new age of financial prosperity.
            </h2>
            <p className="lead fw-normal text-muted mb-5 mb-lg-0">
              This section is perfect for featuring some information about your
              application, why it was built, the problem it solves, or anything
              else! There's plenty of space for text here, so don't worry about
              writing too much.
            </p>
          </div>
          <div className="col-sm-8 col-md-6">
            <div className="px-5 px-sm-0">
              <img className="img-fluid rounded" src={statistics} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
