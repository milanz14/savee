import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTransaction } from "../lib/mutations/addTransaction";
import type { TransactionPayload } from "../interfaces/interfaces";

export const useAddTransaction = (uid: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: TransactionPayload) => addTransaction(payload, uid),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions", uid] });
    },
  });
};

export default useAddTransaction;
