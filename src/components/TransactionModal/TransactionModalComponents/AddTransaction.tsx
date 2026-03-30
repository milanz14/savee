import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../../../lib/validation/validationSchemas";
import type {
  Category,
  TransactionFormValues,
} from "../../../interfaces/interfaces";

import categoryOptions from "../../../lib/constants/categories_colours";

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

  const onSubmit = (data: TransactionFormValues): void => {
    setModalOpen(false);
    console.log(data);
  };

  const categories: Category[] = Object.entries(categoryOptions).map(
    ([name, color]) => ({ name, color }),
  );

  return (
    <form onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}>
      <div className="relative my-5">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            $
          </span>
          <input
            className="w-full border border-gray-300 rounded pl-7 pr-3 py-2 bg-white text-gray-900"
            placeholder="0"
            type="number"
            {...register("amount", { valueAsNumber: true })}
          />
        </div>
        {errors.amount && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.amount.message}
          </span>
        )}
      </div>
      <div className="relative my-5">
        <div>
          <label htmlFor="amount">Category</label>
          <select
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-900"
            {...register("category")}>
            {categories.map((category: Category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        {errors.amount && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.amount.message}
          </span>
        )}
      </div>
      <button type="submit" className="border border-amber-500 cursor-pointer">
        Submit
      </button>
    </form>
  );
};

export default AddTransactionForm;
