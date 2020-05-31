---
tags:
  - javascript
title: "Array methods: Using reduce()"
excerpt: Learn how to use reduce() method.
date: 2019-09-13T06:16:32.623Z
seo:
  description: >-
    In JavaScript, the Array.reduce accepts a callback function that 'reduces' the elements of an array to a single value.
img: ../images/person-holding-magnifying-glass-712786.jpg
---

<br>

### **reduce()**

<br>

This method accepts a callback function that **'reduces' the elements of an array to a single value**.

```javascript
const result = array.reduce(function(acc, currentValue, index, arr), initValue);
```

- `acc` is the accumulated value from previous calls of the callback function (REQUIRED).
- `currentValue` refers to the current element of the array (REQUIRED).
- `index` is the index of the current element.
- `arr` is the array object that is being processed.
- `initValue` is the initial value passed to the callback.
  <br>

#### **Examples**

<br>

- ##### Get the sum of values in an array of objects

```javascript
const employees = [
  { id: 1, name: "Alison Morgan", salary: 2000 },
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 3, name: "Josh Denver", salary: 1700 },
  { id: 4, name: "Justin Mosely", salary: 3000 },
  { id: 5, name: "Spencer Harris", salary: 2700 },
]

const sum = employees.reduce((acc, currentValue) => {
  return acc + currentValue.salary
}, 0)

console.log("Total salaries = ", sum)
```

Output:

```
Total salaries =  11900
```
