---
layout: post
title: mdworks (#11) | DOM Adding or Removing Markup from the Document [Article]
date: 2016-07-19
category: mdworks
tags: []
---

** Explain the different ways of inserting or removing markup into and from the DOM (such as using the `innerHTML` property or the `appendChild` or `removeChild` methods). **

When working with the DOM and JS, there are a slew of ways to insert into and remove markup from an HTML document. In this article we will cover the various methods to remove (Node.removeChild()), insert(Node.appendChild() and Node.inerstBefore()), and some methods that allow us to do both (Node.innerHTML, node.replaceChild()).


    Node.innerHTML = ""
    Node.appendChild(Node)
    Node.removeChild(Node)
    Node.insertBefore(Node, referenceNode) 
    Node.replaceChild(add, replaceNode)