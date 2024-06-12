
class User{
  constructor(public readonly name: string,
             public age: number,
             private lang: string,          //can be accessed within te class only
             protected password: number = 42      //default value
  ){
    this.name = name
    this.age = age
    this.lang = lang
    this.password = password
  }
}

const user = new User ('Nelly',28,'Eng');

class userDetails  extends User{
  constructor(
    public address: string,
    name: string,
    age: number,
    lang: string,
  ) {
    super(name, age, lang)
    this.address = address,

  }
}
