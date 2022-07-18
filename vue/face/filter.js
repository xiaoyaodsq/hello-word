let filterMap = {
  '(': -1,
  ')': 1,
  '{': -2,
  '}': 2,
  '[': -3,
  ']': 3
}
let str = '{({}]{})}'
function filters(str) {
  let stack = []
  for (const item of str) {
    if(filterMap[item] < 0){
      stack.push(item)
    } else {
      let last = stack.pop()
      console.log(filterMap[last], filterMap[item])
      if(filterMap[last] + filterMap[item] != 0) return false
    }
  }
  if(stack.length > 0 ) return false
  return true
}
console.log(filters(str))
