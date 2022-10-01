import error from "../assets/error.png";
import { Link } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  return (
    <div
      className="container container-md d-flex flex-column align-items-center text-white h4 mt-5"
      style={{ height: "100vh", overflowY: "hidden" }}
    >
      <div className="container d-flex justify-content-center">
        <p>
          Oops. 404.{" "}
          <Link to="/dashboard">
            <span className="text-white">Back to dashboard.</span>
          </Link>
        </p>
      </div>
      <div className="container d-flex justify-content-center">
        <img
          src={error}
          alt="error404"
          className="img-fluid border-0"
          style={{ height: "85%" }}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
