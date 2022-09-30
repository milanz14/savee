import error from "../assets/error.png";
import { Link } from "react-router-dom";

const ErrorPage = (): JSX.Element => {
  return (
    <div className="error-page">
      <p>
        Error. Page does not exist.{" "}
        <Link to="/details">
          <span>Back to details.</span>
        </Link>
      </p>
      <img src={error} alt="error404" />
    </div>
  );
};

export default ErrorPage;
