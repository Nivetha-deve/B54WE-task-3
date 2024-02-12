//1................
//PRINTING ODD NUMBERS:
const odd = function(a,b){
    return a+b;
}
console.log(odd(1,2));
console.log(odd(2,3));
console.log(odd(3,4));

//2...................
//convert strings to title caps
(function () {
   const student = ["i am a student of guvi geek and i like the class very much"];
    
    for (const i = 0; i < student.length; i++) {
      student[i] = student[i].toLowerCase().split(' ').map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
    }
  
  console.log(student);
  })();

 //3.........................
// sum of all numbers
(function() {
  var number =[1,2,3,4,5,6,7,8,9,10];
  var result =0;
  for (var i =0; i<number.length; i++){
    result += number[i];
  }
  console.log(+result);
})();

 //4.............................
 //prime numbers
 (()=>{
  const res=[1,2,3,4,5,6,7,8,9,10,11,12,13];
  let result = [];
  function isPrime(res) {
    if(res < 2) return false;
  
    for (let i= 2; i < res; i++){
      if(res % i == 0){
        return false;
      }
    }
    return true;
  }
  res.forEach(function (element) {
    const item = isPrime(element);
    if (item) {
      result.push(element);
    }
  });
  console.log(result);
 })();
//5...............................
//palindromes
 (()=>{
   var a=["level","212","cdc","bye"]
  for(i=0;i<a.length;i++)
  {
         var b=a[i].split("").reverse().join("")
       if(a[i]==b)
       console.log(a[i])
   }})();
//6...................
// remove duplicates from array
const num =[1,2,3,4,5,6,2,2,3,5,7,8];
function remove(num){
 return num.filter((num1,index) => num.indexOf(num1)===index);
}
console.log(remove(num));
//7).......................
 //median of two sorted array
 const median = (a, b) => {
  let c = [...a, ...b].sort((a,b) =>a-b);
 const half = c.length / 2 | 0;
   if (c.length % 2) return c[half];
  return (c[half] + c[half-1])/2;
 }
 let a=[9,3,6];
 let b=[9,3,7];
 console.log(median(a,b));
//8...................
//rotate an array k times
const rotateArray1 =(nums,k)=>{
  for (let i=0;i<k;i++) {
      nums.unshift(nums.pop());
  }
  return nums;
}
let nums=[2,7,6,8,9,4,3,1];
let k=[5];
console.log(rotateArray1(nums,k));