// 单例ES5写法

function Window(name) {
  this.name = name;
}
Window.prototype.getName = function() {
  return this.name;
}

// 这是类上的方法，只能通过类来访问，不能通过实例来访问
Window.getInstance = (function() {
  let instance;
  return function(name) {
    if(!instance){
      instance = new Window(name)
    }
    return instance;
  }
})()

let w1 = Window.getInstance();
let w2 = Window.getInstance();
console.log(w1 === w2);

/**
 * 1.客户端，必须知道这是一个单例的类，必须主动调用getInstance方法
 * 2.并不能真正阻止客户端直接 new Window
 * 解决这个问题？
 * new Window
 */