import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import type { UserCreatedBudget } from "../../interfaces/interfaces";

export const addBudget = async (budget: UserCreatedBudget, uid: string) => {
  try {
    const docRef = await addDoc(
      collection(db, "users", uid, "budgets"),
      budget,
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addBudget;
