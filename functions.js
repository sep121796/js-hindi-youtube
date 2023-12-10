function addtwono(number1 ,number2){
    let result = (number1+number2)
    return result
 }
 const result=addtwono(5,4)
 console.log(result)

 function logeedin(username){
    return `${username} just login`
}

 const uservalue=logeedin("sunil")
 console.log(uservalue)


 function addtocart(...num1){
    return num1
}

console.log(addtocart(100,200,400))



const user={
    username:"sunil",
    prices:199
}
function handleobject(anyobject){
    console.log(   `usernameis ${anyobject.username} price is ${anyobject.prices}`)
}
handleobject(user)  



const username={
    name :"sunil",
    price:999,
    welcomemessage:function(){
        console.log(`${this.name} welcome to website`)
    }
}

username.welcomemessage();

username.name="sam"
username.welcomemessage();



const chai=()=>{
    let username="sunil"
    console.log(username)
}
chai()