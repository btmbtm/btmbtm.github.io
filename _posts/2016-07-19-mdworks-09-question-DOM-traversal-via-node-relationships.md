---
layout: post
title: mdworks (#09) | DOM Traversal via Node Relationships [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**If you have access to a node object, you can traverse the DOM and access other node objects related to the node object using properties `nextSibling`, `parent`, and many others. Explain how this process works using code samples and illustrations demonstrate how it works.**


A DOM node element is not a floating object, but an object with relationships to other nodes. A node can relate to different nodes in three basic ways: a parent to a node, be a child of a node, or be a sibling of a node. We can take advantage of these relationships when transversing the DOM in our JS code. 

## Move Up the DOM: Get Node's parent with Node.parentNode property 

For example if we wanted to access the parent node of an object, we can use the Node.parentNode property. Here is a quick example, where we grab the parent of an article_title to add content to the article. 

HTML:

```
<article class="baseball_sports_article">
    <h1 class="article_title">BIG GAME TODAY</h1>
</article>
```

JS: 

```
var article_title = document.getElementsByClassName("article_title");
var article = article_title[0].parentElement; //grab the parent of the h1 element
var content = document.createElement("P");
content.textContent = "THE YANKEES PLAY DA SOX!";
article.appendChild(content);
```

OUTPUT:

<article class="baseball_sports_article">
    <h1 class="article_title">BIG GAME TODAY</h1>
  <p> THE YANKEES PLAY DA SOX! </p>
</article>

<hr>

Now you should be able to see how easy it is to access a parent node. 

## Move Down the DOM: Get Node's child with ParentNode.firstChild, ParentNode.lastChild, and ParentNode.children[] properties

Getting a child node is as simple as using one of the three properties: 

1. **ParentNode.firstChild**: the first child node of a ParentNode
2. **ParentNode.lastChild**: the last child of a ParentNode
3. **ParentNode.children**: an HTML node collection of the children of a ParentNode in order from firstChild to lastChild


Let's use the firstChild property to change the title of the article in the last example (we will ignore text nodes): 

HTML:

```
<article class="baseball_sports_article">
    <h1 class="article_title">BIG GAME TODAY</h1>
</article>
```

JS: 

```
var article = document.getElementsByClassName("baseball_sports_article");
article[0].firstChild.innerHTML = "YANKS LOSE!"
```

OUTPUT:

<article class="baseball_sports_article"><h1 class="article_title">YANKS LOSE!</h1>
</article>

<hr>

Using ParentNode.firstChild it is simple to access a node's child. 

Let's play with ParentNode.children next to show how to access non-first or non-last children. Well use the previous examples, but add some content:

HTML: 

```
<article class="baseball_sports_article">
  <h1 class="article_title">BIG GAME TODAY</h1>
  <p>Yanks play da Sox at 8 pm.</p>
  <!-- CHANGE THE STATION THE GAME IS ON -->
  <p>Game is on ESPN.</p> 
  <p>Big Papi vs Tanaka!</p>
</article>

```

Now imagine we want to change the the station the game is on. We can access the paragraph node via the article using the children property:

JS: 

```
var article = document.getElementsByClassName("baseball_sports_article");
article[0].children[1].textContent = "Game is on FOX!"
```

OUTPUT:

<article class="baseball_sports_article">
  <h1 class="article_title">BIG GAME TODAY</h1>
  <p>Yanks play da Sox at 8 pm.</p>
  <!-- CHANGE THE STATION THE GAME IS ON -->
  <p>Game is on FOX.</p> 
  <p>Big Papi vs Tanaka!</p>
</article>


## Move Left/Right on the DOM: Get a Node's Sibling with Node.nextSibling and Node.previousSibling


left/right
previousSibling
nextSibling

no value -> null

Note that the parent node is live, so any modifcations will affect the HTML document immediately. 