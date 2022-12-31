

- html basic structure called boiler plate
- inside <script></script>  we write javaScript code

- let var and const

// obj example  [ key-value pair ]

let obj = {
    name: "shubham",
    age: 22,
    myFunction: function fun1(number) {
        console.log("The given number is: " + number);
    }
}

for accessing :-
    obj.name // shubham
    obj.age  // 22
    obj.myFunction(10);  // The given number is 10

// for access Events

document.addEventListener("click", function click() {
    console.log("Clicked");
    // alert("Hello");
    let conf = confirm("Are you sure ?");
    console.log(conf);

}



})


