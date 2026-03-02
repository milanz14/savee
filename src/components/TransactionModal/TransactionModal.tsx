import AddTransactionForm from "./TransactionModalComponents/AddTransaction";
import { useEffect } from "react";

const TransactionModal = ({
  setModalOpen,
}: {
  setModalOpen: (open: boolean) => void;
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50">
      <div className="rounded-xl shadow-xl p-6 relative w-100 max-w-[85%] bg-indigo-400">
        <h1 className="text-xl font-semibold mb-4 text-gray-200">
          Add Transaction
        </h1>
        <AddTransactionForm setModalOpen={setModalOpen} />
        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-3 right-3  hover:text-black text-xl cursor-pointer text-white">
          X
        </button>
      </div>
    </div>
  );
};

export default TransactionModal;
