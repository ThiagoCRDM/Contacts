import { Account } from "../models/account";
import database from "../config/firebase_database";
import { collection, addDoc, query, getDocs, where} from "firebase/firestore"; 
import 'react-native-get-random-values';
import { Contact } from "../models/contact";


export class ContactsController {
  
  private readonly database  = database;

  async create(contact: Contact): Promise<void |Error> {
      try {
        const docRef = await addDoc(collection(this.database, "contacts"), {
          name: contact.name,
          email: contact.number,
        });
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

}

