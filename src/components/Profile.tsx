// Auth
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

// Components
import Button from "./Button";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card d-flex align-items-center w-100"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="py-2">Profile Details</h2>
        <div className="mb-2">Email: {currentUser.email}</div>
        <div className="d-flex flex-row mb-2">
          <Link to="/update-profile" className="btn btn-primary mr-2">
            Edit
          </Link>
          <Link to="/dashboard" className="btn btn-info">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
