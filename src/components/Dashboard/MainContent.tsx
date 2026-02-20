import { useAuth } from "../../context/AuthContext";

const MainContent = () => {
  const { user } = useAuth();

  return (
    <div>
      Main Content
      {user && <p>Welcome back {user?.displayName}</p>}
    </div>
  );
};

export default MainContent;
