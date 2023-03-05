function foo() {
  // console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()

let key = "the quick brown fox jumps over the lazy dog"
let result = [...new Set(key.split(' ').join(''))]

console.log(result[1])