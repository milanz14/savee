import { useAuth } from "../../context/AuthContext";
import Home from "./MainContentComponents/Home";
import Budgets from "./SidebarContentComponents/Budgets";
import Recent from "./SidebarContentComponents/Recent";
import Settings from "./SidebarContentComponents/Settings";
import Transactions from "./Transactions";
import TransactionModal from "../TransactionModal/TransactionModal";

const MainContent = ({
  activePage,
  modalOpen,
  setModalOpen,
}: {
  activePage: string;
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}) => {
  const { user } = useAuth();
  // console.log(user!.uid);

  return (
    <main className="flex-1 pt-16 px-4 text-white h-screen">
      {modalOpen && <TransactionModal setModalOpen={setModalOpen} />}
      {activePage === "home" && <Home />}
      {activePage === "transactions" && <Transactions />}
      {activePage === "recent" && <Recent />}
      {activePage === "budgets" && <Budgets />}
      {activePage === "settings" && <Settings user={user!} />}
    </main>
  );
};

export default MainContent;
