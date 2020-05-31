---
title: "Array methods: Using includes()"
date: 2019-08-11 9:41:32
excerpt: "Learn how to use includes() method."
tags:
  - javascript
seo:
  description: >-
    In JavaScript, the Array.includes method returns either true or false based on whether the array includes a specific element or not.
img: ../../images/working-woman-technology-computer-7374.jpg
---

## includes()

This method returns either `true` or `false` based on whether **the array includes a specific element or not**.

```javascript
array.includes(element, startIndex)
```

- `element` refers to the element you are looking for in the array (REQUIRED).
- `startIndex` is the position at which the searching for the `element` starts (default = 0).

<br>

### Examples

- Search for a number

```javascript
const numbers = [20, 12, 6, 83, 9, 17]

console.log(numbers.includes(71))
console.log(numbers.includes(6))
console.log(numbers.includes(83, 3))
console.log(numbers.includes(20, 2))

/*
Output:

false
true
true
false
*/
```

<br>
<br>

- Search for a string

```javascript
const names = ["Alison", "Sam", "Josh", "Lily"]

console.log(names.includes("Sam"))
console.log(names.includes("Sam", 2))

/*
Output:

true
false
*/
```
