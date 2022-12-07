import { Account } from "../models/account";
import database from "../config/firebase_database";
import { collection, getDocs, where, query} from "firebase/firestore"; 


export class SigninController {
  
  private readonly database  = database;

  async login(email: string, passowrd:string): Promise<Account | null> {
    const getUsersRef =  collection(this.database, "users");
    const queryRef =  query(getUsersRef, where("email", "==", email));
    const querySnapshot = await getDocs(queryRef);
   
    querySnapshot.forEach((doc) => {
      if(doc.exists()){
        Account.getInstance().setId(doc.id)
        Account.getInstance().setName(doc.data().name)
        Account.getInstance().setEmail(doc.data().email)
        Account.getInstance().setPassword(doc.data().password)
        return Account.getInstance()
      }
    });

    const isValid = passowrd === Account.getInstance().getPassword();


    if(Account.getInstance().getPassword() === "" || !isValid ){
      return null
    }
    
    return Account.getInstance().getId() === "" ? null : Account.getInstance();
  }

}
