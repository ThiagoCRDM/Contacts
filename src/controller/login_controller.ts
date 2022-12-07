import { Account } from "../models/account";
import database from "../config/firebase_database";
import { collection, getDocs, where, query} from "firebase/firestore"; 
export class SigninController {
  
  private readonly database  = database;

  async login(email: string, passowrd:string): Promise<Account | null> {
    const getUsersRef =  collection(this.database, "users");
    const queryRef =  query(getUsersRef, where("email", "==", email));
    const querySnapshot = await getDocs(queryRef);
    let accountResult = {id: "", name:"", email:"", password:""};
    querySnapshot.forEach((doc) => {
      if(doc.exists()){
       return accountResult = {
          id : doc.id,
          name: doc.data().name,
          email: doc.data().email,
          password:doc.data().password,
        }
      }
    });

    if(accountResult.password === "" || accountResult.password !== passowrd ){
      return null
    }
    
    return accountResult.id === "" ? null : accountResult;
  }

}
