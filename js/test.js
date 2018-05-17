
function deepEqual(value1, value2){
  let type1= typeof value1;
  let type2 = typeof value2;
  if(value1 == value2) return true;

  if(value1 == null || type1 !='object' ||
     value2 == null || type2 !='object') return false;
    let key1 = Object.keys(value1), key2 = Object.keys(value2);
    if(key1.length != key2.length) return false;
      for (let key of key1){
        if (!key2.includes(key) || !deepEqual(value1[key], value2[key]))return false;
      }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
