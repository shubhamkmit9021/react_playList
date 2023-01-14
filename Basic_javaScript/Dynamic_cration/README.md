

# for button creation and styling

````js

var btn  = document.createElement('button');

btn2.setAttribute("id","mybtn2");    // for set ID
  
btn.innerText = "Click Me";

btn.style.color='red';
btn.style.fontSize='22px';
btn.style.borderRadius='10px';
btn.style.padding="6px";


document.querySelector("body").append(btn);    // for append

````

# for table row create and display below of headings

````js

var tr = document.createElement('tr');

var td1 = document.createElement('td');
td1.innerText = 'Write Data';

var td2 = document.createElement('td');
td2.innerText = 'Write Data';

tr.append(td1,td2);
document.querySelector('tbody').append(tr);

````

# for delete Row create and implement function

````js

var td3 = document.createElement('td');
td3.innerText = 'Delete';
td3.addEventListener('click',deleteFun);

function deleteFun() {
    event.target.parentNode.remove();
}

````




