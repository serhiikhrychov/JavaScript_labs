"use strict";

// ------ наслідування ------

class Human {
  constructor(name) {
    this.ability;
    this.name = name;
  }

  canDo(ability) {
    this.ability = ability;
    alert( `${this.name} has ability to ${this.ability}.` );
  } 

  speak() {
    alert( `${this.name} can speak` )
  }
} 

class SomePerson extends Human {
  doHisWork() {
    alert( `${this.name} works` );
  }

// наслідуємо батьківський метод та доповнюємо його 

  canDo() {
    super.speak();
    this.doHisWork();
  }
}

let somePerson = new SomePerson("Jim");

somePerson.canDo();

// ------ перевизначення конструктора ------

class Human1 {
  constructor(name) {
    this.ability;
    this.name = name;
  }
}
 
class SomePerson1 extends Human1 {
  constructor(name, brain) {
    super(name);
    this.brain = brain;
  }
}

let somePerson1 = new SomePerson1("Jim", "hasBrain");

alert( somePerson1.name );
alert( somePerson1.brain );

// ------ приватні поля та методи ------

class Man {
  _moneyAmount = 0;      // _ захищене поле

  set moneyAmount(value) {
    if (value < 0) throw new Error("You can't add this value");
    this._moneyAmount = value;
  }

  get moneyAmount() {
    return this._moneyAmount;
  }
}

// створюємо нового чоловіка з грошима
let manWithMoney = new Man();

manWithMoney.moneyAmount = 100;

alert ( manWithMoney.moneyAmount );

// ставимо невалідне значення
// manWithMoney.moneyAmount = -10; // Error: You can't add this value


// ------ приватність з # ------

class Man1 {
  #moneyAmount1 = 200;

  #checkMoney(value) {
    if (value < 0) throw new Error("Negative value");
    if (value > this.#moneyAmount1) throw new Error("a lot of money, did you pay taxes?");
  }
}

let manWithMoney1 = new Man1();

// не маємо доступу ззовні
// manWithMoney1.#checkMoney(); // Error
// manWithMoney1.#moneyAmount1 = 1000; // Error