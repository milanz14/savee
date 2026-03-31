import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { type TransactionPayload } from "../../interfaces/interfaces";
import { getDMY } from "../functions";

export const addTransaction = async (transaction: TransactionPayload) => {
  try {
    const docRef = await addDoc(collection(db, "transactions"), {
      ...transaction,
      date: transaction.date || getDMY(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
