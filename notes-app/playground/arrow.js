//const square = function(x)
//{return x*x}
//console.log(square(3))

//const square = (x)=>{
  //  return x*x;
//}
//console.log(square(3))
//const square= (x) =>{}
const event= {

    name:'birthday party',
    guestList: ['kedi','kudi','badu'],
    printGuestList() 
        {
        console.log('guest list for '+ this.name ) 
       this.guestList.forEach((guest)=>
       { 
           console.log(guest+'is attending'+this.name)
    })    
    }

    
}
event.printGuestList()