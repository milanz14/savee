import transfer from "../assets/transfer.svg";

const About = () => {
  return (
    <section id="about">
      <div className="container px-5 py-5">
        <div className="row align-items-center">
          <div className="col-md-8 order-md-1 mb-5 mb-md-0">
            <div className="container-fluid px-5">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <div className="text-center justify-content-center">
                    <i className="fa-solid fa-sack-dollar py-2"></i>
                    <h3 className="font-alt">Cash Transactions</h3>
                    <p className="text-muted mb-0">
                      Track all of your transactions in real time!
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="text-center justify-content-center">
                    <i className="fa-solid fa-chart-simple py-2 "></i>
                    <h3 className="font-alt">Advanced Insights</h3>
                    <p className="text-muted mb-0">
                      Advanced insights detail your cash flow history!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid px-5">
              <div className="row">
                <div className="col-md-6 mb-5">
                  <div className="text-center justify-content-center">
                    <i className="fa-solid fa-table"></i>
                    <h3 className="font-alt">Advanced Tables</h3>
                    <p className="text-muted mb-0">
                      Filter and sort to ensure your transactions are valid and
                      up-to-date.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mb-5">
                  <div className="text-center justify-content-center">
                    <i className="fa-solid fa-check"></i>
                    <h3 className="font-alt">Validation History</h3>
                    <p className="text-muted mb-0">
                      Audit log of all changes made so you know that you are in
                      control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 order-md-0">
            <div className="features-device-mockup">
              <div className="device-wrapper">
                <img src={transfer} alt="bar chart" className="img img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
