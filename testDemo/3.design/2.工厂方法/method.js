class Plant {
  constructor(name){
    this.name = name
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

class Watermelon extends Plant {
  constructor(name, flavour){
    super(name);
    this.flavour = flavour;
  }
}

class Factory {
  create(){}
}

class AppleFactory extends Factory {
  static create() {
    return new Apple("苹果", '甜')
  }
}

class OrangeFactory extends Factory {
  static create() {
    return new Orange("桔子", '酸')
  }
}

class WatermelonFactory extends Factory {
  static create() {
    return new Watermelon("西瓜", '甜')
  }
}

let apple = AppleFactory.create();
console.log(apple)
let orange = OrangeFactory.create();
console.log(orange)
let watermelon = WatermelonFactory.create();
console.log(watermelon)
