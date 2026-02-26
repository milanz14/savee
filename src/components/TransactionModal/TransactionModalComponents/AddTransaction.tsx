import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transactionSchema } from "../../../lib/validation/validationSchemas";
import type { TransactionFormValues } from "../../../interfaces/interfaces";

import { TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

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

  return (
    <form onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}>
      <h1>Add Transaction</h1>
      <div className="relative my-5">
        <TextInput
          placeholder="Amount"
          type="number"
          size="md"
          radius="lg"
          label="Amount"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <span className="text-[#f87171] absolute text-sm -bottom-6 right-0">
            {errors.amount.message}
          </span>
        )}
        <DateInput
          mt="md"
          label="Event Date"
          placeholder="Pick a date"
          valueFormat="DD/MM/YYYY" // Optional: format how the date is displayed in the input
          {...form.getInputProps("eventDate")}
        />
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
