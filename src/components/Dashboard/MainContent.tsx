import { useAuth } from "../../context/AuthContext";
import Home from "./MainContentComponents/Home";
import Budgets from "./SidebarContentComponents/Budgets";
import Recent from "./SidebarContentComponents/Recent";
import Settings from "./SidebarContentComponents/Settings";
import Transactions from "./Transactions";
import TransactionModal from "../TransactionModal/TransactionModal";
import { useTransactions } from "../../hooks/useTransaction";

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

  const { data: transactions = [] } = useTransactions(user?.uid);

  return (
    <main className="flex-1 pt-16 px-4 text-white height-[90%]">
      {modalOpen && <TransactionModal setModalOpen={setModalOpen} />}
      {activePage === "home" && <Home />}
      {activePage === "transactions" && (
        <Transactions transactions={transactions} />
      )}
      {activePage === "recent" && <Recent />}
      {activePage === "budgets" && <Budgets />}
      {activePage === "settings" && <Settings user={user!} />}
    </main>
  );
};

export default MainContent;
