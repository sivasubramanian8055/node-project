const notes=require ('./notes.js')
const chalk=require('chalk')
const yargs=require('yargs')
// customize args function
yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
    title:{
        describe:'note title',
        demandOption: true,
        type: 'string'
    },
    body:{
        description:'info',
        demandOption:true,
        type:'string'
    }
     },
    handler(argv)
    {
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv)
    {
        notes.removeNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list',
    handler()
    { console.log(chalk.red.inverse('Notes present'))
      notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'reading a file',
    builder:{
     title:{
         description:'note title',
         demandOption:true,
         type:'string'
        }
    },
    handler(argv)
    {
        notes.readNotes(argv.title)
    }
})
//console.log(yargs.argv)
yargs.parse()
// add,remove,read,list

