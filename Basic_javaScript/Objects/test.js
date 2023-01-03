
/*

// object exmaple
var student = {
    name : "shubham",
    age : 24,
}

console.log(student);  // whole object 

console.log(student.age);  //24
console.log(student['age']); //24

console.log(student.city);   // undefined
console.log(student['city']);  // undefined

*/




/*

// We have two method to access character

var str = "shubham";

console.log(str.charAt(0));
console.log(str[0]);

*/




/*

//  each output in new line
var str = "abc" ;
for(var i = 0; i < str.length; i++)
{
    console.log(str.charAt(i));
}

// print as a string

var str = "abc" ;
var str2 = "";
for(var i = 0; i < str.length; i++)
{
//    str2 = str2 + str[i];   //  bracket method
   str2 = str2 + str.charAt(i);   // dot method
}
console.log(str2);

*/


/*

// example of count the frequency of character

var str = "masai";

var obj = {};

for(var i = 0; i < str.length;  i++ )
{
   var char = str[i];
   
    if(obj[char] == undefined)
        obj[char] = 1;
    else
        obj[char] = obj[char] + 1;
}

console.log(obj);   // { m: 1, a: 2, s: 1, i: 1 }


 // another type

// var str = "masai";

// var obj = {};

// for(var i = 0; i < str.length;  i++ )
// {
//     if(obj[str.charAt(i)] === undefined)
//         obj[str.charAt(i)] = 1;
//     else
//         obj[str.charAt(i)] = obj[str.charAt(i)] + 1;
// }

// console.log(obj);

*/



