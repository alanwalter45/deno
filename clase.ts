export class Principal {
    name: String;
    age: Number;
    constructor(name: String, age: Number) {
      this.name = name;
      this.age = age;
    }
    getInfo(): String {
      return `NAME: ${this.name} AGE:${this.age}`;
    }
  }