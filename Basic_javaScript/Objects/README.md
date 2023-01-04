
# Objects

   - key value pair
   - Always key should be unique

### for creating object

````js
var student = {
    name : "shubham",
    age : 24,
}

````

**Two Ways to access the Objects**
- bracket : objNane["key"];
- dot notation : objName.key;

````js
ex:
 student["name"];   // shubham
 student.age;     // 24

````
````js

ex: 

console.log(student);  // whole object 

console.log(student.age);  //24
console.log(student['age']); //24

console.log(student.city);   // undefined
console.log(student['city']);  // undefined

````


**for updating the existing key of value**

````js
student.name="Ankit";

````

**for adding any new key**

````js
student.city="Patna";

````

**We have two method to access character**

````js

var str = "shubham";

console.log(str.charAt(0));
console.log(str[0]);

````

**for print each output in new line**

````js

var str = "abc" ;

for(var i = 0; i < str.length; i++)
{
    console.log(str.charAt(i));
}

````

**for print as a string**

````js

var str = "abc" ;

var str2 = "";   // take single empty string

for(var i = 0; i < str.length; i++)
{
   //    str2 = str2 + str[i];   //  bracket method
   str2 = str2 + str.charAt(i);   // dot method
}

console.log(str2);

````

## for print only key in object or count all key

**looping concept in object**


````js

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


````


**for object we can't count length so we can use looping**

- like we can't get length from this type

````js

var student = {
    name : "shubham",
    age : 24,
    city: 'patna',
}

console.log(student.length);  // this is given undefined

````

**but when we use array of object so we can find length**

````js

var student = [{
    name : "shubham",
    age : 24,
    city: 'patna',
}]

console.log(student.length);  // 1


````


## Convert arrays to arrays of objects

````js

/*
 **this is given in question**
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



````

