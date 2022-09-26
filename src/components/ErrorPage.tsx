import error from "../assets/error.png";
import "../styles/ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <p>
        Error. Page does not exist.{" "}
        <Link to="/">
          <span>Back to home</span>
        </Link>
      </p>
      <img src={error} alt="error404" />
    </div>
  );
};

export default ErrorPage;
