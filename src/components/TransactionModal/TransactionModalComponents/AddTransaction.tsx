import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../../../lib/validation/validationSchemas";
import type {
  Category,
  TransactionFormValues,
  TransactionPayload,
} from "../../../interfaces/interfaces";
import categoryOptions from "../../../lib/constants/categories_colours";
import { getDMY } from "../../../lib/functions";
import { useAuth } from "../../../context/AuthContext";

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

  const transactionTypes = ["Income", "Expense"];

  const onSubmit = (data: TransactionFormValues): void => {
    const payload: TransactionPayload = {
      ...data,
      amount:
        data.transactionType === "Expense" ? data.amount * -1 : data.amount,
      date: getDMY(new Date()),
      uid: user!.uid,
    };
    console.log(payload);
    setModalOpen(false);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (errors: any) => {
    console.log("Validation Errors:", errors);
  };

  const categories: Category[] = Object.entries(categoryOptions).map(
    ([name, color]) => ({ name, color }),
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="w-full flex flex-col min-w-87.5">
      <div className="relative my-5 w-full">
        <label htmlFor="amount">Amount:</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            $
          </span>
          <input
            className="rounded-xl border border-[#818cf8] p-2.5 bg-[#1c1f2e] text-white placeholder:italic pl-7 pr-3 py-2 w-full"
            placeholder="0"
            type="number"
            id="amount"
            step="any"
            {...register("amount", { valueAsNumber: true })}
          />
        </div>
        {errors.amount && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.amount.message}
          </span>
        )}
      </div>
      <div className="relative my-5 w-full">
        <div>
          <label htmlFor="category">Type:</label>
          <select
            className="rounded-xl border border-[#818cf8] p-2.5 bg-[#1c1f2e] text-white placeholder:italic pl-7 pr-3 py-2 w-full"
            {...register("transactionType")}
            id="category">
            {transactionTypes.map((transactionType: string) => (
              <option key={transactionType} value={transactionType}>
                {transactionType}
              </option>
            ))}
          </select>
        </div>
        {errors.amount && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.transactionType?.message}
          </span>
        )}
      </div>
      <div className="relative my-5 w-full">
        <div>
          <label htmlFor="category">Category:</label>
          <select
            className="rounded-xl border border-[#818cf8] p-2.5 bg-[#1c1f2e] text-white placeholder:italic pl-7 pr-3 py-2 w-full"
            {...register("category")}
            id="category">
            {categories.map((category: Category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {errors.amount && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.category?.message}
          </span>
        )}
      </div>

      <div className="relative my-5 w-full">
        <label htmlFor="description">Description:</label>
        <input
          className="rounded-xl border border-[#818cf8] p-2.5 bg-[#1c1f2e] text-white placeholder:italic pl-7 pr-3 py-2 w-full"
          type="text"
          id="description"
          {...register("description")}
        />
        {errors.amount && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.description?.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="hover:bg-indigo-500 bg-indigo-600 text-white font-bold py-2 px-4 my-4 rounded-full"
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
        Submit
        {/* <div className="flex items-center justify-center gap-2">
          {isLoading ? (
            <span>
              <FaSpinner className="animate-spin" />
            </span>
          ) : (
            <span>Submit</span>
          )}
        </div> */}
      </button>
    </form>
  );
};

export default AddTransactionForm;
