---
layout: post
title: mdworks (#3) | CSS Box Model [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Explain in detail what the CSS Box Model is.**

HTML block elements are placed as rectangles on a page. The CSS Box Model is used to calculate the size of an element rectangle and its position relative to other elements. 

The CSS box model takes into account the size of an element's content, padding, border, and margin when calculating its size. 

![box model](https://mdn.mozillademos.org/files/8685/boxmodel-(3).png)
(Image from MDN)

An element's *content* is simply the space an element such as text or a picture requires. 

An element's **padding** is the space between an object's content and its border. By default padding is 0 but can be changed by setting an element's CSS padding property. 

An element's *border* surround and element's content and padding. By default there is no border, but it can be changed by setting an element's CSS border property. 

An element's *margin* is the space that separates an element and its content, padding, and border from other elements. By default an element's margin is 0, and can be changed via an element's CSS margin property. 
