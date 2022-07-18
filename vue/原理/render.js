function cb(val) {
  /* 渲染视图 */
  console.log("视图更新了~")
}

function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGet(val) {
      return val;
    },
    set: function reactiveSet(newVal) {
      if(newVal === val) return;
      cb(newVal);
    }
  })
}

function oberserver(value) {
  if(!value || typeof value !== Object) {
    return;
  }

  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key])
  })
}

class Vue {
  constructor(options){
    this._data = options.data;
    oberserver(this._data);
  }
}

let o = new Vue({
  data: {
    test: 'I am test'
  }
});
console.log(o._data.test)

o._data.test = 'hello world'
console.log(o._data.test)
