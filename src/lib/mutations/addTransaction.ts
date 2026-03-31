import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { type TransactionPayload } from "../../interfaces/interfaces";

export const addTransaction = async (transaction: TransactionPayload) => {
  try {
    const docRef = await addDoc(collection(db, "transactions"), {
      ...transaction,
      date: Timestamp.fromDate(new Date(transaction.date)),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
