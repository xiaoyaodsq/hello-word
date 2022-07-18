function create(arguments) {
  /* 创建一个空对象
  获取构造函数
  设置空对象的原型
  绑定 this 并执行构造函数
  确保返回值为对象 */
  let obj = {}
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  let result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}

create()