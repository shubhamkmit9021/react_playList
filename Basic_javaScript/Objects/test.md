
### for count the frequency of character

````js

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

/*

var str = "masai";

var obj = {};

for(var i = 0; i < str.length;  i++ )
{
    if(obj[str.charAt(i)] === undefined)
        obj[str.charAt(i)] = 1;
    else
        obj[str.charAt(i)] = obj[str.charAt(i)] + 1;
}

console.log(obj);

*/

````