---
layout: post
title: mdworks (#07) | Document Object Model (DOM) [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Describe what the DOM is and explain its function.**

The DOM or Document Object Model is an interface for respresenting, accessing and modifying a document's structure and content. A document is represented in a tree like structure populated by *node* objects which represents elements in the document. These nodes also contain information about the elements properties and values, along with the nodes inner content. 

For example, imagine we had a webpage as so: 

```
<!DOCTYPE html>
<html>
<body>
    <article>
        <h1>THE DOM</h1>
        <p>Intro para</p>
        <p>Mid para</p>
        <p>Final para</p>
    </article>
</body>
</html>
```

The basic DOM tree represention would be as so: 

TEXT:

```
DOCTYPE: html
HTML
    HEAD
    BODY
        ARTICLE
            H1
            #text: THE DOM
            P
            #text: Intro para
            P
            #text: Mid para
            P
            #text: Final para
```

IMAGE:

![DOM](https://raw.githubusercontent.com/btmbtm/btmbtm.github.io/master/images/DOM.png)

<hr>

While the DOM is language agnostic, Javascript is commonly used with the DOM to access and modify a webpage's HTML elements. A HTML page's elements are usually accessed via the DOM's `document`. The `document` element is the represention of the entire page and contains all other elemetns on the page. In JS via the `document` object we can access, insert, remove and modify elements on the webpage to modify painlessly. Any changes made to DOM are instantaneous, and are immediately rendered on the HTML page. The DOM also defines how nodes can be interacted with (ie HTML events). 

Brian Merriman | Web Developer | 2016
