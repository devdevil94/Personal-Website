---
tags:
  - javascript
title: "Introduction to web components: HTML templates"
excerpt: "Learn how to create reusable HTML templates"
date: 2019-10-01T19:36:05.538Z
seo:
  description: >-
    A brief introduction to using template HTML tag to
    create a reusable HTML template.
img: ../../images/codes-coding-computer-programming-270366.jpg
---

Web components are a bunch of browser specifications working together to make the process of creating reusable UI components easier. Those specs include:

- HTML Templates
- Custom Elements
- Shadow DOM

<br>

Those will be discussed through this series of blog posts, starting with HTML templates.

<br>

## HTML Templates

The `<template>` tag makes it possible to reuse DOM elements on a web page. Anything inside a `<template>` element is not rendered right away, but you can use JavaScript to reference it.

```html
<template id="card-template">
  <div class="card">
    <h3 class="card-title">Card Title</h3>
    <div class="card-content">
      <p>This is the content of the card.</p>
    </div>
  </div>
</template>
```

Now let's use JavaScript to grab the content of `<template>` and display them on screen.

```javascript
const templateContent = document.getElementById("card-template").content

const cardNode = document.importNode(templateContent, true)
document.body.appendChild(cardNode)
```

With `importNode` function, you can create a clone of the template's content which is appended to the `<body>` element and rendered on the page.

<br>

The `<template>` capable of containing any HTML elements inside of it, like `<style>` element where you can add CSS for the content of the template.

<br>

```html
<template id="card-template">
  <style>
    .card {
      border: 1px solid rgb(116, 129, 129);
      margin-bottom: 7px;
      width: 250px;
      border-radius: 4px;
      font-size: 30px;
    }
    .card-title,
    .card-content {
      padding: 10px;
    }
  </style>
  <div class="card">
    <h3 class="card-title">Card Title</h3>
    <div class="card-content">
      <p>This is the content of the card.</p>
    </div>
  </div>
</template>
```

## Demo

Here's the demo on CodePen.<br>

<p class="codepen" data-height="365" data-theme-id="dark" data-default-tab="html,result" data-user="devdevil94" data-slug-hash="PoYrBNx" data-preview="true" style="height: 365px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="HTML Templates">
  <span>See the Pen <a href="https://codepen.io/devdevil94/pen/PoYrBNx">
  HTML Templates</a> by Saud Al Alawi (<a href="https://codepen.io/devdevil94">@devdevil94</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Using `<template>` is an effective way to create reusable DOM elements. However, `<template>` on its own doesn't encapsulate its styles content which can influence the entire document. In [part 2](/blog/introduction-to-web-components-custom-elements), we will look into how to create a custom element that has its own custom HTML tag.
