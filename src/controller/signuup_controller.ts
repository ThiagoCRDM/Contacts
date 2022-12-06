import { Account } from "../models/account";
import database from "../config/firebase_database";
import {  ref, set } from "firebase/database";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export class SignController {
  
  database  = database;

  creat(account: Account): void {
    set(ref(this.database, 'users/'+uuidv4()), {
      username: account.name,
      email: account.email,
      password : account.password
    });
  }

}

