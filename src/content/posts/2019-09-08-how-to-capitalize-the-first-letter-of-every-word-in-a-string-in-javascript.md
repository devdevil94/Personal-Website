---
tags:
  - javascript
  - quickie
title: How to capitalize the first letter of every word in a string in javascript?
excerpt: A quick way to capitalize every first letter in every word in a string
date: 2019-09-08T08:00:59.321Z
seo:
  description: >-
    Using JavaScript, here's a quick way to capitalize every first letter in every word in a string.
img: ../../images/apple-coffee-computer-desk-356056.jpg
---

You can capitalize the first letter of every word in a string by following these steps:

1. Use `split` method to convert the string into an array of words.
2. Use [`map`](https://web.devdevil.co/array-methods-using-map-vs-foreach) method to loop through the words array to capitalize the first letter of every word.
3. Use `join` to convert the words array back to a string.

<br>

### Example

```javascript
const oldString = "Hello, can i talk to you?"

const newString = oldString
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ")

console.log(newString)

/*
Output:

Hello, Can I Talk To You?
*/
```

<br>
<br>

You can check out the demo below where you can enter a string and every first letter in every word in it will be capitalized by pressing the button.

<p class="codepen" data-height="388" data-theme-id="dark" data-default-tab="js,result" data-user="devdevil94" data-slug-hash="RwbZEMz" style="height: 388px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Capitalize Strings in Javascript">
  <span>See the Pen <a href="https://codepen.io/devdevil94/pen/RwbZEMz/">
  Capitalize Strings in Javascript</a> by Saud Al Alawi (<a href="https://codepen.io/devdevil94">@devdevil94</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
