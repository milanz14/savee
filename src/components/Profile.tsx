// Auth
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Profile = (): JSX.Element => {
  const { currentUser, logout, deleteAccount } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    // .then((res: any) => {
    //   setAlerts("Successfully logged out");
    //   setAlertClass("alert alert-success");
    //   navigate("/");
    // })
    // .catch((err: any) => {
    //   setAlerts("Unable to log out.");
    //   setAlertClass("alert alert-danger");
    // });
    navigate("/");
  };

  // const handleDeleteAccount = () => {
  //   deleteAccount(currentUser.uid).then(() => {
  //     console.log("User Deleted");
  //   });
  //   navigate("/");
  // };

  return (
    <div className="container d-flex justify-content-center my-5">
      <div
        className="card d-flex align-items-center w-100 shadow"
        style={{ maxWidth: "500px" }}
      >
        <h2 className="py-2">Profile Details</h2>
        <div className="d-flex flex-column">
          <p className="mb-2">Name: {currentUser.displayName}</p>
          <p className="mb-2">Email: {currentUser.email}</p>
        </div>
        <div className="d-flex flex-column flex-md-row mb-2">
          <Link to="/update-profile" className="btn btn-primary mr-2 mb-1">
            Edit
          </Link>
          <Link to="/dashboard" className="btn btn-info mr-2 mb-1">
            Dashboard
          </Link>
          <button
            className="btn btn-warning mr-2 mb-1"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
          {/* <button
            className="btn btn-danger mr-2 mb-1"
            onClick={() => handleDeleteAccount()}
          >
            Delete
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
