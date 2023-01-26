

# Form Tag Example

````html

<form>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="Shubham"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Kumar"><br><br>
    <input type="submit" value="Submit">
</form> 

````

# Input Element Example

## Type	Description

````html

<input type="text">	Displays a single-line text input field
<input type="radio">	Displays a radio button (for selecting one of many choices)
<input type="checkbox">	Displays a checkbox (for selecting zero or more of many choices)
<input type="submit">	Displays a submit button (for submitting the form)
<input type="button">	Displays a clickable button

````

### Radio Button Example

````html

 <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>

````

### Checkboxes example

````html

<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> I have a bike</label><br>

````

# All Html input Types

````html

<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">

````

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

