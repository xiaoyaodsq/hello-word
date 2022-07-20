class Plant {
  constructor(name){
    this.name = name
  }
  grow(){
    console.log('我正在生长~~~~')
  }
}
class Apple extends Plant {
  constructor(name, flavour){
    super(name);
    this.flavour = flavour;
  }
}
class Orange extends Plant {
  constructor(name, flavour){
    super(name);
    this.flavour = flavour;
  }
}
// 直接new的缺点
// 1，耦合，2，依赖具体的实现
// 简单工厂
class Factory {
  static create(type){
    switch(type){
      case 'apple':
        return new Apple('苹果','甜')
      case 'orange':
        return new Apple('桔子','酸');
      default:
        throw new Error('俺木有')
    }
  }
}
let apple = Factory.create('apple')
let orange = Factory.create('orange')
console.log(apple.flavour);
console.log(orange.flavour);