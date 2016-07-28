---
layout: post
title: mdworks (#10) | Accessing DOM Nodes [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Describe and demonstrate the different methods that can be used to access a specific DOM node or a collection of nodes.**

There are a variety of methods to access a DOM node or a group of DOM nodes directly. 

## Single Node Access

1. document.getElementByID(ID)

    This method returns the Node of the element with the given ID. If there is no matching element, `null` is returned. 
    
    So, if we wanted to access a `ul` element with the id `names`, we would simply use the following code: 
        
    `var names =  document.getElementByID('names');`

2. document.querySelector(CSS)
    
    This method returns the node of the first element matching CSS selector. If there is no matching element, `null` is returned.

    So if we wanted the node of the first element with the class name '.title', we would simply use the following code: 

    `var title = document.querySelector('title')`

## Accessing a Collection of Nodes 

1. document.getElementsByTagName(HTML tag)

    This method returns a node list of all elements with the given tag. If there are no matching elements, `null` is returned. 

    So if we wished to access all the paragraph elements on a page, we could simply use the following code: 

    `var paragraphs = document.getElementsByTagName('p');`

2. document.getElementsByClassName(class)

    This method returns a node list of all elements with a given class name. If there are no matching elements, `null` is returned. 

    So if we wished to access add elements with a class name of 'chart', we could simply use the following code: 

    `var charts = document.getElementsByClassName('chart');`    

3. document.querySelectorAll(CSS)
    
    This method returns a node list of all elements that match the given CSS selector. If there are no matching elements, `null` is returned. 

    For example, if we wanted to access the all the list elements of the list with an ID of 'names', we could use the following code: 

    HTML: 

                <ul id="names">
                    <li>Bob</li>
                    <li>Jim</li>
                    <li>Kate</li>
                </ul>


    JS:

    `var names = document.querySelectorAll('#names li')`

These 5 methods allow programmers to easily access an document's Nodes and are powreful for manipulating web pages with JS. 

Brian Merriman | Web Developer | 2016