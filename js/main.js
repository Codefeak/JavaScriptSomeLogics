// // Looping Triangle
//
//
// function print(noOfTimes){
//   const hash = "#";
//   let printHash= "";
//   while(printHash.length<noOfTimes){
//     printHash += hash;
//     console.log(printHash);
//   }
// }
//
// print(7);

// FizzBuzz
// print 1-100 Fizz is divisible by 3 buzzz is div by 5 and fizzbuzz if both
// for (i = 1; i<=100; i++){
//   if(i%3 === 0 && i%5 === 0){
//     console.log("FizzBuzz")
//   }else{
//     if(i%3===0){
//       if(i%5 === 0){
//         console.log("Buzz");
//       } else {
//         console.log("Fizz");
//         }
//     }else {
//       console.log (i);
//       }
//   }
//   }

// teacher's solution for Fizz buzzz

// for (let n =1; n<=100; n++){
//   let output= "";
//   if(n%3==0){
//     output+="Fizz";
//   }
//   if(n%5==0){
//     output+="Buzz";
//   }
//   // if output has falsy value it logs n else logs output.
//   console.log(output||n);
// }

//Chessboard



// function chessBoard(n,m){
//   const hash = "#";
//   const space =" ";
//   let printHash="";
//   for(let v=0; v<m; v++){
//     for (let h=0; h<n; h++){
//       if(v%2===0){
//         printHash+= h%2===0 ? space : hash;
//         // h%2===0 ? pringHash+=space : pringHash+=hash; //(it works too)
//       }else {
//         printHash+= h%2===0 ? hash : space;
//       }
//     }
//   printHash+="\n";
//   }
// console.log(printHash);
// }
//
// chessBoard (10,9);



// Minimum

// function min (a,b){
//   return a<b ? a : b;  //return.Math.min(a,b);
// }
//
// console.log(min (3,-2));


//Recursion

// function isEven(n){
//   if(n==0){
//     return true;
//   }
//   if (n==1) {
//     return false;
//   }
//   if (n<0){
//     return isEven(-n);
//   } else{
//     return isEven(n-2);
//   }
// }
//
// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → false


//Bean counting

// function countB(string, letter){
//   let count = 0;
//   for (let n = 0; n<string.length-1; n++){
//     if (string.toUpperCase()[n] === letter){
//       count++;
//     }
//   }
//   return count;
// }
//
// console.log(countB("BBC", "B"));

//The sum of range
//
// function range(a, b, c){
//   const array = [];
//   if(c){
//     if(a>b){
//         while(a>=b){array.push(a); a+=(c);}
//       } else if(b>a){
//         while(a<=b){array.push(a); a+=(c);}
//       }
//   } else{
//       while(a<=b){array.push(a); a++;}
//       while(a>=b){array.push(a); a--;}
//     }
//     return array;
//   }
//

//
// function sum(array){
//   let addition = 0;
//   for (let x=0; x<array.length; x++){
//     addition += array[x];
//   }
//   return addition;
// }
// console.log(range(1, 10, 2));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55
//


// console.log('Reversing an array');

// function reverseArray(array){
//   const reversedArray = [];
//   for (let i=array.length-1; i>=0; i--){
//     reversedArray.push(array[i]);
//     // console.log(array[i]);
//   }
//   return reversedArray;
// }
//
// function reverseArrayInPlace(array){
//
//   for(let j=array.length-1, i=0; i<j; i++, j--){
//     const temp=array[i];
//     array[i]=array[j];
//     array[j]=temp;
//   }
//   return array;
// }
//
// console.log(reverseArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]


// -----A list-----
//
// function arrayToList (array){
//    let list=null;
//    for(let i=array.length-1; i>=0; i--){
//      list = {value:array[i], rest:list};
//    }
//    return list;
//   }
// //
// function listToArray(list){
//   let array=[];
//   for(let a=list; a; a=a.rest){
//     array.push(a.value);
//   }
//   return array;
// }
//
// function prepend(element,list){
//   const newList= {
//     value: element,
//     rest : list
//   }
//   return newList;
// }
// //
// function nth (list, number){
//   for(let a = list; a; a=a.rest){
//     if(number===0){
//       return a.value;
//       break;
//     } else if (list.rest==null){
//       return undefined;
//     } else {
//       // console.log(nth);
//       return nth(list.rest, number-1);
//     }
//   }
// }
// // console.log(arrayToList([1,2,3]));
// console.log(listToArray(arrayToList([1,2,3,4])));
// console.log(prepend(10,prepend(20,null)));
// console.log(nth(arrayToList([10,20,30]), 1));
//
//
// // Deep-comparison
// function deepEqual(obj1, obj2){
//   if(obj1 === obj2) return true;
//   if( obj1 == null || obj2 == null ||
//       typeof obj1 != 'object' || typeof obj2 != 'object' )return false;
//   const key1 = Object.keys(obj1), key2 = Object.keys(obj2);
//   if (key1.length === key2.length){
//     for (let key of key1){
//       if(!key2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false;
//     }
//     return true;
//   }
// }
//
// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
