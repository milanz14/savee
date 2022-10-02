import savee from "../assets/savee.png";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import Button from "./Button";

const Navbar = (): JSX.Element => {
  const { currentUser } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={savee} alt="save logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse dropstart"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mr-0">
            {!currentUser && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/profile"
                  >
                    <Button buttonText="Login" btnClass="btn btn-primary" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/register"
                  >
                    <Button buttonText="Join" btnClass="btn btn-info" />
                  </Link>
                </li>
              </>
            )}
            {currentUser && (
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-primary btn-lg text-white"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/dashboard" className="dropdown-item">
                      My Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      View Profile
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
