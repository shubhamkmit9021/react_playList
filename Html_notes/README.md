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

