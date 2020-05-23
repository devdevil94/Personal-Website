---
tags:
  - javascript
title: "Array methods: Using splice()"
excerpt: Learn how to use splice() to change the content of an array.
date: 2019-09-23T07:01:35.364Z
seo:
  description: >-
    In JavaScript, the Array.splice method that is used to add and/or remove elements from an array and it returns
    an array containing the removed elements (if any).
---

<br>

### **splice()**

<br>

This method **adds and/or removes elements from an array** and returns an array containing the removed elements (if any).

```javascript
const removedElements = array.splice(startIndex, numOfRemovedElements, element1, element2, ...);
```

- `startIndex` is the index at which adding/removing array elements start (REQUIRED).
- `numOfRemovedElements` is number of array elements to be removed.
- `element1, element2, ...` are the elements to be added to the array.

<br>

#### Examples

<br>

For the next examples, we will be using the `employees` array as the original array.

```javascript
const employees = [
  { id: 1, name: "Alison Morgan", salary: 2000 },
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 3, name: "Josh Denver", salary: 1700 },
  { id: 4, name: "Justin Mosely", salary: 3000 },
  { id: 5, name: "Spencer Harris", salary: 2700 },
]
```

- ##### Remove elements from an array

```javascript
const firedEmployees = employees.splice(2, 2)

console.log("Fired employees", firedEmployees)
console.log("Current employees", employees)
```

Output:

```
Fired employees
[
  { id: 3, name: "Josh Denver", salary: 1700 },
  { id: 4, name: "Justin Mosely", salary: 3000 },
]
Current employees
[
  { id: 1, name: "Alison Morgan", salary: 2000 },
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 5, name: "Spencer Harris", salary: 2700 }
]

```

<br>

- ##### Add elements to an array

```javascript
const firedEmployees = employees.splice(5, 0, {
  id: 6,
  name: "Sarah Wallace",
  salary: 2800,
})

console.log("Fired employees", firedEmployees)
console.log("Current employees", employees)
```

<br>
Output:

```
Fired employees
[]
Current employees
[
  { id: 1, name: "Alison Morgan", salary: 2000 },
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 3, name: "Josh Denver", salary: 1700 },
  { id: 4, name: "Justin Mosely", salary: 3000 },
  { id: 5, name: "Spencer Harris", salary: 2700 },
  { id: 6, name: "Sarah Wallace", salary: 2800 }
]

```

<br>

- ##### Replace elements of an array

```javascript
const firedEmployees = employees.splice(0, 1, {
  id: 1,
  name: "Sarah Wallace",
  salary: 2800,
})

console.log("Fired employees", firedEmployees)
console.log("Current employees", employees)
```

Output:

```
Fired employees
[
  { id: 1, name: "Alison Morgan", salary: 2000 }
]
Current employees
[
  { id: 1, name: "Sarah Wallace", salary: 2800 },
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 3, name: "Josh Denver", salary: 1700 },
  { id: 4, name: "Justin Mosely", salary: 3000 },
  { id: 5, name: "Spencer Harris", salary: 2700 }
]
```
