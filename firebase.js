import { initializeApp } from 'firebase/app';
import {getDatabase} from 'firebase/database';
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  export default database;