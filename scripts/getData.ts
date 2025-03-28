import { collection, doc, getDoc, getDocs } from "firebase/firestore";
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
      data = { ...result.data() };
    } else {
      error = new Error("Document does not exist");
    }
  } catch (e) {
    error = e;
  }

  return { data, error };
}

export async function getDate(collectionName: string) {
  let data: any[] = [];
  let error = null;

  try {
    const querySnapshot = await getDocs(collection(db, collectionName));

    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    error = e;
  }

  return { data, error };
}
