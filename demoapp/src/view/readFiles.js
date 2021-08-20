console.log(1111111,process.argv)
let fs = require('fs')
let path = require('path')
const desPath = path.join(__dirname, process.argv[2])
// let dir = "/files"
console.log(2222222222,desPath)
let filesList = fs.readdirSync(desPath)
let finishObj = '# :books: 目录'
filesList.forEach((file,index)=> {
  let filePath = path.resolve(__dirname, desPath+'/'+file)
  let fileName = fs.readFileSync(filePath, 'utf-8').split('\r\n')[0].split(":")[2].trim()
  console.log(3333333, fileName)
  finishObj += `\r\n\n :four_leaf_clover:${index+1}.[${fileName}](.${process.argv[2]}/${file})`
})
let targetFile = path.resolve(__dirname, './aceept.md')
fs.writeFile(targetFile,finishObj.toString(), err => {
  if(err) {
    console.log(4444, err)
  }
})
console.log('----------', finishObj)
return finishObj
