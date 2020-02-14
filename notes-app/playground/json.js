const fs=require('fs')
/*const book={
    title:'ego is the enemy',
    author:'ryan holiday'
}
const bookJSON=JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJSON)

const dataBuffer=fs.readFileSync('')
const dataJSON=dataBuffer.toString()
const data=JSON.parse(dataJSON)
console.log(data.title)
*/
const dataBuffer=fs.readFileSync('1-json.json')
const data=dataBuffer.toString()
const obj=JSON.parse(data)
console.log(obj.name)
obj.name='siro'
obj.age='20'
const stringo=JSON.stringify(obj)
fs.writeFileSync('1-json.json',stringo)