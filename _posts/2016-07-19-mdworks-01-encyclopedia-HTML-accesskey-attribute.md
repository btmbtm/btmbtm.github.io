---
layout: post
title: mdworks (#01) | HTML global <em>accesskey</em> attribute [Encyclopedia Entry]
date: 2016-07-19
category: mdworks
tags: []
---

*the accesskey attribute generates keyboard shortcuts for HTML elements*

The global HTML accesskey attribute generates keyborad shortcuts that focuses or activates elements on a webpage. It saves users time by allowing them to access elements directly instead of via tabbing or mouse clicking and provides accessibility to users who have issues with using the mouse. It is commonly applied to form control elements and links. Elements with a defined accesskey can be accessed via pressing the defined character and broswer/OS specific shortcut.

## Syntax

The basic sytax for accesskey is as so: 

```
<element accesskey="character">
```

*character* can be any single character. Letters, numbers, and symbols are all valid. Please note that some browsers may be case sensitive. 

## Use

*accesskey* shortcuts to access an element vary from browser to broswer:

1. On most Windows browsers, `SHIFT` + `ALT` + `[accesskey character]` will do the trick. Some broswers do not require shift, so  `ALT` + `[accesskey character]` is also valid.
2. On most Mac browsers, `control` + `option` + `[accesskey character]` will do the trick.

Try focusing on the input field below using the access key combo and J to jump to the input field:

<label> TRY JUMPING HERE &#x2192; </label><input accesskey="j" placeholder="Jump here with J!"/>


## Example 1: Set an Access Key for a Link

Here we will show how to use accesskey to access and activate a link. Activating means the webpage will go to the link as if the user had clicked the link. Since the link will point to Wikipedia we will set the accesskey to `w`. We will also put `w` in brackets after the link to indicate the accesskey shortcut.

HTML: 

```
<a href="https://en.wikipedia.org/wiki/Main_Page" accesskey="w">English Wikipedia</a> [w]
```

OUTPUT:

<a href="https://en.wikipedia.org/wiki/Main_Page" accesskey="w">English Wikipedia</a> [w]

<hr> 

Try jumping to Wikipedia using the `w` accesskey. Please come back using your browsers back button before jumping down the Wiki rabbit hole! 

From this example I hope you can see how easy it is to set and use an accesskey shortcut.


## Example 2: A Large Form w/ Multiple Access Keys

Let's set up multiple accesskeys for a form with multiple input elements. In this example. instead of indicating the access key via brackets, we will underline the first letter of each label to hint at the accesskey. 

HTML:

```
<form style="width:50%;">
   <fieldset>   
      <legend> Contact Info </legend>

      <label> <u>N</u>ame: </label><br>
      <input type="text" accesskey="n"><br>

      <label> E<u>m</u>ail: </label><br>
      <input type="text" accesskey="e"><br>

      <label> <u>A</u>ge: </label><br>
      <input type="text" accesskey="a"><br>
   </fieldset>
</form>
```

OUTPUT:

<form style="width:50%;">
   <fieldset>   
      <legend style="font-size:1.5em;"> Contact Info </legend>
      <label style="width:50%"> <u>N</u>ame: </label><br>
      <input type="text" accesskey="n"><br>
      <label style="width:50%;"> E<u>m</u>ail </label><br><input type="text" accesskey="m"><br>
      <label style="width:50%;"> <u>A</u>ge: </label><br><input type="text" accesskey="a"><br><br>
			<input type="submit" value="Submit"/>
   </fieldset>
</form>

<hr> 

Try jumping around the input elements using their indicated access keys. Tab should also work too! 

You may be wondering why the accesskey for Email is set to `m` instead of `e`. The answer is simply because on my Chrome broswer, `Alt` + `e` opens the main menu in Chrome. These sort of conflicts are a major pain point when using accesskeys. These issues will be covered in a following section.

## Access Key Discoverability Methods

#### Issue
Users are often unaware of the avaliability of accesskey shortcuts on webpages as there is currently no standard method of indicating accesskeys. Even when websites hint at accesskeys, users may be unaware of the meaning of the hints or lack knowledge of how to use accesskey shortcuts.

#### Solutions

Some methods of incidating accesskey shortcuts include: 

1. Hints via underlining, brackets etc
	
	<a href="" accesskey="1"> A link </a> [1] 
	
	This method falls short when users do not know what accesskeys are or do not know the hinting convention.

2. Placing full accesskey indicator next to the elements

	<a href="" accesskey="1"> A link </a> (Accesskey: 1)
	
	This method falls short when users do not know what accesskeys are. It also influences the flow and appearance of the webpage.

3. Putting full accesskey keystroke shortcut next to the element

	<a href="" accesskey="1"> A link </a> (Open with Alt + 1)
	
	This method become cumbersome to implement as shortcuts differ from browser to browser and OS to OS. It also influences the flow and appearance of the webpage.
	
4. Full cheatsheet:

	```
	Go to link 1: Alt + 1
	Go to link 2: Alt + 2
	Go to link 3: Alt + 3
	Go to home page: Alt + H
	```
	
	This method requires users to learn shortcuts all at once and is often overwhelming for beginners. 
	
5. Advanced hinting/indicators 

	Tooltips and other methods provide cute solutions to indicate the availability of access key shortcuts, but still are lacking when users don't understand the implemented convention.

## Other Issues 

1. Broswer/OS Shortcut Conflicts: Many browsers and operating systems have default shortcuts that will override any accesskey shortcuts. This makes it hard to implement accesskeys as the shortcuts vary on the vast array of operating systems and browsers. To overcome this use numeric keycodes[0-9] that are usually not set as shortcuts on most operating systems and browsers. Although there is no gaurantee there will be no conflicts, this method is sound.

1. Activation: Depending on OS and browser environments, access keys set on a link or button may or may not activate when jumped to with an access key shortcut. Regardless, every browser will at minimum access the element.  

2. Standards: There are no acceepted access key standards. This means users used to other websites access keys may be confused by how access keys are implemented on your website. 

## Broswer and HTML Version Support

1. Access keys are supported on modern all browsers: Firefox, Internet Explorer, Google Chrome, Safari, Opera

2. HTML Version Support
	1. HTML5: the accesskey attribute can be applied to *any* element
	2. HTML4.01: the accesskey attribute can only be applied to:
	3. 
		`<a>, <area>, <button>, <input>, <label>, <legend>, <textarea>`
		
## Suggestions

Access keys are not generally worth implementing. The major cases against access keys are: 

1. Shortcut conflicts with browsers, operating systems, other software, and accessibility tools

2. Varied user experiences due to different browser implentations

3. No standards. This means access keys are often not worth the time and can even harm user experience by conflicting with a user's set shortcuts.  

4. Access keys are often unknown and confusing to beginners


If you think the pros of implementing access keys on your website outweight these issues and would be of benefit to your users, I suggest the following: 

1. Set access keys for elements allowed w/ the HTML4.01 standard: 

	1. Links/anchors
	2. Form control elements
	
2. Keep access keys to a minimum

2. Only use numeric access keys to avoid most shortcut conflicts.

3. Indicate the access key shortcut next to the element. Also indicate access key shortcuts are useable on your website. 

## Resources

Reference: 

1. [Web AIM: Keyboard Accessibility: Accesskey](http://webaim.org/techniques/keyboard/accesskey)
2. [MDN: accesskey](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)

Brian Merriman | Web Developer | 2016