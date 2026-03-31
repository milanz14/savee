import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useCategories(uid: string | undefined) {
  return useQuery({
    queryKey: ["categories", uid],
    queryFn: async () => {
      const q = query(collection(db, "users", uid!, "categories"));
      const snap = await getDocs(q);
      return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    },
    enabled: !!uid,
  });
}
