export class Account {
  private static _instance:Account =  new Account();
  private id?: string;
  private email: string = "";
  private name: string = "";
  private password: string = "";
  
  constructor(){
    if(Account._instance){
      throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new.");
  }
    Account._instance = this;
  }

  public static getInstance():Account{
      return Account._instance;
  }

  public setName(name:string):void {
    this.name = name;
  }

  public getName():string{
    return this.name;
  }

  public setEmail(email:string):void {
    this.email = email;
  }

  public getEmail():string {
    return this.email;
  }

  setPassword(password:string){
    this.password = password
  }

  setId(id: string){
    this.id = id;
  }
  public getId():string {
    return this.id??"";
  }

  getPassword():string {
    return this.password;
  }

}

