const name='Andrew'
const userAge=27
const user={
    name,
    age:userAge,
    location:'philadelphia'
}
console.log(user)
//object destructuring
const product={
    label:'red note',
    price:3,
    stock:201,
    salePrice:undefined
}
// const label=product.label
// const stock=product.stock
// const{label:productLabel, stock,rating=5}=product
// console.log(productLabel+' '+stock+' '+rating)
const transaction=(type,{label,price})=>
{
    console.log(type+price+label)
}
transaction('order',product)