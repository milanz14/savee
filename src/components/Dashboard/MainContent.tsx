import { useAuth } from "../../context/AuthContext";
import Home from "./MainContentComponents/Home";
import Budgets from "./SidebarContentComponents/Budgets";
import Recent from "./SidebarContentComponents/Recent";
import Settings from "./SidebarContentComponents/Settings";
import Transactions from "./Transactions";
import Charts from "./Charts";
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

  const {
    data: transactions = [],
    isPending,
    isError,
  } = useTransactions(user?.uid);

  // style={{
  //       background:
  //         "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 65%)",
  //       filter: "blur(80px)",
  //     }}

  return (
    <main className="flex-1 text-white h-full overflow-hidden p-4 min-w-75">
      {modalOpen && <TransactionModal setModalOpen={setModalOpen} />}
      {activePage === "home" && <Home />}
      {activePage === "transactions" && (
        <Transactions
          transactions={transactions ?? []}
          isPending={isPending}
          isError={isError}
        />
      )}
      {activePage === "chart" && <Charts transactions={transactions ?? []} />}
      {activePage === "recent" && <Recent />}
      {activePage === "budgets" && <Budgets />}
      {activePage === "settings" && <Settings user={user!} />}
    </main>
  );
};

export default MainContent;
