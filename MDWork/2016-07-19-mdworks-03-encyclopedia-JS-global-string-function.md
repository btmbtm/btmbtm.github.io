---
layout: post
title: mdworks (#03) | JavaScript Global <em>String()</em> Function [Encyclopedia Entry]
date: 2016-07-19
category: mdworks
tags: []
---

*the global String() function converts ojbects and primatives into string literals*

The global String() function is used to convert object and primatives into String literals (not String objects). Since String() is a built-in global function it can be used anywhere within a script. 

## Syntax

The basic sytax for String() is as so: 

```
String(Object/primative/variable)
```

It is commonly used when declaring and initializing a variable as so: 

```
var string1 = String(object/literal/variable)
```

## Example 1: String() Conversion Omnibus

Here we will look at basic uses of String() and outputs.

JavaScript:

```
// Various Literals
console.log(String(true)) //"true"
console.log(String(1234)) //"1234"
console.log(String("test")) //"test"

// Built-in Objects/Functions/Constants
console.log(String(new Date())) //"Sun Jul 17 2016 03:36:56 GMT-0400 (Eastern Daylight Time)";
console.log(String([1,2,3,4]))//"1,2,3,4";
console.log(String(Math.PI))//"3.141592653589793"
console.log(String(String))//"function )String() { [native code] }";

//Objects
var person = {
	name: "Brian",
	age: 28
};

console.log(String(person));//[object Object] 
```
<hr>

String() returns expected values. However for custom objects, it returns `[object Object]`. We will show how to return a more meaningful string by overiding Object.prototype.toString() in [Example 4](#Example4), so be patient. 

## Example 2: String() Conversion: Comparing toString(), + '', and String() when handling `null` and `undefined`

In the following example, you will see how `Object.toString` and `String()` and it's partner  `+ ''` differ.

```
console.log(String(null)) // "null"
console.log(null+"") // "null"
console.log(null.toString()) // TypeError: Cannot read property 'toString' of null

console.log(String(undefined)) // "undefined"
console.log(undefined+"") // "undefined"
console.log(undefined.toString()) // TypeError: Cannot read property 'toString' of undefined
```
<hr>
When dealing with `null` and `undefined` String() and `+ ''` 
will convert them into a string literal, while .toString() will throw an error. In these cases the use of String() will depend on how you want to handle dealing with `null` and `undefined`.

## Example 3: Prove String() Creates a String literal, not String object.

Here we will compare `new String()` to `String()`. The main difference is that `new String()` creates a String object and and String literal. This causes some issues when doing tight comparison. See the example below.

JS:

```
var a1 = String("a");
var a2 = new String("a");

console.log(typeof a1); //"string"
console.log(typeof a2); //"object"

//loose comparison
console.log(a1==a2); //true

//tight comparison with Object
console.log(a1===a2); //false

//tight comparison with another String literal
console.log(a1===a3); //true 
```
<hr>
As you can see, when comparing a1 to a2 using the `===`, `false` is returned. This is because a1 is a STRING LITERAL while a2 is a STRING OBJECT. They are of different types and are not referring to the same object (which is key when tightly comparing objects), so the comparison can not be true. However when losely comparing with `==`, `true` is returned. 

Best practice here is to avoid using the `new String()` constructor and stick to methods that create String *literals* (String()).


<a id="Example4"></a>

## Example 4: The Global String() Function and Object.prototype.toString()

By default when using String() on an object, it returns the meaningless  `[object Object]`. We can solve this by overriding the default toString() function all Objects inherit. To do this simply set the Object's prototype function toString() to a function that returns a string. By doing this, whenever you use the global String() function on any object of the type, it will call the objects toString() function. Check the example below for further understanding.

JS:

```
//Create Person Object
function Person(name, age){
	this.name = name;
	this.age = age;
}

//Set Person.prototype.toString function
Person.prototype.toString = function(){
	return (this.name + ", " + this.age);
}

//Create a new Person
var person1 = new Person("Bob", 36);

//Test String() with person1()
console.log(String(person1)); //"Bob, 36"
```

As you can see, String() returns meaningful output after creating the toString prototype! 

## Summary Notes


1. String(obj/literal/var) converts input to string literal. It is a global function that can be accessed anywhere.
2. String() is explicit and is of great use for creating clean and clear code!
3. String() can handle converting null and undefined to string (unlike toString()).
4. String() will produce the same output as using string concatenation `+ ''`

## Resources

Reference: 

1. [w3schools: JavaScript String() Function](http://www.w3schools.com/jsref/jsref_string.asp)
2. [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

Blog Posts:

1. [2ality: Converting a value to string in JavaScrip](http://www.2ality.com/2012/03/converting-to-string.html)
