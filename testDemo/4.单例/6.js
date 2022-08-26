// 把类的实例的创建和单例逻辑分开
function Window(name) {
  this.name = name;
}
Window.prototype.getName = function () {
  console.log(this.name)
}

function Dialog(title, content) {
  this.title = title;
  this.content = content;
}

let CreateSingle = function(Constructor) {
  let instance;
  let SingleConstructor = function () {
    if (!instance) {
      Constructor.apply(this, arguments);
      instance = this
    }
    return instance;
  }
  // 典型原型继承
  SingleConstructor.prototype = Object.create(Constructor.prototype);
  return SingleConstructor
};

let createWindow = CreateSingle(Window)
let w1 = new createWindow('zfpx1');
let w2 = new createWindow('zfpx2');
w1.getName()
console.log(w1 === w2);

let createDialog = CreateSingle(Dialog)
let d1 = new createDialog('zfpx1');
let d2 = new createDialog('zfpx2');
console.log(d1 === d2);
