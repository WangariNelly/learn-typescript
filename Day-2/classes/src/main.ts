
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

class userDetails  extends User {
  constructor(
    public address: string,
    name: string,
    age: number,
    lang: string,
  ) {
    super(name, age, lang)
    this.address = address
  }
}

//interface
interface Musician {
  name: string,
  instrument: string,
  play(action: string): string,
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor( name: string, instrument: string){
    this.name = name 
    this.instrument = instrument
  }
  play(action: string){
    return `${this.name} ${action} the ${this.instrument}`
  }

}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'))


//////////////////////////////////////////////////////////
class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }
  public id: number;
  constructor( public name: string){
    this.name = name
    this.id = ++ Peeps.count
  }
}

const john = new Peeps('John')
const amy = new Peeps('Amy')
const Nelly = new Peeps('Nelly')


console.log(Peeps.count)
console.log(amy.id)

////////////////////////////////////////////
// getters and setters 


