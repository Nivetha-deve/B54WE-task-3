//ARROW FUNCTION:
 //1................
 //odd numbers
 const number =[1,2,3,4,5,6,7,8,9,10];
 const odd = number.filter(number=>number%2 !==0);
 odd.forEach(odd=>{
   console.log(odd);
 });
 //2......................
 //strings to title caps
 const stringArray =[ "hi i am a student of guvi geek class"];
 const titleCaseArray = stringArray.map(string=> {
    return string .split(" ").map(word =>
    word.charAt(0).toUpperCase()+
    word.slice(1).toLowerCase())
    .join(" "); 
 });
 console.log(titleCaseArray);
//3..............................
//sum of all numbers
var numbers = [1,2,3,4,5];
var sum = 0 ;
numbers.forEach((iteam) =>{
  sum += iteam;
});
console.log(sum);
//4...............................
//prime number
const num =[2,3,5,7,11,13,17,18,19,20,22,4,9];
const result = num.filter((number) =>{
 for (var i=2;i<=Math.sqrt(number);i++){
  if( number% i===0) 
  return false;
 }
  return true;
});
console.log(result);
//5......................
//palindromes
var names =["ada","2123","5225","cdc","noon","level","light"];
var isPalindrome = str => str === str.split('').reverse().join('');
var palindrome = names => names.map(name => name).filter(isPalindrome);
console.log(palindrome(names));