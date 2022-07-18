let data = [
  {"id":"01","pid":"","name":"皮肤"},
  {"id":"02","pid":"01","name":"凤凰于飞"},
  {"id":"03","pid":"01","name":"海洋之心"},
  {"id":"04","pid":"","name":"英雄"},
  {"id":"05","pid":"04","name":"坦克"},
  {"id":"06","pid":"05","name":"盾山"}
]
function transData(list, pid) {
  let trees = []
  for (const item of list) {
    if(item.pid === pid){
      item.children = transData(list, item.id)
      trees.push(item)
    }
  }
  return trees
}
function listToTree(list) {
  let treeList = []
  list.forEach(item => {
    item.children = list.filter(li => li.pid === item.id)
    if (item.pid === "") {
      treeList.push(item)
    }
  });
  return treeList
}
console.log(listToTree(data)[1].children)