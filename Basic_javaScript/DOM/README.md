
# how to read the value of input box

````html
<div>
    <input id='inp' type="text" placeholder="Enter Text Here"> </br>
    <button onclick="btnFun()" id="btn">Click me</button>
    <div id='box3'></div>
</div>

````

````js

function btnFun() {

    // var val = document.querySelector('#inp').value;  // read value

    // document.querySelector("#box3").innerText = val;  // write value


    var val = document.querySelector("#inp").value;   // Read value
    console.log(val);

    var box = document.createElement('h2');   // create tag in dynamically
    box.innerText = val;                      // write inside created dynamic tag

    var displaybox = document.querySelector('box3')  // access the exist container of page
    displaybox.append(box);                     // append on this

    }


````