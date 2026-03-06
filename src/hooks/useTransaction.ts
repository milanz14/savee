import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useTransactions(uid: string | undefined) {
  return useQuery({
    queryKey: ["transactions", uid],
    queryFn: async () => {
      const q = query(collection(db, "transactions"), where("uid", "==", uid));
      const snap = await getDocs(q);
      return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    },
    // waits until uid exists before firing
    enabled: !!uid,
  });
}
