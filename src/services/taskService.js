import { db } from "../library/firebase";
import {
  doc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc, 
  addDoc
} from "firebase/firestore";

const taskService = {
  getTasks: async () => {
    const data = await getDocs(collection(db, "todos"));
    return data;
  },
  addTask : async (task) => {
    const todosCollectionRef = collection(db, "todos");
    return await addDoc(todosCollectionRef, task)
  },
  updateTask : async (task, updatedFields) => {
    await updateDoc(doc(db, "todos", task.id), updatedFields);
  },
  deleteTask: async (task) => {
    await deleteDoc(doc(db, "todos", task.id))
  }
}

export default taskService;