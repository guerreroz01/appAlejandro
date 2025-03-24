import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default async function getDocumentById(
  collectionName: string,
  docId: string
) {
  let result = null;
  let error = null;
  let data = null;

  try {
    const docRef = doc(db, collectionName, docId);
    result = await getDoc(docRef);

    if (result.exists()) {
      data = { id: result.id, ...result.data() };
    } else {
      error = new Error("Document does not exist");
    }
  } catch (e) {
    error = e;
  }

  return { data, error };
}
