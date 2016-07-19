---
layout: post
title: mdworks (#2) | CSS :target Pseudo-class [Encyclopedia Entry]
date: 2016-07-19
category: mdworks
tags: []
---

# CSS :target Pseudo-class 

*CSS  pseudo-class that applies CSS style when an element is targeted via a link*

Before exploring the :target pseudo-class we must understand inner links, and how use them. Basically, you can set an innerlink by setting an anchors(`<a>`) href to the ID or name of an element preceded by a hash tag(`<a href="#ELEMENT_ID"> ELEMENT </a>`. When the link is clicked, a *fragment identifier* that points to the linked element is appened the URI (`www.webpage.com/index.html#ELEMENT_ID`). The webpage then scrolls to the *targeted* element. This may seem confusing, but will be clear once you see a basic example: 

HTML:

		<a href="#article1"> Article 1 </a>

		<article id="#article1"> 
		<h1> THIS IS THE FIRST ARTICLE </h1>
		<p> This is filler content! </p>
		</article>


OUTPUT:

<a href="#article1"> Article 1 </a>

<br>
<br>
<br>
<br>
<br>

<article id="#article1"> 
<h1> THIS IS THE FIRST ARTICLE </h1>
<p> This is filler content! </p>
</article>

<hr>
So when you click the link to Article 1, the `article` element with the id *article1* is targeted and is appened to the end of the URI as the *fragment identifier* as such: 

http://btmbtm.github.io/blog/2016/07/19/mdworks-2-CSS-target-pseudo-class**#article1**

Now that you understand how a link can *target* any element on the same webpage, it is much easier to understand how the :target pseudo-class works. The :target pseudo-class simply allows us to style the *targeted* link. This is useful for highlighting linked content so the user understands what the link is refering to. Often this is powerful when webpage cannot properly to a link at the bottom of a page, or when scrolling may not by itself may not be enough to identify linked content. 


## Syntax

Here we will cover the basic syntax: 

Using class/id/element selectors with *:target*:

    #id:target{

    //:target specific styling

    }

    .class:target{
    
    //:target specific styling
    
    }

    element:target{

    //:target specific styling

    }


These styles are only applied when the element with the ID or class is *targeted* by a link.
	
The general :target selector:

		:target{
			
			//:target specific styling
			
		}

This is equivalent to: 

		*:target{
		
			//:target specific styling
			
		}
This selector styles any element *targeted* by a link. Next we will show a few examples using these various selectors. 



## Example 1: Using :target for Styling Specific Elements

Here we will use the :target element to highlight a targeted paragraph yellow. 

CSS:


		p:target{
			background-color: yellow;
		}


HTML:
		
		<ul>
			<li><a href="#p1">Paragraph 1</a></li>
			<li><a href="#p2">Paragraph 2</a></li>
			<li><a href="#p3">Paragraph 3</a></li>
		</ul>
	
		<p id="p1">YOU HAVE TARGETED PARAGRAPH 1</p>
		<p id="p2">YOU HAVE TARGETED PARAGRAPH 2</p>
		<p id="p3">YOU HAVE TARGETED PARAGRAPH 3</p>
		
OUTPUT: 
<style>
	p.ex1:target{
			background-color: yellow;
	}
	.exampleList{
	display: inline;
	}
</style>
<ul style="list-style:none; margin: 0; padding: 0">
	<li class="exampleList"><a  href="#p1a">Paragraph 1</a></li>
	<li class="exampleList"><a  href="#p2a">Paragraph 2</a></li>
	<li class="exampleList"><a  href="#p3a">Paragraph 3</a></li>
</ul>
<br>
<p class="ex1" id="p1a">YOU HAVE TARGETED PARAGRAPH 1</p>
<p class="ex1" id="p2a">YOU HAVE TARGETED PARAGRAPH 2</p>
<p class="ex1" id="p3a">YOU HAVE TARGETED PARAGRAPH 3</p>
<hr>

Click on the links above and see how the URI appends the ID of each paragraph and how the style is applied only to the selected paragraph. 

## Basic Example 2: Using :target for Styling Generally

Next we will test out the general :target selector that styles any element that is targeted. This time we will link to three different elements: an article, a header and a paragraph. This time we will use the general :target selector to add a red border to the element to show that it was linked to. 

CSS:


		:target{
			border: 2px solid red;
		}


HTML:
		
		<ul>
			<li><a href="#article1">ARTICLE 1</a></li>
			<li><a href="#header1">HEADER 1</a></li>
			<li><a href="#paragraph1">PARAGRAPH 1</a></li>
		</ul>
	
		
		<article id="article1">ARTICLE 1
			<h1 id="header1">HEADER 1</h1>
			<p id="paragraph1">PARAGRAPH 1</p>
		</article>
	
		
		
OUTPUT: 

<style>
	.ex2:target{
			border: 2px solid red;
	}
	.exampleList{
	display: inline;
	}
</style>
<ul style="list-style:none; margin: 0; padding: 0">
	<li class="exampleList"><a  href="#article1b">ARTICLE 1</a></li>
	<li class="exampleList"><a  href="#header1b">HEADER 1</a></li>
	<li class="exampleList"><a  href="#paragraph1b">PARAGRAPH 1</a></li>
</ul>
<br>
<article class="ex2" id="article1b">
	<h1 class="ex2"  id="header1b">HEADER 1</h1>
	<p class="ex2"  id="paragraph1b">PARAGRAPH 1</p>
</article>
<hr>

Note how the general :target selector is able to apply styling to *any* targeted link. Also notice how the style does not persist, but is only applied to the element currently targeted by the URI .

## Example 3 - Complex Use Case: Tabs

The :target pseudo class can also be used to cutely create tabs. Simply hide any elements you wish with the `display:none` property any only make them appear when targeted. In this example we will do that exactly by hiding any `article` elements by default, and making them appear only when selected. This gives the appearance of tabs, without any tricky Javascript. 

CSS:


		article{
			float: left;
			display: none;
		}

		article:target{
			display: block;
		}

HTML:
		
		<ul>
			<li><a href="#cats">ARTICLE 1</a></li>
			<li><a href="#dogs">HEADER 1</a></li>
			<li><a href="#fish">PARAGRAPH 1</a></li>
		</ul>
	
		
		<article id="cats">
		<h1>DOGS</h1>
		<p>DOGS ARE LOYAL!</p>
		</article>
		
		<article id="dogs">
			<h1>CATS</h1>
			<p>CATS ARE INDEPENDENT!</p>
		</article>
		
		<article id="fish">
			<h1>FISH</h1>
			<p>FISH SWIM IN WATER!</p>
		</article>


OUTPUT: 

<style>
	article.ex3{
		float: left;
		display: none;
	}
	article.ex3:target{
			display: block;
	}
	.exampleList{
	display: inline;
	}
</style>
<h1> PETS! </h1>
<ul style="list-style:none; margin: 0; padding: 0">
	<li class="exampleList"><a  href="#article1c">DOGS</a></li>
	<li class="exampleList"><a  href="#article2c">CATS</a></li>
	<li class="exampleList"><a  href="#article3c">FISH</a></li>
</ul>

<article class="ex3" id="article1c">
	<h1>DOGS</h1>
	<p>DOGS ARE LOYAL!</p>
</article>
<article class="ex3" id="article2c">
	<h1>CATS</h1>
	<p>CATS ARE INDEPENDENT!</p>
</article>
<article class="ex3" id="article3c">
	<h1>FISH</h1>
	<p>FISH SWIM IN WATER!</p>
</article>

<hr style="clear: both;">

Play around with the example above. With a bit of creativity the :target pseudo-class can do some magic with only a few lines of CSS! 

## Advanced examples

Here are some links to some some advanced :target use cases:

1. [Web Interface Design Tip: The Yellow Fade Technique: Using :target to highlight changes on a web page](https://signalvnoise.com/archives/000558.php)
2. [Create a CSS3 Lightbox using :target](http://tympanus.net/codrops/2011/12/26/css3-lightbox/)
3. [A simple image gallery using only CSS and the :target selector](https://hacks.mozilla.org/2012/02/a-simple-image-gallery-using-only-css-and-the-target-selector/)

## Special Notes

1. Using internal links affects a user's history, so make sure your use of the :taget element isn't just for styling purposes. For instance, if a user selects back after using various inner links, they will jump back to the inner links in reverse order. 

2. Remember the page will scroll when using inner links, so be careful!

3. You can combine selectors with :target, so it is possible to apply styles to none tageted elements when a certain element is selected. For example, if you wanted to highlight all paragraphs of an article yellow when the article element is targeted, you could use the  child selector as such: 

		article:target > p{
			background-color: yellow;
		}
		
## Browser Compatability

- Chrome 1.0+
- Firefox 1.0+
- IE 9+
- Opera 9.5+
- Safari 1.3+

## Links

1. References
	- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)
	- [W3](https://www.w3.org/TR/css3-selectors/#target-pseudo)
2. Selected Blog Posts
	- [design shack: What’s the Deal With :Target in CSS?](https://designshack.net/articles/css/targetcss/)
	- [codrops :target](http://tympanus.net/codrops/css_reference/target/)
