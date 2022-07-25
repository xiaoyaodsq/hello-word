class Factory {
  createButton(){ // 创建按钮

  }
  createIcon(){ // 创建图标

  }
}

class Icon {

}
class AppleIcon {
  render(){
    console.log('绘制Apple图标')
  }
}

class WindowsIcon {
  render(){
    console.log('绘制windows图标')
  }
}

class Button {

}
class AppleButton {
  render(){
    console.log('绘制Apple按钮')
  }
}
class WindowsButton {
  render(){
    console.log('绘制windows按钮')
  }
}
class AppleFactory extends Factory {
  createButton(){ // 创建按钮
    return new AppleButton()
  }
  createIcon(){ // 创建图标
    return new AppleIcon()
  }
}
class WindowsFactory extends Factory {
  createButton(){ // 创建按钮
    return new WindowsButton()
  }
  createIcon(){ // 创建图标
    return new WindowsIcon()
  }
}

/**
 * java是跨平台的
 * 1.画一个图标
 * 2.画一个按钮
 */
let windowsFactory = new WindowsFactory();
windowsFactory.createIcon().render();
windowsFactory.createButton().render();
// ===================================
let appleFactory = new AppleFactory();
appleFactory.createIcon().render();
appleFactory.createButton().render();
/**
 * 1.简单工厂 一般就是一个函数返回产品的实例
 * 2.工厂方法 多了工厂类，创建产品，需要先创建此工厂的实例，再通过此工厂来创建产品
 * 3.抽象工厂，一个工厂可以创建多种产品
 */