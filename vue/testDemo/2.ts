/* *
  * public
  * protected 
  * private 
*/
class Person {
  public name:string; // 公有属性，自己，自己的子类和其他类都可以访问
  protected age: number; // 受保护的属性，自己，自己的子类可访问，但其他类不能访问
  private money: number; // 私有的，自己能访问，子类和其他类都不能访问
  constructor(name, age, money){
    this.name = name
    this.age = age
    this.money = money
  }
}
class Student extends Person {
  public num: number;
  constructor(name, age, money, num){
    super(name, age, money);
    this.num = num
  }
  getName(){
    // 在子类中可以访问父类的公有属性
    console.log(`my name is ${this.name}`)
  }
  getAge(){
    // 受保护的属性子类可以访问
    console.log(`my age is ${this.age}`)
  }
  getMoney(){
    // 受保护的属性子类可以访问
    // console.log(`我的私房钱 ${this.money}`)
  }
}
let s1 = new Student('sanxiu',18,100,12);
// 在其他类中可以访问父类的公有属性
console.log(s1.name);
// 属性age是受保护的,只能在子类和自己的类中访问
// console.log(s1.age);


