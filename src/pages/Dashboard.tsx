import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome back to Savee, {user?.displayName}.</h1>
    </div>
  );
};

export default Dashboard;
