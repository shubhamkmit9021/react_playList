
# Question Sequence
- Remove Duplicates from Sorted Array
- Sort array is ascending order
- Sort array is Descending order
- Reverse String
- Rotate Array
- print sum of array
- print the frequency of character
- store all key of obj in array
- Given an array, does an array Contains Duplicate
- Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


## Remove Duplicates from Sorted Array

````js

let arr = [2,4,4,6,8,8,10,15];   // sorted array

let res = [...new Set(arr)];
console.log(res);  // [ 2, 4, 6, 8, 10, 15 ]

````


## Sort array is ascending order

````js

let arr = [3,4,7,2,4,6,7,3,2,6,7,9];

let res = arr.sort( (a,b) => {
    return a-b;
})
console.log(res);  // [ 2, 2, 3, 3, 4, 4, 6, 6, 7, 7, 7, 9 ]

````


## Sort array is Descending order

````js

let arr = [3,4,7,2,4,6,7,3,2,6,7,9];

let res = arr.sort( (a,b) => {
    return b-a;
})
console.log(res);  // [ 9, 7, 7, 7, 6, 6, 4, 4, 3, 3, 2, 2 ]

````

## Reverse String

````js

let str = "My name is Shubham";
let res = str.split('').reverse().join('');
console.log(res);   // mahbuhS si eman yM

````
## Rotate Array

````js

let arr = [2,3,4,5,6,7,10,16];
let res = arr.reverse();
console.log(res)  // [ 16, 10, 7, 6, 5,  4, 3, 2 ]

````

## print sum of array

````js

let arr = [2,3,4,5,6,7,10,16];

let sum = arr.reduce( ( accum, elem) => {
    return accum + elem;
})

console.log(sum);  // 53

````

## print the frequency of character

````js

let str = "masai";

let obj = {};

for(let i = 0; i < str.length; i++) 
{
    let char = str.charAt(i);
    if(!obj[char])
    {
        obj[char] = 1;
    }
    else
    {
        obj[char] = obj[char] + 1; 
    }
}
console.log(obj);  // { m: 1, a: 2, s: 1, i: 1 }

````

## store all key of obj in array

````js

var obj = {
    name : "sk",
    age : 20,
    city : 'patna'
}
var arr = []
for(var key in obj) 
{
    arr.push(key)
}
console.log(arr);  // console.log(key);

````

## Given an array, does an array Contains Duplicate

````js

let arr = [3,4,5,6,7,32,4,5];

var obj = {};

for(var i = 0; i < arr.length; i++ )
{
    let val = arr[i];
    if(!obj[val])
    {
        obj[val] = 1;
    }
    else 
    {
        console.log("Duplicate exist");    // Duplicate exist
        return;
    }
}
console.log("Duplicate not Exist");

````

## Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

````js

let arr = [2,4,3,5,4,2,6,5,6];
let temp = 0;
for(var i = 0; i < arr.length; i++)
{
    temp = temp ^ arr[i];
}
console.log(temp);   // 3

````

## 