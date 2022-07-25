// 工厂一般是接口，规定子类必须实现的方法
// 依赖抽象，而不依赖实现
// 接口只有方法定义，没有具体实现，如果一个类实现该接口，就必须实现该接口中的所有方法
class Factory {
  create(){}
}

module.exports = Factory