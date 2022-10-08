import savee from "../assets/savee.png";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

const Navbar = (): JSX.Element => {
  const { currentUser } = useAuth();

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={savee} alt="save logo" />
        </a>
        <button
          className="navbar-toggler mr-4 bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon pr-2"></span>
        </button>
        <div
          className="collapse navbar-collapse dropstart float-right text-right pr-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mr-2 float-right text-right">
            {!currentUser && (
              <>
                <li className="nav-item">
                  <Link
                    className="text-white btn btn-md btn-info p-2 mb-1"
                    aria-current="page"
                    to="/register"
                    style={{ width: "75px" }}
                  >
                    Join
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="text-white btn btn-md btn-primary p-2 ml-1"
                    aria-current="page"
                    to="/login"
                    style={{ width: "75px" }}
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
            {currentUser && (
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-primary btn-lg text-white px-4"
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
