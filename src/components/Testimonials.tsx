// assets
import testimonial from "../assets/testimonial4.png";

const Testimonials = (): JSX.Element => {
  return (
    <section className="text-center bg-info py-5" id="testimonials">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xl-8">
            <div className="h2 fs-1 text-white mb-4 fst-italic">
              "An intuitive solution to a common problem that we all face,
              wrapped up in a single app!"
            </div>
            <img
              src={testimonial}
              alt="testimonial headshot"
              style={{ height: "5rem" }}
            />
            <p className="mt-4 fs-3 text-white fst-italic">
              Geoff Harcourt <br />
              ExpandaBank <br />
              CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
