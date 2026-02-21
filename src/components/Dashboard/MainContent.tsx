import { useAuth } from "../../context/AuthContext";
import Home from "./MainContentComponents/Home";
import Budgets from "./SidebarContentComponents/Budgets";
import Recent from "./SidebarContentComponents/Recent";
import Settings from "./SidebarContentComponents/Settings";
import Transactions from "./Transactions";

const MainContent = ({ activePage }: { activePage: string }) => {
  const { user } = useAuth();

  return (
    <main className="flex-1 pt-16 px-4 text-white">
      {/* <h1 className="text-xl font-semibold">Main Content</h1>
      {user && <p>Welcome back {user.displayName}</p>} */}
      {activePage === "home" && <Home />}
      {activePage === "transactions" && <Transactions />}
      {activePage === "recent" && <Recent />}
      {activePage === "budgets" && <Budgets />}
      {activePage === "settings" && <Settings user={user!} />}
    </main>
  );
};

export default MainContent;
