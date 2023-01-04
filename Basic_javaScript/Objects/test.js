
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


/*

// looping in object

var student = {
    name : "shubham",
    age : 24,
    city: 'patna',
}
 
// we can take any variable name instead of key

for(var key in student) 
{
    console.log(key);    // print all key only
    console.log(student[key]);   // print all value only
}

// for(var i in student )
// {
//     console.log(i + " : " + student[i]);  // key : value print
// }


*/

/*

 // array of object

var student = [{
    name : "shubham",
    age : 24,
    city: 'patna',
}]

console.log(student.length);

*/


// Annonumous function example

 // return type

/*

var student = {
    name : "shubham",
    age : 24,
    city: 'patna',
    print : function() {
        return 'abc'
    }
}

var ans = student.print();
console.log(ans);   // abc




// no return type

var student = {
    name : "shubham",
    age : 24,
    city: 'patna',
    print : function() {
        console.log('abc');   // abc
    }
}

student.print();


*/

// Convert arrays to arrays of objects

/*

ex:-

var product = ["Iphone", "Ipad", "Macbook"];
var price = [9000, 6000, 5000];

 here two different arrays products and price we have to combine this arrays into object

 ex:-  we need to output this type
 [
    {product: "Iphone", price : 9000},
    {product: "Ipad", price : 6000},
    {product: "Macbook", price : 5000},
 ]

*/

// var product = ["Iphone", "Ipad", "Macbook"];
// var price = [9000, 6000, 5000];

// var data =[];

// for(var i = 0; i < product.length; i++)
// {
//     var obj = {};

//     var key = product[i];
//     var value =price[i];

//     obj[key] = value;

//     data.push(obj);
// }

// console.log(data);  // [ { Iphone: 9000 }, { Ipad: 6000 }, { Macbook: 5000 } ]



var product = ["Iphone", "Ipad", "Macbook"];
var price = [9000, 6000, 5000];

var data =[];

for(var i = 0; i < product.length; i++)
{
    var obj = {};

    var key = product[i];
    var value =price[i];

    obj['product'] = key;
    obj['price'] = value

    // obj.product = product[i];
    // obj.price = price[i];

    data.push(obj);
}

console.log(data);  

//   [
//     { product: 'Iphone', price: 9000 },
//     { product: 'Ipad', price: 6000 },
//     { product: 'Macbook', price: 5000 }
//   ]

