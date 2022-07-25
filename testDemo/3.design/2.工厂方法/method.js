let AppleFactory = require('./apple')
console.log(AppleFactory.create())


// class Orange extends Plant {
//   constructor(name, flavour){
//     super(name);
//     this.flavour = flavour;
//   }
// }

// class Watermelon extends Plant {
//   constructor(name, flavour){
//     super(name);
//     this.flavour = flavour;
//   }
// }





// class OrangeFactory extends Factory {
//   static create() {
//     return new Orange("桔子", '酸')
//   }
// }

// class WatermelonFactory extends Factory {
//   static create() {
//     return new Watermelon("西瓜", '甜')
//   }
// }

// // 一般会跟配置对象配合
// let settings = {
//   'apple': AppleFactory,
//   'orange': OrangeFactory,
//   'watermelon': WatermelonFactory,
// }

// let apple = settings['apple'].create();
// console.log(apple)
// let orange = settings['orange'].create();
// console.log(orange)
// let watermelon = settings['watermelon'].create();
// console.log(watermelon)
