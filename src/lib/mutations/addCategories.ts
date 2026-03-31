import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import type { UserCreatedCategory } from "../../interfaces/interfaces";

export const addCategory = async (category: UserCreatedCategory) => {
  try {
    const docRef = await addDoc(collection(db, "categories"), category);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addCategory;
