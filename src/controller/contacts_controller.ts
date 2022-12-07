import { Account } from "../models/account";
import database from "../config/firebase_database";
import { collection, addDoc, query, getDocs, deleteDoc, doc} from "firebase/firestore"; 
import 'react-native-get-random-values';
import { Contact } from "../models/contact";


export class ContactsController {
  
  private readonly database  = database;

  async create(contact: Contact): Promise<Contact |Error> {
      try {
        const docRef = await addDoc(collection(this.database, `users/${contact.accountId}`, "contacts"), {
          name: contact.name,
          number: contact.number,
        });
        console.log(docRef.id)
        return {...contact, id: docRef.id};
      } catch (e) {
        console.error("Error adding document: ", e);
        return e as Error;
      }
  }

  async getContacts(): Promise<Array<Contact> |Error> {
    try {
      let listContacts:Array<Contact> = [];
      const docRef = await getDocs(collection(this.database, `users/${Account.getInstance().getId()}`, "contacts"));
        docRef.forEach((e)=>{
          if(e.exists()){
            return  listContacts.push({
              accountId: Account.getInstance().getId(),
              id:e.id, 
              name: e.data().name, 
              number: e.data().number
            })
          }
        });
     
        return listContacts;
    } catch (e) {
      console.error("Error adding document: ", e);
      return e as Error;
    }
  }

  async excluir(contact:Contact):Promise<void>{
    const contactRef  = doc(this.database,`users/${Account.getInstance().getId()}`, `contacts/${contact.id}`)
    const result  = await deleteDoc(contactRef)
    console.log(result);
  }

}

