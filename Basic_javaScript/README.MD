
**Difference between coumma(,) and plus sign (+) in printing time** 
- when we use coumma print one blank space bydefault
- when we use plus sign no any space printing bydefault

````js

    var str='sk';
    var str2='pk';
    console.log(str+str2) // skpk
    
    var str='sk';
    var str2='pk';
    console.log(str,str2) // sk pk

````

## Annonumous function example

````js

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

*/


````