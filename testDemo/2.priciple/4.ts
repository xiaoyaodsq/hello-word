interface Person {
  firstName: string;
  lastName: string;
}
interface Fly {
  swing: number;
}
function greeting2(obj:Person) {
  console.log(obj.firstName+obj.lastName)
}
let p4 = {firstName: '张三', lastName: '李四'}
greeting2(p4);