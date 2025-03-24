import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default async function updateDocumentById(
  collectionName: string,
  docId: string,
  data: any
) {
  let result = null;
  let error = null;

  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, data);
    result = { id: docId, ...data };
  } catch (e) {
    error = e;
  }

  return { result, error };
}
