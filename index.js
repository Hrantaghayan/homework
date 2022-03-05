
// homework 2 
1
let number = +prompt("enter a number")
let sum = 0
while(number !== 0){
    let lastdigit = number % 10
    sum = sum + lastdigit
    number = (number - lastdigit) / 10
}
console.log(sum)

// 2
let number1 = +prompt("enter a number")
let number2 = +prompt("enter a number")
let number3 = +prompt("enter a number")
if(number1 < number2 + number3 && number2 < number1 + number3 && number3< number1 + number2){
    alert("yes")
}else{
    alert("no")
// }

// 3
let number = +prompt("enter a number")
let b = 0
if(number === 0){
console.log(1)
}else{while(number !== 0){
let lastdigit = number % 10
b++
number = (number - lastdigit) / 10
}
console.log(b)
}

// 4
let number = +prompt("enter a number")
let b = 0
while(number !== 0){
let lastdigit = number % 10 
if(lastdigit === 9 || lastdigit === -9){
b++
}
number = (number - lastdigit) / 10
}console.log(b)

// 5
let number = +prompt("enter a number")
let b = 0
while(number !== 0){
let lastdigit = number % 10
b = b * 10 + lastdigit
number = (number - lastdigit) / 10
}console.log(b)



// 2 tarberak stringov tarberakna
let a = +prompt("enter a number")
let b = " "
let x = "-"
if(a > 0) {while(a !== 0){
let c = a % 10
b = b + c 
a = (a - c ) / 10
}
console.log(b)
}else if(a < 0 )  {
 while(a !== 0){
let c = a % 10
x = x + (-c) 
a = (a - c ) / 10
} 
console.log(x)
}else{
    console.log(0)
}
