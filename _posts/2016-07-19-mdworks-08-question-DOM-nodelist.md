---
layout: post
title: mdworks (#08) | DOM NodeList [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Explain what a NodeList is and describe examples of NodeLists that can be accessed directly on the document object (like images, forms, and anchors for example)..**

A NodeList is a list of DOM node elements. A NodeList has a length property, and a single method NodeList.item(index), which returns a node at a given index. The nodes can also be accessed via brack notation. However, while similar, a NodeList is not an array, and cannot be accessed via array functions like an array ( via forEach, map) or use array methods(sort, slice). 

NodeLists are available via the DOM to access a documents elements. There are several common NodeLists that can be acceseed directly via the `document` object: 

    - doument.images[] (NodeList of all img nodes)
    - document.forms[] (NodeList of all form nodes)
    - document.forms.elements[] (NodeList of all of a form's elements)
    - document.links[] (NodeList of all links <a href>)
    - document.anchors[] (NodeList of all anchors <a name>)
    - document.embeds[] (NodeList of all embedded elements)
    - document.scripts[] (NodeList of all scripts)

The items are added to the list in the same order they are seen on the page. So the first link on a page will be accessable via document.links[0]. 

Let's look at a quick example. We'll create a page with a few links and then access them using the document.links NodeList. 

HTML:

    <body>
        <a href="google.com">google</a>
        <a href="yahoo.com">yahoo</a>
        <a href="yandex.com">yandex</a>
        <a href="baidu.com">baidu</a>
    </body>

JS:

    console.log(document.links[0]); //"<a href='google.com'>google</a>"
    console.log(document.links[1]); //"<a href='yahoo.com'>yahoo</a>"
    console.log(document.links[2]); //"<a href='yandex.com'>yandex</a>"
    console.log(document.links[3]); //"<a href='baidu.com'>baidu</a>"

So the first link, google.com is the first element in the links' NodeList. The 4th link, baidu.com, is the the 4th element in the NodeList(and accessible via document.links[3]). 

Besides document's default NodeLists, NodeLists are also created when using the Node.childNodes(),  document.querySelectorAll() methods. 


