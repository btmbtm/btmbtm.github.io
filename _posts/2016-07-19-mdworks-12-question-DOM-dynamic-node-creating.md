---
layout: post
title: mdworks (#12) | DOM Creating Nodes Dynamically [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Explain how to dynamically create DOM nodes and demonstrate with examples.**

Creating node's dynamically in JS is possible via the document.createElement(tagName) method. For example, to create a paragraph element (<p> tag), we would simply use the following code: 

`var para = document.createElement('P')`

Note that we don't include the '<' or '>' part of the tag. Just the tag name as a string. 

Now that the node is created, we can treat it like any other node and modify it's properties and contents, and append it or append other nodes it etc etc. 

The basic workflow for dynamically creating nodes is as follows: 

1. Create the node using document.createElement
2. Set properties and add content to node
3. Add any required nodes to the newly created node
4. Append it to another node in the document (now it will become visibile on the page)

So imagine we had the following list: 

HTML:

    <ul id="books">
        <li>Great Expectations</li>
        <li>To Kill a Mockingbird</li>
        <li>The Illiad</li>
    </ul>

Output: 

If we want to dynamically add 'The Lord of the Rings' to the list we can use the basic workflow as noted before as so: 

JS:

    var lOTR = document.createElement('LI'); //create list item
    lOTR.textContent = "Lord of the Rings"; // add content to list item
    var books = document.getElementById('books'); //retrive book list node via ID
    books.appendChild(lOTR); //add new book to end of list


The final results is as so: 

<p data-height="265" data-theme-id="0" data-slug-hash="WxrWax" data-default-tab="js,result" data-user="btmbtm" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/btmbtm/pen/WxrWax/">Dynamically Add LI to UL</a> by btmbtm (<a href="http://codepen.io/btmbtm">@btmbtm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

With this basic workflow, you can create powerful interactive pages. 

