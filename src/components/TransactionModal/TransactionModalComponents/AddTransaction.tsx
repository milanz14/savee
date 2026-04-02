import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../../../lib/validation/validationSchemas";
import type {
  Category,
  TransactionFormValues,
  TransactionPayload,
} from "../../../interfaces/interfaces";
import categoryOptions from "../../../lib/constants/categories_colours";
import categoryTypeMap from "../../../lib/constants/categories_colours";
import { getDMY } from "../../../lib/functions";
import { useAuth } from "../../../context/AuthContext";
import { useAddTransaction } from "../../../hooks/useAddTransaction";
import { FaSpinner } from "react-icons/fa";

import { motion, useAnimationControls } from "framer-motion";

const AddTransactionForm = ({
  setModalOpen,
}: {
  setModalOpen: (open: boolean) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionFormValues>({
    resolver: zodResolver(transactionSchema),
    mode: "onChange",
  });

  const { user } = useAuth();
  const { mutate, isPending } = useAddTransaction(user!.uid);

  // const transactionTypes = ["Income", "Expense"];

  const getDerivedTransactionType = (category: string): string => {
    return (
      categoryTypeMap[category as keyof typeof categoryTypeMap] ?? "Expense"
    );
  };

  const onSubmit = (data: TransactionFormValues): void => {
    const derivedTransactionType = getDerivedTransactionType(data.category);

    const payload: TransactionPayload = {
      ...data,
      date: getDMY(new Date()),
      uid: user!.uid,
      transactionType: derivedTransactionType,
    };
    mutate(payload, {
      onSuccess: () => setModalOpen(false),
      onError: (err) =>
        console.error("Failed to add transaction", err as Error),
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = async (errors: any) => {
    console.log("Validation Errors:", errors);
    await controls.start("shake");
    controls.set("idle");
  };

  const categories: Category[] = Object.entries(categoryOptions).map(
    ([name, color]) => ({ name, color }),
  );

  const controls = useAnimationControls();

  const shakeVariants = {
    idle: { x: 0 },
    shake: {
      x: [0, -8, 8, -6, 6, -4, 4, 0],
      transition: { duration: 0.4, ease: "easeInOut" as const },
    },
  };

  return (
    <motion.div
      variants={shakeVariants}
      animate={controls}
      initial="idle
    ">
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-full flex flex-col min-w-77.5">
        <div className="flex flex-col gap-1 mb-6">
          <label htmlFor="amount">Amount:</label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
              $
            </span>
            <input
              className="rounded-xl border border-[#818cf8] p-2.5 bg-[#282c41] text-white placeholder:italic pb-2 w-full h-10 pl-7 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/50"
              placeholder="0"
              type="number"
              id="amount"
              step="any"
              {...register("amount", { valueAsNumber: true })}
            />
          </div>
          {errors.amount && (
            <span className="text-[#fb923c] text-sm min-h-5">
              {errors.amount.message}
            </span>
          )}
        </div>
        {/* <div className="flex flex-col gap-1 mb-6">
          <div>
            <label htmlFor="transactionType">Type:</label>
            <select
              className="rounded-xl border border-[#818cf8] p-2.5 bg-[#282c41] text-white placeholder:italic pb-2 w-full h-10 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/50"
              {...register("transactionType")}
              id="transactionType">
              <option value="">Select type.. </option>
              {transactionTypes.map((transactionType: string) => (
                <option
                  key={transactionType}
                  value={transactionType.toLowerCase()}>
                  {transactionType}
                </option>
              ))}
            </select>
          </div>
          {errors.transactionType && (
            <span className="text-[#fb923c] text-sm min-h-5">
              {errors.transactionType.message}
            </span>
          )}
        </div> */}
        <div className="flex flex-col gap-1 mb-6">
          <div>
            <label htmlFor="category">Category:</label>
            <select
              className="rounded-xl border border-[#818cf8] p-2.5 bg-[#282c41] text-white placeholder:italic pb-2 w-full h-10 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/50"
              {...register("category")}
              id="category">
              <option value="">Select category.. </option>
              {categories.map((category: Category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {errors.category && (
            <span className="text-[#fb923c] text-sm min-h-5">
              {errors.category.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 mb-6">
          <label htmlFor="description">Description:</label>
          <input
            className="rounded-xl border border-[#818cf8] p-2.5 bg-[#282c41] text-white placeholder:italic pb-2 w-full h-10 focus:outline-none focus:ring-2 focus:ring-[#818cf8]/50"
            type="text"
            id="description"
            {...register("description")}
          />
          {errors.description && (
            <span className="text-[#fb923c] text-sm min-h-5">
              {errors.description.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="hover:bg-indigo-500 bg-indigo-600 text-white font-bold pb-2 px-2 my-4 rounded-full"
          style={{
            border: "none",
            color: "#fff",
            padding: "15px 36px",
            borderRadius: 13,
            fontSize: 16,
            fontWeight: 700,
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: `0 8px 32px rgba(129,140,248,0.4)`,
            transition: "transform 0.15s, opacity 0.15s",
            minWidth: "200px",
          }}>
          {
            <div className="flex items-center justify-center gap-2">
              {isPending ? (
                <span>
                  <FaSpinner className="animate-spin" />
                </span>
              ) : (
                <span>Submit</span>
              )}
            </div>
          }
        </button>
      </form>
    </motion.div>
  );
};

export default AddTransactionForm;
