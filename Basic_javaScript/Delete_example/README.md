
## For access the specific CHILD of any targeted line

- we can use children keyword to access the children

````js

let itemMoney = event.target.parentNode.children[3].innerText;

````

## For delete any entire row on DOM as well as locally also
## array.splice(index,1);

````js

let studentData = JSON.parse(localStorage.getItem("admission")) || [];  // this is my data array

window.addEventListener("load",function() {
    displayFun(studentData);  // this is for seperate function for invoking when my page is loading
})

function displayFun(data) {

    let box = document.querySelector("tbody");
    box.innerHTML="";

    data.map( (elem, index) => {

        let tr = document.createElement("tr");

        let td7 = document.createElement("td");
        td7.innerText = "Reject";
        td7.style.backgroundColor = 'red';
    
        td7.addEventListener("click",function() {     // this is main example of remove function
            rejectFun(index);
        })

        function rejectFun(i) {

            studentData.splice(i,1);   // using SPLICE delete only that item
            localStorage.setItem("admission", JSON.stringify(studentData));  // then update on locally also
            displayFun(studentData);   // then call again display function for show changes on dom
        }

        tr.append(td1,td2,td3,td4,td5,td6,td7);  // this is line for append
        box.append(tr);  // append on dom


    })
}

````


## simple delete row example, not stored data on localstorage

````js

    var td7=document.createElement("td");
    td7.innerText="Delete";
    td7.addEventListener("click",deleteRow);

    // for delete function
    function deleteRow() {
        event.target.parentNode.remove(); 
    }

````
