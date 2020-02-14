const fs=require('fs')
const chalk=require('chalk')
const addNote = (title,body)=>
{   const notes=loadNotes()
    const duplicateNote=notes.find((notes)=> notes.title===title)
    debugger
  
    if(!duplicateNote)
    {
    notes.push({
        title: title,
        body: body
    })
saveNotes(notes)
console.log('note added')
}
else{
    console.log('note title taken')
}

}


const loadNotes =()=>
{
    try{
const dataBuffer=fs.readFileSync('notes.json')
const data=dataBuffer.toString()
return JSON.parse(data)
}
catch(e)
{
    return[]
}
}
const removeNotes=(title)=>
{
    const notes=loadNotes()
    const notesToKeep=notes.filter((notes)=>notes.title!=title)
    saveNotes(notesToKeep)
  if(notes.length>notesToKeep.length)
   {
       console.log(chalk.green.inverse('note delete'))
   }
   else
     console.log(chalk.red.inverse('title not present'))
}

const saveNotes =(notes)=>
{
    const dataJson=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}
const listNotes =()=>
{
const notes=loadNotes();
notes.forEach((notes) => {
    console.log(notes.title) 
});
}
const readNotes =(title)=>
{
    const notes=loadNotes();
    const nip= notes.find((notes)=> notes.title===title)
    if(nip)
    {console.log(chalk.green.inverse(nip.title))
    console.log(chalk.red.inverse(nip.body))}
    else
    console.log('note not present')
}

module.exports=
{
    addNote:addNote,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}