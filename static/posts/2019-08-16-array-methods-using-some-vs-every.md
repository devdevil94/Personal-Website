---
title: "Array methods: Using some() vs every()"
date: 2019-08-16 12:04:22
excerpt: "Learn how to use some() and every() methods."
tags:
  - javascript
seo:
  description: >-
    In JavaScript, the Array.some method accepts a callback function and returns either true or false
    based on whether or not at least one element in the array passes the test provided
    in the callback function. The Array.every method accepts a callback function and
    returns either true or false based on whether or not all the elements in the array pass
    the test provided in the callback function.
img: ../images/coding-computer-data-depth-of-field-577585.jpg
---

### **some()**

<br>

This method accepts a callback function and returns either `true` or `false` based on whether or not **at least one element in the array passes the test** provided in the callback function.

```javascript
array.some(function(currentValue, index, arr), thisValue);
```

- `currentValue` refers to the current element of the array (REQUIRED).
- `index` is the index of the current element
- `arr` is the array object that is being processed.
- `thisValue` is the `this` value passed to the callback function.

<br>

#### **Example**

<br>

- ##### Check if some numbers in an array are lower/greater than a specific number

```javascript
const employees = [
  { id: 1, name: "Alison Morgan", salary: 2000 },
  { id: 2, name: "Sam Lee", salary: 2500 },
  { id: 3, name: "Josh Denver", salary: 1700 },
  { id: 4, name: "Justin Mosely", salary: 3000 },
  { id: 5, name: "Spencer Harris", salary: 2700 },
]
//Check if there are employees who are paid less than 1500
const employeesNotPaidWell = employees.some(employee => {
  return employee.salary < 1500
})

if (employeesNotPaidWell) {
  console.log("Some employees are not paid well")
} else {
  console.log("Employees are paid well")
}
```

Output:

```
Employees are paid well
```

<br><br>

### **every()**

<br>

This method accepts a callback function and returns either `true` or `false` based on whether or not **all the elements in the array pass the test** provided in the callback function.

```javascript
array.every(function(currentValue, index, arr), thisValue);
```

- `currentValue` refers to the current element of the array (REQUIRED).
- `index` is the index of the current element
- `arr` is the array object that is being processed.
- `thisValue` is the `this` value passed to the callback function.

<br>

#### **Example**

<br>

- ##### Check if all elements in an array meet a specific criteria/test

```javascript
const books = [
  { title: "Oathbringer", rating: 8, author: "Brandon Sanderson" },
  { title: "The Lies of Locke Lamora", rating: 7, author: "Scott Lynch" },
  { title: "The Silmarillian", rating: 9, author: "J.R.R. Tolkien" },
  { title: "Ameriacan Gods", rating: 6, author: "Neil Gaiman" },
  { title: "The Waste Lands", rating: 6, author: "Stephen King" },
]

//Check if all books are written by "Neil Gaiman"
const allBooksWrittenByNeil = books.every(book => {
  return book.author === "Neil Gaiman"
})

if (allBooksWrittenByNeil) {
  console.log("All the books are written by Neil Gaiman")
} else {
  console.log("Not all books are written by Neil Gaiman")
}
```

Output:

```
Not all books are written by Neil Gaiman
```

<br>

```javascript
//Check if ratings for all the books are above 5
const allBooksHighlyRated = books.every(book => {
  return book.rating > 5
})

if (allBooksHighlyRated) {
  console.log("Ratings for all the books are above 5")
} else {
  console.log("Not all the books are rated above 5")
}
```

Output:

```
Ratings for all the books are above 5
```
