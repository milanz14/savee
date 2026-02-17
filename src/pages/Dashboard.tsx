import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <p>Welcome back to Savee, {user.email}!</p>
      ) : (
        <h1>Dashboard Page</h1>
      )}
    </div>
  );
};

export default Dashboard;
