---
layout: post
title: mdworks (#09) | DOM Traversal via Node Relationships [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**If you have access to a node object, you can traverse the DOM and access other node objects related to the node object using properties `nextSibling`, `parent`, and many others. Explain how this process works using code samples and illustrations demonstrate how it works.**


A DOM node element is not a floating object, but an object with important relationships to other nodes. A node can relate to different nodes in three basic ways: a parent to a node, be a child of a node, or be a sibling of a node.

We can take advantage of these relationships when transversing the DOM in our JS code. 

up 
parentNode
Node.parentNode() 

<article>
    <h1 class="article_title"></h1>
</article>

var article_title = document.getElementByClassName("article_title");
var article = article_title.parentNode();
var content = document.createElement();

down
firstChild
lastChild
childNodes 

left/right
previousSibling
nextSibling

no value -> null