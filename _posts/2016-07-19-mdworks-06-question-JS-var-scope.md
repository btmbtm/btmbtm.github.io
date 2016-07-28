---
layout: post
title: mdworks (#06) | JavaScript variable scope [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Describe what variable scope is and use examples to demonstrate the differences between local and global scope.**

In JS, a variable can be either local or global in scope. Variables declared with the `var` are only accessible within the *function* they are declared in (this is often confusing to programmers coming from languages where scope is defined by block). Global variables are any variable declared in the main body of a script, while a local function is any variable declared within a function(with the `var` keyword). Also note, that any variable declared without the `var` keyword, regardless of where it is declared, is automatically a global variable and accessible from anywhere within a script, so be careful! Let's see scope in action with some simple examples: 

1. A local variable declared within a function, attempted access outside of the function

Here we will create a function that returns the square of a number. The inner function will have a local variable, sqr, that will hold the value of the squared function. Let's see what happens when we try to access the sqr variable outside of the function: 

JS:

```
var getSqr = function(x){
  var sqr = x * x; //LOCAL VARIABLE
  return sqr;
}

var a = 5; 
var aSquared = getSqr(5);
console.log(aSquared) // 25
console.log(sqr); // undefined
```

As you can see, the variable sqr is *undefined* outside, because it is local to the getSqr function and cannot be accessed outside of its local scope. 

2. A global variable created within a function, accessed outside of the function

Now we will use the previous example, except declare the variable without the `var` keyword, making it global. 

```
var getSqr = function(x){
  sqr = x * x; //LOCAL VARIABLE
  return sqr;
}

var a = 5; 
var aSquared = getSqr(5);
console.log(aSquared) // 25
console.log(sqr); // 25
```

As you can see, the variable sqr is now accessible outside of scope it was created it because it did not use the `var` keyword. This sort of practice is dangerous as it becomes hard to track the value of sqr. 

3. A global variable created outside a function, accssedd within a function 

In this example, we will create a function to calculate the area of a circle from a given radius. Here we will create a global variable PI in the main body of the script and access it from within the function: 

```
var PI = Math.PI

function getCrcArea(r){
    return PI * r * r
}

console.log(getCrcArea(3)); //28.274333882308138
```

Since PI is created within the body of the script, it is global and accessible within the getCrcArea function.

These three examples cover the basics of variable scope in Javascript. It is best to avoid creating uncessary global variables and use local variables declared with `var` whenever possible.

Brian Merriman | Web Developer | 2016