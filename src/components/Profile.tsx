// Auth
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div
        className="card d-flex align-items-center w-100"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="py-2">Profile Details</h2>
        <div className="mb-2">Email: {currentUser.email}</div>
        {/* <div className="mb-2">Name: {currentUser.name}</div> */}
        <div className="d-flex flex-row mb-2">
          <Link to="/update-profile" className="btn btn-outline-primary mr-2">
            Edit
          </Link>
          <Link to="/dashboard" className="btn btn-outline-info mr-2">
            Dashboard
          </Link>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
