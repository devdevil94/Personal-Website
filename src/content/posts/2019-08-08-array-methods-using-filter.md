---
title: "Array methods: Using filter()"
date: 2019-08-08 23:11:46
excerpt: "Learn how to filter() the content of an array."
tags:
  - javascript
seo:
  description: >-
    In JavaScript, the Array.filter method accepts a callback
    function and returns a new array that contains the elements
    that passed the test in the callback.
img: ../../images/abstract-art-circle-clockwork-414579.jpg
---

## filter()

This method accepts a callback function and returns a new array that contains **the elements that passed the test** in the callback.

```javascript
const filteredArray = array.filter(function(currentValue, index, arr), thisValue);
```

- `currentValue` refers to the current element of the array (REQUIRED).
- `index` is the index of the current element
- `array` is the array object that is being processed.
- `thisValue` is the `this` value passed to the callback function.

<br>

### Examples

- Filtering array elements by a criteria

When given an array like the one in following code, we can filter it to get the results that match a given criteria (or test).

```javascript
const employees = [
  { id: 1, name: "Alison Morgan", salary: 2000 },
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 3, name: "Josh Denver", salary: 1700 },
  { id: 4, name: "Justin Mosely", salary: 3000 },
  { id: 5, name: "Spencer Harris", salary: 2700 },
]
```

<br>

```javascript
//Filter employees who earn more than 2000
const emp1 = employees.filter(employee => {
  return employee.salary > 2000
})

console.log(emp1)

/*
Output:

[
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 4, name: "Justin Mosely", salary: 3000 },
  { id: 5, name: "Spencer Harris", salary: 2700 }
]
*/
```

<br>
<br>

```javascript
//Filter employees whose first name starts with an 'S'
const emp2 = employees.filter(employee => {
  return employee.name.charAt(0) === "S"
})

console.log(emp2)

/*
Output:

[
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 5, name: "Spencer Harris", salary: 2700 }
]
*/
```

<br>
<br>

```javascript
//Filter employees who earn between 1000 to 2600
const emp3 = employees.filter(employee => {
  return employee.salary > 1000 && employee.salary < 2600
})

console.log(emp3)

/*
Output:

[
  { id: 1, name: "Alison Morgan", salary: 2000 },
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 3, name: "Josh Denver", salary: 1700 }
]
*/
```
