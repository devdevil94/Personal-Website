---
tags:
  - javascript
title: "Introduction to web components: Custom Elements"
excerpt: Learn how to create custom HTML elements
date: 2020-01-13T14:30:32.130Z
seo:
  description: >-
    Custom Elements specification allows you to create reusable components
    that can be defined in HTML with custom tags
img: ../images/personal-computer-motherboard-4316.jpg
---

In [part 1](/blog/introduction-to-web-components-html-templates), we created a simple card `<template>` that can be reused in a webpage. We will use the `<template>` tag again with the help of Custom Elements specification to create a simple `<product-card>` element, similar to the ones you see on ecommerce websites.<br>

## Defining a custom element

Using JavaScript Classes, we define our `ProductCard` class that extends `HTMLElement`. We will use the class's `constructor` to insert a simple `template` into our custom element's structure.

```javascript
const template = `<p>Product Card Component<p>`
class ProductCard extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = template
  }
}
customElements.define("product-card", ProductCard)
```

With `customElements.define`, we can register the custom HTML tag, `<product-card>`, to be used in our HTML document.

```html
<product-card></product-card>
```

This will display the text "Product Card Component" on screen, indicating that the custom element was created.<br> <br> Now we will create the actual structure for our custom `<product-card>` element.<br>

## Creating product card template

One way of creating the template is by using `document.createElement("template")` to create a template HTML node and using `innerHTML` to insert all DOM elements necessary for the construction of our custom element.<br>

```javascript
const template = document.createElement("template")

template.innerHTML = `
<style>
:host{
  display: block;
  box-sizing: border-box;
  margin: 5px;
}
.product-card {
  width: 250px;
  border-radius: 4px;
  overflow: hidden;
  margin: 12px 5px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.product-card-body{
  padding: 10px;
}
.product-name{
  font-weight: bold;
  text-align: center;
}
.product-name, .product-description{
  margin: 8px 0;
}
.product-img{
  width: 100%;
}
.product-card-footer{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 15px;
}
button{
  border: none;
  border-radius: 3px;
  color: #ffffff;
  background-color: #ef6451;
  padding: 7px 9px;
  cursor: pointer;
}
</style>
<div class="product-card">
  <img class="product-img" />
  <div class="product-card-body">
    <h3 class="product-name"></h3>
    <p class="product-description"></p>
    <div class="product-card-footer">
        <span class="product-price"></span>
        <button>Add To Cart</button>
    </div> 
  </div> 
</div>
`
class ProductCard extends HTMLElement {
  constructor() {
    super()

    const node = document.importNode(template.content, true)
    this.appendChild(node)
  }
  /*...*/
}
customElements.define("product-card", ProductCard)
```

Just like in [part 1](/blog/introduction-to-web-components-html-templates), we cloned the template's content using `importNode` but this time we did it in the `constructor` of the `ProductCard` class.<br> <br> The `<style>` tag was used to add some CSS to our custom element. You may've noticed the `:host` selector which allows you to style the shell of the custom element itself. It is considered a best practice to change the `display` property value from the default `inline` value to either `inline-block` or `block`.<br><br> We will keep track of the different DOM elements within the template that will play a part when re-rendering our custom element.

```javascript
constructor() {
  /*...*/
  this._nameElement = this.querySelector(".product-name");
  this._priceElement = this.querySelector(".product-price");
  this._descriptionElement = this.querySelector(".product-description");
  this._imgElement = this.querySelector(".product-img");
  this._addToCartButton = this.querySelector(".product-footer button");
}
```

## Properties and attributes

First, let's state the difference between the properties and attributes of an element:

- Attributes are available in the HTML itself and used only for primitive data like numbers, strings, Boolean values.
- Properties can be considered as instance variables of a DOM node, used for primitive data as well as rich data like objects and arrays.

For our `<product-card>`, we simply need to show the product name, price, image (via URL) and description, and we will define the appropriate properties for the data.<br><br> A good practice when creating a custom element is to make sure that the properties are **reflected** to the corresponding attributes. However, it is important to NOT reflect rich data properties like objects and arrays to attributes and only reflect primitive data properties.

```javascript
get name() {
  return this.getAttribute("name");
}
set name(val) {
  this.setAttribute("name", val);
}
get price() {
  return parseFloat(this.getAttribute("price"));
}
set price(val) {
  this.setAttribute("price", val);
}
get imgURL() {
  return this.getAttribute("img-url");
}
set imgURL(val) {
  this.setAttribute("img-url", val);
}
get description() {
  return this.getAttribute("description");
}
set description(val) {
  this.setAttribute("description", val);
}
```

Now any change in the value of a certain property will be reflected to its corresponding attribute. But we need to make sure that when a change in attribute values occurs, we need to re-render the part of our custom element that corresponds to the updated attribute like when the `img-url` attribute is changed, the displayed image has to change too. To do that, we will use `attributeChangedCallback` method to update the display of our custom element depending on which attribute has changed.

```javascript
attributeChangedCallback(attrName, oldValue, newValue) {
  switch (attrName) {
    case "name":
      this._nameElement.textContent = newValue;
      break;
    case "price":
      this._priceElement.textContent = "$" + parseFloat(newValue);
      break;
    case "img-url":
      this._imgElement.src = newValue;
      break;
    case "description":
      this._descriptionElement.textContent = newValue;
      break;
    default:
      break;
  }
}
```

Now we have to define which attributes should be observed in order to trigger the `attributeChangedCallback` method. We can do that with the help of `observedAttributes` method which returns an array of all the attributes that will be observed.

```javascript
static get observedAttributes() {
  return ["name", "price", "img-url", "description"];
}
```

We will add our custom element to the HTML document and define the values of its attributes.

```html
<product-card
  name="Some Product"
  price="5000"
  description="This is an awesome product. It has amazing features."
  img-url="https://via.placeholder.com/300x200"
></product-card>
```

## Demo

Here's the demo for the our custom element on CodePen.<br>

<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="js,result" data-user="devdevil94" data-slug-hash="yLyEXJm" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Part 2 - Custom Elements">
  <span>See the Pen <a href="https://codepen.io/devdevil94/pen/yLyEXJm">
  Part 2 - Custom Elements</a> by Saud Al Alawi (<a href="https://codepen.io/devdevil94">@devdevil94</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<br>

The element we created is working fine except for the fact that the element's styles still can fall in conflicts with the rest of the document. We need to encapsulate all the styles within our element, this can be solved by using the <strong>Shadow DOM</strong> which will be explored in the next post.
