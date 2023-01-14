
# DOM

**DOM converting html or web page to object model**
**DOM converts our whole screen tag into objects**


# for write innerText we can use three different options : 
 - .innerText
 - .textContent
 - .innerHtml
 


# how to read the value of input box

````html
<div>
    <input id='inp' type="text" placeholder="Enter Text Here"> <br />
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


# querySelectorAll Example

````html

<h1 id="firstname">Hello</h1>
<div id="lastname">MASAI</div>
<p id="fullname">School</p>

<button onclick="resetDefaults()">RESET DEFAULTS</button>

<script>
function resetDefaults(){
    // reset the firstname, lastname, and fullname to empty values

    // var val1 = document.querySelector("#firstname");
    // val1.innerText='';
    // var val2 = document.querySelector("#lastname");
    // val2.innerText='';
    // var val3 = document.querySelector("#fullname");
    // val3.innerText='';

    var all = document.querySelectorAll("#firstname,#lastname,#fullname");
    for(var i=0; i<all.length; i++)
    {
        all[i].innerText="";
    }
}

</script>

````

