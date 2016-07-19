---
layout: post
title: mdworks (#07) | Document Object Model (DOM) [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Describe what the DOM is and explain its function.**

The DOM or Document Object Model is an API for respresenting, accessing and modifying a document's structure and content. Structure is represented by *node* object which represents elements in the document. These nodes also contain information about the elements properties and values, along with the nodes content. The DOM also defines how nodes can be interacted with (ie HTML events). 

While the DOM is language agnostic, Javascript is commonly used with the DOM to access and modify a webpage's HTML elements. A HTML page's elements are usually accessed via the DOM's `document` and `window` objects. For example, if you wished to access an HTML document's paragraph tags, you can 