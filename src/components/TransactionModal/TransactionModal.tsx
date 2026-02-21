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
  });

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50"
      onClick={() => setModalOpen(false)}>
      <div className="bg-white rounded-xl shadow-xl p-6 relative w-[400px] max-w-[90%]">
        <h1 className="text-xl font-semibold mb-4">Add Transaction</h1>

        <AddTransactionForm />

        <button
          onClick={() => setModalOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl cursor-pointer">
          X
        </button>
      </div>
    </div>
  );
};

export default TransactionModal;
