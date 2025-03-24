import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

/**
 * Agrega un documento con un ID personalizado a una colección de Firestore.
 * @param idCollection - Nombre de la colección
 * @param data - Datos del documento
 * @param docId - ID específico que quieres asignar (requerido)
 */
export default async function addUser(
  idCollection: string,
  data: any,
  docId: string
) {
  let result = null;
  let error = null;

  try {
    const docRef = doc(db, idCollection, docId);
    await setDoc(docRef, data);
    result = { id: docId, ...data };
  } catch (e) {
    error = e;
  }

  return { result, error };
}
