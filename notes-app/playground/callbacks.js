 setTimeout(()=>{
     console.log('two seconds are up')
 },2000)
 const name=['siva','aron','mike']
 const shortname=name.filter(
     (name)=>{
     return name.length<=4
 })
 const geocode=(address,callback)=>
 {   
     setTimeout(()=>
     {
     const data={
         lat:0,
         long:0}
     callback(data)
     }
 ,2000)}
    
 
 const dat=geocode('philadelpphia',(dati)=>{
     console.log(dati)

 })

const add=(a,b,callback)=>
{setTimeout(()=>
    {
    callback(a+b)
    },2000)
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})