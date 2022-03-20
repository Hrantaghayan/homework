
// homework 4 
// 1
let number1 = +prompt("enter a number")
let number2 = +prompt("enter a number")
let number3 = +prompt("how much should the number increase?")
let array = []
debugger
if(number2 > number1){
for(let i = number1;i <= number2;i = i + number3){
array.push(i)
}
console.log(array)
}
else{
  for(let i = number2; i <= number1; i = i + number3){
    array.push(i)
  }
console.log(array)
}


// 2
let string = prompt("enter a string")
let symbol = prompt("enter a symbol")
let sum = 0
for(let i = 0; i < string.length; i++){
  if(symbol === string.charAt(i)){
    sum++
  }
}
console.log(sum)

// 3
let string = prompt("enter a string")
let result = ""
if(string === ""){
  console.log("no")
}
else{for(let i = string.length - 1; i >= 0; i--){
  result += string.charAt(i)
}
 if(result === string){
  console.log("yes")
}
else{
console.log("no")
}
}

// 4
function ismax(array){
  let max = -Infinity
  let length = array.length
  while(length--){
    if(max < array[length]){
      max = array[length]
    }
  }
  return max
}
let length = +prompt('enter a array length')
  let array = []
  for(let i = 0; i < length; i++){
    array.push(+prompt('enter a number'))
  }
  console.log(ismax(array))

// 5
function product2neighbours(array){
  let resultarray = []
  for(let i = 0; i + 1 < array.length; i++){
resultarray.push(array[i]*array[i+1])
  }
  return resultarray;
}
let length = +prompt('enter a array length')
  let array = []
  for(let i = 0; i < length; i++){
    array.push(+prompt('enter a number'))
  }
console.log(product2neighbours(array))


// 6
let string = prompt("enter a string")
let symbol1 = prompt("enter a symbol which can be changed")
let symbol2 = prompt("enter a symbol")
let result = ""
for(let i = 0; i < string.length; i++){
  if(symbol1 === string[i]){ 
  result += symbol2 
}
else{result += string[i]}
}
console.log(result)
// kam karanq string.charAt ov anenq

// 7
let rowcount = +prompt("enter a number")
let columncount = +prompt("enter a number")
let result = ""
for(let i = 0;i <= (rowcount-1) / 2; i++){
  let row = ""
  for(let j = 0;j < columncount; j++){
    if(i >= j){
      row += j+1
    }
    else{row += " "}
  }
  result += row + "\n"
}
for(let i = rowcount - ((rowcount - 1)/2); i <= rowcount; i++){
  let row = ""
  for(let j = 0;j < columncount; j++){
    if(i + j >= rowcount){
      row += " "
    }
    else{row += j+1}
  }
  result += row + "\n"
}
console.log(result)