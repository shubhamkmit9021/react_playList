
# Local Storage

**In local storage, we stored the data in the form of key value pair**

**To use local storage in your web application there are four methods to choose from**

- setItem() :- Add key & value to local storage
- getItem() :- For get the items using key to local storage
- removeItem() :- Remove Item using key to local storage
- clear() :- For clear all local storage

**if key not exist in local storage then value will be null**

````js

ex:-

localStorage.setItem("name","Shubham Kumar Rai");  // for sote data in local storage

var name = localStorage.getItem("name");  // for get item from local storage

````

# JSON ( Key & Value both in only String format )

- JavaScript Object Notation

- Data is sent and received on Internet in JSON (mostly).

- JSON as an Universal data format on the Internet.

````js

ex:- 

var data = {
    "name" : "Shubham kumar rai",
    "age" : "24",
    "city" : ["Ara", "Patna" ],
    "Fav_Player" : {
        "name" : "Dhoni",
        "age" : "40",
    }
}

````

**JSON just a data format and does not contain any functions/methods**

# For Convert to JSON Strings

- JSON.stringify(obj);

# Convert back to Object

- JSON.parse(data);


# Store Object in LocalStorage

```js
ex:-

var obj = {
    name: "Shubham",
    gender: "male",
};

localStorage.setItem("myData", JSON.stringify(obj));   // locally store

````

# Now Access the object from localStorage

````js

var StoredData = localStorage.getItem("myData");  // we get the data in JSON format 

// so the right approach is

var StoreData = JSON.parse(localStorage.getItem("myData"));  // data get in object form like original format

````




