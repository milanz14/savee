import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useBudgets(uid: string | undefined) {
  return useQuery({
    queryKey: ["budgets", uid],
    queryFn: async () => {
      const q = query(collection(db, "budgets"), where("uid", "==", uid));
      const snap = await getDocs(q);
      return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    },
    enabled: !!uid,
  });
}
