---
layout: post
title: mdworks (#05) | CSS Box Model [Question]
date: 2016-07-19
category: mdworks
tags: []
---

**Explain in detail what the CSS Box Model is.**

HTML block elements are placed as rectangles on a page. The CSS Box Model is used to calculate the size of an element rectangle and its position relative to other elements. 

The CSS box model takes into account the size of an element's content, padding, border, and margin when calculating its size. The picture below shows how the parts of the CSS box model relate: 

![box model](https://mdn.mozillademos.org/files/8685/boxmodel-(3).png)
(Image from MDN)



An element's *content* is simply the space an element such as text or a picture takes up. It can also be modified by setting an element's width and height. 

An element's *padding is the space between an object's content and its border. By default padding is 0 but can be changed by setting an element's CSS padding property. An elements top/bottom, left/right padding can be set individually.

An element's *border* surround and element's content and padding. By default there is no border, but it can be changed by setting an element's CSS border property. An elements top/bottom, left/right border can be set individually.

An element's *margin* is the space that separates an element and its content, padding, and border from other elements. By default an element's margin is 0, and can be changed via an element's CSS margin property. An elements top/bottom, left/right margin can be set individually.

By default, an element's size is calculated by summing the size of the element's content, padding, border and margin. This means that setting the width, and height of an element only affects the size of its content. So an element with a width of 300px and a border of 50px, will be 400px wide.

However, if you set an element's CSS box-sizing property to border-box, an element's width and height include the content, padding, border, and margin. When using border-box calculations, the size of the element's content is shrunk to include any added padding, border, or margin. For instance, if an element is 300px wide, by default there is only content and the element's width and content match. If the element's box-sizing element was set to border-box, and we add a 50px margin, the content will shrink to 200px, and the margin will take up 50px on each side.




