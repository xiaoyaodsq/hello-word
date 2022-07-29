// 透明单例
let Window = (function() {
  let window;
  let Window = function(name) {
    if(window){
      return window
    } else {
      this.name = name;
      return (window = this);
    }
  }
  return Window;
})()

/**
 * 1.创建一个空对象，this=空对象
 * new 关键字，如果返回的是一个对象
 */
let w1 = new Window();
let w2 = new Window();
console.log(w1 == w2);
/**
 * 违反了单一原则
 */