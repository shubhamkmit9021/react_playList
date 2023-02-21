
## closure

````js

 function sum(a) {
     return function(b) {
         return a+b;
     }      
 }

 const ans  = sum(2);
 const res = ans(3);
 console.log(res)

 ````


 ## Currying

````js

 function sum(a) {
     return function(b) {
         return a+b;
     }      
 }

 const ans  = sum(2)(3);
 console.log(ans)

 ````

 ## Hoisting

 - Hoisting a default behaviour of javascript which finds all variables and function declarations before the execution of our program
 - its does not care about variables values. its only knwos to variables which is present in our program before the execution.

 ## promise

````js

 var mypromise = new Promise( function(resolve, reject) {

     let val = 'shubham';

     if(val === 'shubhams')
         resolve();
     else
         reject();
 })

 mypromise.then( ()=> {
     console.log("Then fun")
   
 }).catch( (error) => {
     console.log("error----" + error)
 }) 

 ````

 ## return object using simple function

````js

 const mydata = Data("sk",20);
 console.log(mydata)

 function Data(n,a) {
     var obj = {};
     obj.name = n;
     obj.age = a;
     return obj;
 }

 ````

 ## return object using Constructor function

 - no need to take empty object
 - no need to return any thing
 - use new keyword for create new object
 - use this keyword for refer parent object
 - prefer to write function name in first character in capital letter

````js

 const mydata = new Data("sk",20);  // new keyword added
 console.log(mydata)

 function Data(n,a) {
     this.name = n;
     this.age = a;
 }

 ````

 ## Call
 - In Call method simply create a function same as a constructor function and pass the object directly using call method

 ````js

 var obj = {
    name : 'shubham',
}

function Data(a,c) {
    this.age = a;
    this.city = c ;
}

Data.call(obj, 20 , 'patna')
console.log(obj);

````

## apply
 - all thing is same as a call method only one change is we pass the value here in the form of array
````js

var obj = {
    name : 'shubham',
}

function Data(a,c) {
    this.age = a;
    this.city = c ;
}

Data.apply(obj,[20 , 'patna'])
console.log(obj);


````


## bind
 - bind is as simple as call only one change is its return as a function  so we need to again invoke the function

````js

var obj = {
    name : 'shubham',
}

function Data(a,c) {
    this.age = a;
    this.city = c ;
}

var ans = Data.bind(obj,20 , 'patna')
ans();
console.log(obj);

````

 ## Pass object as an argument
  - only important thing is argument name will be exactly same

````js

var obj = {
    name : 'shubham',
    age : 30
}

function data(obj) {
    console.log(obj.name)
}

data(obj)


````


## Object.assign example

```js

let obj1 = {
    name:'sk'
}
let obj2 = {
    city:'patna'
}

let obj3 = Object.assign({},obj1, obj2);
console.log(obj3)


````
