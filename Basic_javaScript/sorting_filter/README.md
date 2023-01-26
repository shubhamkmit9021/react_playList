

## Select tag example

````html

<select id="sortNames" onchange="handleNameSort()">
    <option value="">Sort by Names</option>
    <option value="ascending">Ascending</option>
    <option value="descending">Descending</option>
</select>

<select id="sortSalary" onchange="handleSalarySort()">
    <option value="">Sort by Salary</option>
    <option value="htl">High to Low</option>
    <option value="lth">Low to High</option>
</select>

<select id="filterRole" onchange="handleRoleFilter()">
    <option value="">Filter by Role</option>
    <option value="all">All</option>
    <option value="FSD">FSD</option>
    <option value="Frontend">Frontend</option>
    <option value="Backend">Backend</option>
</select>

````

````js

    var allAppliedJobs = JSON.parse(localStorage.getItem("jobList")) || [];  // this is simple array

    function handleNameSort() {

      let selected = document.querySelector("#sortNames").value;

      if(selected === "ascending") {
        allAppliedJobs.sort( (a,b) => {
           if(a.name > b.name) return 1;
           if(a.name < b.name) return -1;
           return 0;
        })
      }

      else if (selected === "descending") {
          allAppliedJobs.sort( (a,b) => {
              if(a.name < b.name) return 1;
              if(a.name > b.name) return -1;
              return 0;
          })

      }

      displayFun(allAppliedJobs);

    }

    function handleSalarySort() {

      let selected = document.querySelector("#sortSalary").value;

      if(selected === "htl") {
        allAppliedJobs.sort( (a,b) => {
          return b.salary-a.salary;
        })
      }

      else if(selected === "lth") {
        allAppliedJobs.sort( (a,b) => {
          return a.salary-b.salary;
        })
      }
      displayFun(allAppliedJobs);
    
    }

  function handleRoleFilter() {

    let selected = document.querySelector("#filterRole").value;

    let filterData = allAppliedJobs.filter( (elem) => {

    if(selected === "all" || selected === "" ) {
        return true;
    }
    else {
        return elem.role === selected
    }
    })
    displayFun(filterData);
    
  }

````

## Another Example of filter function using addEventListener

````html
  
  <select id="filter">
    <option value="">Select Priority</option>
    <option value="All">All</option>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
  </select>

````

````js

var storedData=JSON.parse(localStorage.getItem("task-list")) || [];  // this is simple array
// for filter

document.querySelector("#filter").addEventListener("change", filterData);  // here we use only change instead of onchange

function filterData() {
    var selected=document.querySelector("#filter").value;
    console.log(selected);
    var filteredList=storedData.filter(function(elem)
    {
        if( selected === "" || selected === "All")
            return true;
        else
            return selected===elem.priority;
    });
    displayData(filteredList);
}

````


