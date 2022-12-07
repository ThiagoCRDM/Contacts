import { Account } from "../models/account";
import database from "../config/firebase_database";
import { collection, addDoc, query, getDocs, where} from "firebase/firestore"; 
import 'react-native-get-random-values';


export class SignUpController {
  
  private readonly database  = database;

  async create(account: Account): Promise<string | Error> {
      try {
        const isValid = await this.getEmail(Account.getInstance().getEmail());
        if(isValid){
         return new Error("Email ja cadastrado!")
        }
        const docRef = await addDoc(collection(this.database, "users"), {
          name: Account.getInstance().getName(),
          email: Account.getInstance().getEmail(),
          password: Account.getInstance().getPassword()
        });
      if(docRef.id == undefined || docRef.id == "" ){
        return Error("Error ao criar user")
      }
       Account.getInstance().setId(docRef.id);
        return docRef.id 
      } catch (e) {
        console.error("Error adding document: ", e);
        return e as Error;
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

