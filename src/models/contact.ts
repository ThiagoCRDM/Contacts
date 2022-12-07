import { Account } from "./account";

export class Contact {

  id? : string;
  accountId: string;
  name : string;
  number: string;

  constructor(name: string, number: string, accountId:string){
    this.name =  name;
    this.number = number;
    this.accountId = accountId;
  }
} 