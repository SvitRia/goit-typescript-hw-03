class Key {
    private signature: number = Math.random();

    getSignature(): number {
    return this.signature;
    }
}

class Person {
    constructor(private key:Key ) {
    }

    getKey() {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];

    constructor( public key: Key) {}
    
    comeIn(person: Person):void {
        if (!this.door) {
            return console.log("The door is closed.")
        }
        this.tenants.push(person)
        console.log('Please, come in')
    }
    abstract openDoor(key:Key):void
        
}    
    
class MyHouse extends House {
    openDoor(key: Key):void {
if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open");
    } else {
    console.log("The key doesn't fit, the door is closed");
    }
    }
};    

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};