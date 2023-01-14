

# First Type

````html

<button onclick="fun1()" id="btn1">Click Me</button>

````

````js

 function fun1() {
    alert("fun1 type")
}

````


# Second Type Using Anonumous Function

````html

<button id="btn1">Click Me</button>

````

````js

document.querySelector("#btn1").addEventListener("click", function() {
    myfun();
})

    
function myfun() {
    alert("function working");
}

````


# Third Type Direct Function Calling

````html

<button id="btn1">Click Me</button>

````

````js

document.querySelector("#btn1").addEventListener("click", fun3);

function fun3() {
    alert("fun3 type")
}

````
