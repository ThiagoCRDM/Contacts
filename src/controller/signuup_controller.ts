import { Account } from "../models/account";
import database from "../config/firebase_database";
import { collection, addDoc, query, getDocs, where} from "firebase/firestore"; 
import 'react-native-get-random-values';


export class SignUpController {
  
  private readonly database  = database;

  async create(account: Account): Promise<void |Error> {
      try {
        const isValid = await this.getEmail(account.email);
        if(!isValid){
         return new Error("Email ja cadastrado!")
        }
        const docRef = await addDoc(collection(this.database, "users"), {
          name: account.name,
          email: account.email,
          password: account.password
        });
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  }

  private async getEmail(email:string): Promise<boolean> {
    let isExist = false;
    const getUsersRef =  collection(this.database, "users");
    const queryRef =  query(getUsersRef, where("email", "==", email));
    const querySnapshot = await getDocs(queryRef);
    querySnapshot.forEach((doc) => {
      if(doc.exists()){
        isExist = true;
    }});
    return isExist;
  }

}

