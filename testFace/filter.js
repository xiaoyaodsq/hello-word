let arr = [1, 3, 4, 2, 5, 6, 7, 8, 9];
let to_remove = [13, 2, 3, 5, 7];
const set = new Set(arr);
let result1 = new Set(arr)
let result2 = new Set(to_remove)
// let result3 = new Set([...arr]).filter(item => !result2.has(item))
let result3 = new Set([...set]).filter(item => !result2.has(item))
console.log(result3)

// const arr = [1, 1, 2, 2, 2];
// const set = new Set(arr)//Set(2) {1, 2} 
//查看集合的长度
// console.log(set.size);//2

// 去重
// const arr = [1, 1, 2, 2, 2];
// const arr2 = [...new Set(arr)];
// console.log(arr2); //[ 1, 2 ]

// 判断元素是否在集合中
// const set = new Set(arr);
// console.log(set.has(3)); //false

//求交集
// const set2 = new Set([2, 3]);
// const set3 = new Set([...set].filter(item => set2.has(item)));
// console.log(set3); //{ 2 }