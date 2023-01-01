### for  bootstrap link

- in index.html
- bootstrap file source code linked in both like using link tag inside head tag and inside script tag


### for change icon inside title

- using favIcon 
- inside head tag link this image source

```` 
    <link rel="icon" type="image/x-icon" href="./images/google.png">

````

### example of this

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <link rel="icon" type="image/x-icon" href="./images/google.png">
</head>
<body>
    
</body>
</html>

```

### for adding background image

- use background-image: url();

   ````
    <style>
     body {
        background-image: url('image link here');
      }
   </style>

   ````

### for change background color or any style dynamically in html

- simple example given below

````
<div id="box" onmousehover="fun1()" onmouseout="fun2()" > </div>

<script>

    function fun1() {
        var page1 = document.querySelector("#box");
        page1.style.backgroundColor='red';
    }

    function fun2() {
        var page2 = document.querySelector("#box");
        page2.style.backgroundColor='white';
    }

</script>

````

### for non breaking space in html

-use this dircetly

````
  &nbsp;

````

### marquee tag stop and start behavior

````

<marquee behavior="scroll" direction="right" onmouseover="this.stop()" onmouseout="this.start()">

````

### HTML Images

## for simple image only

````

<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

````

## Image Maps

- With HTML image maps, you can create clickable areas on an image.

````

<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>


````

## HTML <picture> Element

- The HTML <picture> element allows you to display different pictures for different devices or screen sizes.

````

<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>

````


### List

## HTML Description Lists

- A description list is a list of terms, with a description of each term.

````

<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>

````


