
// homework 3
function getarraylength(array){
let length = 0
for(let i = 0; array[i] !== undefined; i++){
  length++
}
return(length)
}
let array = [-1,0.4] 
console.log(getarraylength(array))


// 2
  function arraysum(array){
      let sum = 0
  for(let i = 0; array[i] !== undefined; i++){
    sum = sum + array[i] 
  }return sum;
  }
  let array = [5,6,7,8]
  console.log(arraysum(array))

// 3
function powof2(n){
  let result = 1 
  for(let i = 0; i < n; i++){
    result *= 2
  } return result
}
let min = 0
let max = 150
for(let i = 0; ; i++){
  let p = powof2(i)
  if(p >= max)
  break;
  if(min < p && p< max)
  console.log(p)
}

// 2tarberak
let a = +prompt("enter a number")
let b = +prompt("enter a number")
  if(a < b){ 
let res = 1
while(res < a ){
  res*=2
}
while(res < b ){
  console.log(res)
  res *= 2
}
}else{console.log("you must give the biggest value to b not a ")}

// 4
 let number = prompt("enter a number") 
let result = []
for(let i = 0; i < number.length; i++){
  if(number[i] % 2 === 0 && number[i+1] % 2 === 0){
result.push(number[i] + "-" )
  }
else{
  result.push(number[i])
}
}
result = result + " "
console.log(result)es devvov storaketner@ chi hanum vonc anem vor aranc join@ ogtagorcelu storaketner@ hani
console.log(result.join('')) 

// 5
let array = []
function isPrime(n){   
    if(n === 1 || n === 0) return false;
    for(let i = 2; i <= n/2 ; i++){
        if(n % i === 0) return false;
   }
    return true;
} 
let index = +prompt("enter a number");
let N = 1000;
  for(let i = 1; i <= N; i++){
      if(isPrime(i)) {
        array.push( i );
      }
    }
console.log(array[index - 1])

// es el en der asac xndirna
let rowcount = +prompt("enter a row number")
let columncount = +prompt("enter a column number")
let result = ""
for(let i = 0; i < columncount; i++){
    let row = " "
    for(let j = 0; j < rowcount; j++){
        if( i + j === rowcount - 1  ){
            row += "*"   
        }else{
            row += " "
        }
    }result += row + "\n"
}console.log(result)
// glxavor ankunagci hakarakna
// 95 erord toxi rowcount vor poxarinenq columncountov eli kashxati vrovhetev havasar en