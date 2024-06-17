"use strict";
class User {
    constructor(name, age, lang, //can be accessed within te class only
    password = 42 //default value
    ) {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.password = password;
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.password = password;
    }
}
const user = new User('Nelly', 28, 'Eng');
class userDetails extends User {
    constructor(address, name, age, lang) {
        super(name, age, lang);
        this.address = address;
        this.address = address;
    }
}
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
//////////////////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps('John');
const amy = new Peeps('Amy');
const Nelly = new Peeps('Nelly');
console.log(Peeps.count);
console.log(amy.id);
////////////////////////////////////////////
// getters and setters 
