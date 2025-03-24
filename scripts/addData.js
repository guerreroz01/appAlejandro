import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default async function addData(idCollection, data) {
  let result = null;
  let error = null;

  try {
    result = await addDoc(collection(db, idCollection), data);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
