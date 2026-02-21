import { useAuth } from "../../context/AuthContext";
import Home from "./MainContentComponents/Home";
import Recent from "./MainContentComponents/Recent";
import Transactions from "./Transactions";

const MainContent = ({ activePage }: { activePage: string }) => {
  const { user } = useAuth();

  return (
    <main className="flex-1 pt-16 px-4 text-white">
      <h1 className="text-xl font-semibold">Main Content</h1>
      {user && <p>Welcome back {user.displayName}</p>}
      {activePage === "home" && <Home />}
      {activePage === "transactions" && <Transactions />}
      {activePage === "recent" && <Recent />}
      {activePage === "settings" && <h1>Settings</h1>}
    </main>
  );
};

export default MainContent;
