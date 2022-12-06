export class Contact {
  id? : string;
  name : string;
  number: Array<string>;

  constructor(name: string, number: [string]){
    this.name =  name;
    this.number = number;
  }
} 