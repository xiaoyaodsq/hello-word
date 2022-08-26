// 把类的实例的创建和单例逻辑分开
function Window(name) {
  this.name = name;
}
Window.prototype.getName = function () {
  console.log(this.name)
}
let CreateSingle = (function name() {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new Window(name)
    }
    return instance;
  }
})();
let w1 = new CreateSingle('zfpx1');
let w2 = new CreateSingle('zfpx2');
console.log(w1 === w2);