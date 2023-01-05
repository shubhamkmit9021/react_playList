
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

# Convert String to Number 

````js

var str = '1234' ; // type - string

var num = Number(str) // type - Number
or
var num = +(str); // type - Number

````

# Convert Number to String 

````js

var num = 1234 ; // type - number
var str = num.toString(); // type - string

````

# Getting Ascii Value from Character of String

- [ A to Z ] --- 65 to 90
- [ a to z ] --- 97 to 122
- Any upper Case letter + 32 = Lower Case letter

````js

var str = 'ABCD'
console.log(str.charCodeAt(0)); // 65 this output is only for first character

````

# Convert Ascii Value to Character

````js

var val = 65;
console.log(String.fromCharCode(val));  // A 

````

# convert in java example

````java
String str = "abc";
char ch = str.charAt(0) // a
int ch = str.charAt(0)  // 97

````

