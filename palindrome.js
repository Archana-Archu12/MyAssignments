//using for loop

let a = "malayalam"
let rev1= ""
for(let i=a.length-1;i>=0;i--)
{
     rev1=rev1+a[i]
 }
console.log("The sentence after reversing is :"+rev1)
if(a==rev1)
{
    console.log("Palindrome")
}else{
   console.log("not a Palindrome") 
}

// using reverse keyword

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



