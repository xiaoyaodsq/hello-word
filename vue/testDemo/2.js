var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* *
  * public
  * protected
  * private
*/
var Person = /** @class */ (function () {
    function Person(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, money, num) {
        var _this = _super.call(this, name, age, money) || this;
        _this.num = num;
        return _this;
    }
    Student.prototype.getName = function () {
        // 在子类中可以访问父类的公有属性
        console.log("my name is ".concat(this.name));
    };
    Student.prototype.getAge = function () {
        // 受保护的属性子类可以访问
        console.log("my age is ".concat(this.age));
    };
    return Student;
}(Person));
var s1 = new Student('sanxiu', 18, 100, 12);
// 在其他类中可以访问父类的公有属性
console.log(s1.name);
// 属性age是受保护的,只能在子类和自己的类中访问
// console.log(s1.age);
