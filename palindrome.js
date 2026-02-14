let data='Wow Malayalam Wow'
let rev=" "
console.log("The original sentence is :"+data)
let orig=data.toLowerCase()
console.log("The sentence is :"+orig)
let final=orig.split("").reverse().join('')
console.log("The sentence after reverse is :"+final)

if(orig === final)
{
    console.log("It is a Palinrome")
}
else
console.log("not a palindrome")


