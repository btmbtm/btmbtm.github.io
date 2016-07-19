---
layout: post
title: mdworks (#04) | JavaScript variable scope [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Describe what variable scope is and use examples to demonstrate the differences between local and global scope.**

The `delete` keyword is used to remove properties from objects in JS.  

The syntax is as so: 

`delete obj.property`

or

`delete obj[property]`

If *a property* can be deleted `true` will return (this means that even if the property does not exist, `true` will return). If the property cannot be deleted, `false` will return. 

Here is a quick example: 

```
var person = {
  name: "Brian",
  loc: "NY",
  age: 28
}

console.log(person.loc) // "NY"
delete person.loc
console.log(person.loc) // undefined

```

After deleting the *loc* property, it becomes *undefined*. *Delete* successful! 

For a thorough examination of the `delete` keyword in JS, checkout [Perfection Kills: Understanding delete](http://perfectionkills.com/understanding-delete/).

References: 

1. [MDN: delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
