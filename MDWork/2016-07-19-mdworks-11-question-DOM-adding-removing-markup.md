---
layout: post
title: mdworks (#11) | DOM Adding or Removing Markup from the Document [Article]
date: 2016-07-19
category: mdworks
tags: []
---

** Explain the different ways of inserting or removing markup into and from the DOM (such as using the `innerHTML` property or the `appendChild` or `removeChild` methods). **

When working with the DOM and JS, there are a slew of ways to insert into and remove markup from an HTML document. In this article we will cover the various methods to remove (Node.removeChild()), insert(Node.appendChild() and Node.inerstBefore()), and some methods/properties that allow us to do both (Node.innerHTML, Node.textContent, node.replaceChild()). All these methods/properties are live and will update the DOM and web page dynamically, so any changes will appear virtually instantaneously. 

##Modfiy/remove text on a web page with the Node.textContent property

A simple way to modify a page is to change an elements inner text. This is via the DOM and JS using a node's textContent property. The workflow is as such: 

1. Grab the node you wish to modify the textConent of
2. Set the node textContent property to "" to remove the text, or any other text to update the element's inner text content

Let's do a quick example by changing an article's title via the Node.textContent property.

HTML(PRE JS):

<article>
  <<h1 id="title">EMPTY TITLE</h1>
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
</article>

HTML CODE:

```

<article>
  <<h1 id="title">EMPTY TITLE</h1>
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
</article>

```

JS: 

```

var title = document.getElementById("TITLE"); // grab the title node
title.textContent = "A GOOD TITLE"; // update the title

```

HTML(AFTER JS):

<article>
  <h1 id="TITLE">A GOOD TITLE</h1>
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
</article>

<hr>

With textContent is simple to change the inner text of an element. Note that this will replace any existing text, so be careful!


##Modify/remov markup on a web page with the Node.innerHTML property

A node's innerHTML property is similiar to a node's textContent property. The main difference is that the textContent is processed as plain text, while innerHTML is processed as HTML. This allows us to modify markup in a more sophisticated manner by inserting HTML directly as text. 

The workflow is virtually the same as using the textContent property:

1. Grab the node you wish to modify 
2. Set the node innerHTML property to "" to remove any inner HTML, or any other text to update the element's inner HTML content

Let's do a quick example. In this example we will use an article element innerHTML property to add a title:

HTML(PRE JS): 

<article id="ARTICLE1">
    EMPTY ARTICLE
</article>

HTML CODE:

```

<article id="ARTICLE1">
    EMPTY ARTICLE
</article>

```

JS: 

```

var title = document.getElementById("ARTICLE1"); // grab the title node
title.innerHTML = "<h1>A GOOD TITLE</h1>"; //insert title

```

OUTPUT(POST JS):

<article>
  <h1 id="TITLE">A GOOD TITLEE</h1>
</article>

<hr>

Note here how the "EMPTY ARTICLE" text is replaced by the new title. 

##Add an element to a web page with Node.appendChild(Node)

The previous two methods used strings to modify a page's markup. The next few examples will modify markup via insertion/removal of nodes. The first method we will examine is the Node.appendChild(Node) method. The syntax is as so: 

`ParentNode.appendChild(NodetoAdd)`

The workflow for adding a node with this method is as follows: 

1. Grab a node to be the parent node (ParentNode)
2. Create a node and it's content that you wish to add to the parent node (ChildNode)
3. Use ParentNode.appendChild(ChildNode) to add the childNode. 

Note that any node added using this method will be added as the last child. If you wish to add a node in another position, you can use the Node.insertBefore(Node) method which will be covered in the next section.

Now let's do a quick example. We will add the fourth item to a list using the workflow described above. 

HTML(PRE JS): 

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

HTML CODE:

```

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

```

JS: 

```

var shoppingList = document.getElementById("SHOPPINGLIST"); //grab list

var newListItem = document.createElement("LI"); //create new list item node
newListItem.textContent = "Milk"; //add list item node's text

shoppingList.appendChild(newListItem); //append new list item to list 

```

OUTPUT(POST JS):

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
  <li>Milk</li>
</ol>


<hr>

Note that the new item "Milk" is appended to the bottom of the list, and does not affect the other items. 

##Add an element to a web page with Node.insertBefore(Node, referenceNode)

Now in the previous example, imagine we wanted to add the item to the first item of the list. This is possible using the Node.insertBefore() method. This is almost the same as appendChild, except that we also need an already existing child node to insert the new node before. 

The syntax is as so:

`ParentNode.insertBefore(NodeToAdd, ReferenceNode)`

The workflow is is similiar to appendChild, except we now have to grab a reference node: 

1. Grab a node to be the parent node (ParentNode)
2. Grab a nobe to be the reference node (ReferenceNode)
2. Create a node and it's content that you wish to add to the parent node (ChildNode)
3. Use ParentNode.insertBefore(ChildNode, ReferenceNode) to add the ChildNode before ReferenceNode.

Now let's do a quick example. We will add an item to the front of list using the workflow described above. 

HTML(PRE JS): 

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

HTML CODE:

```

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

```

JS: 

```

var shoppingList = document.getElementById("SHOPPINGLIST"); //grab list

var firstItem = shoppingList.firstChild;

var newListItem = document.createElement("LI"); //create new list item node
newListItem.textContent = "Milk"; //add list item node's text

shoppingList.insertBefore(newListItem, firstListItem);; //append new list item to list before first item

```

OUTPUT(POST JS):

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Milk</li>
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>


<hr>

Note that the new item "Milk" is appended to the front of the list, and other items now have to adjust their positioning. 

##Replace an element on a web page with another using Node.replaceChild(NodeToAdd, NodeToReplace)

It is also easy to replace a node using Node.replaceChild() method. The syntax is as so:

`ParentNode.replaceChild(NodeToAdd, NodeToReplace)`

The workflow is straightforward and similar to insertBefore: 

1. Grab a node to be the parent node (ParentNode)
2. Grab a child node of ParentNode to be replace(NodeToReplace)
2. Create a node and it's content that you wish to add to the parent node (NodeToAdd)
3. Use ParentNode.replaceChild(NodeToAdd, NodeToReplace) to replace the NodeToReplace with NodeToAdd.

Let's use the previous example and replace Apples with Oranges on the shopping list: 

HTML(PRE JS): 

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

HTML CODE:

```

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

```

JS: 

```

var shoppingList = document.getElementById("SHOPPINGLIST"); //grab list

var nodeToReplace = shoppingList.firstChild;

var nodeToAdd = document.createElement("LI"); //create new list item node
nodeToAdd.textContent = "Orange"; //add list item node's text

shoppingList.replaceChild(nodeToAdd, nodeToReplace); //replace apples w/ oranges!

```

OUTPUT(POST JS):

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Oranges</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

<hr>

Note that the new item "Oranges" has replaced "Apples" on the list. Also note that if you use a node already on the DOM, it will be removed from its original position. 

Also note that the replaceChild method return's the replacedChild.

So if we could have stored the apple replaced node in our example as so: 

```

var appleNode = shoppingList.replaceChild(nodeToAdd, nodeToReplace); 
console.log(appleNode); //"<li>Apples</li>"

```

##Removing an element on a web page with Node.removeChild(Node)

Finally, we'll look at how to remove an element using Node.removeChild(). 

The syntax is as so: 

`ParentNode.removeChild(NodetoRemove)`

The workflow is straightforward:

1. Grab the parent node of the child you want to remove (ParentNode)
2. Grab the node you want to remove (NodeToRemove)
3. Use ParentNode.removeChild(NodetoRemove) to remove NodeToRemove

Let's use the previous example and remove the meat, Pork, from the list: 

HTML(PRE JS): 

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

HTML CODE:

```

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Pork</li>
  <li>Lettuce</li>
</ol>

```

JS: 

```

var shoppingList = document.getElementById("SHOPPINGLIST"); //grab list

var nodeToRemove = shoppingList.children[1]; //grab pork for the second child

shoppingList.removeChild(nodeToRemove); //replace apples w/ oranges!

```

OUTPUT(POST JS):

<h3>Shopping List</h3>
<ol id="SHOPPINGLIST">
  <li>Apples</li>
  <li>Lettuce</li>
</ol>

<hr>

As you can see removing a child is straightforward.

Also note that the removeChild() method return's the removedChild.

So if we could have stored the removed node in our example as so: 

```

var porkNode = shoppingList.removeChild(nodeToRemove); 
console.log(porkNode); //"<li>Pork</li>"

```



Hopefully you can now see that dynamically manipulating the DOM with JS is rather simple. You should now be able to use the following properties and methods to modify your web page in JS: 

Node.textConent
Node.innerHTML
ParentNode.appendChild(NodetoAdd)
ParentNode.insertBefore(NodetoAdd, ReferenceNode) 
ParentNode.replaceChild(NodetoAdd, NodetoReplace)
ParentNode.removeChild(NodetoRemove)

All these properties and methods are supported by all major browers (even older IE browsers!).

Hopefully this article gave you some insights. Thank you for reading, and good luck on the rest of your CSS/HTML/JS journey!

Brian Merriman | Web Developer | 2016