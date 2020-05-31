---
title: "Array methods: Using map() vs forEach()"
date: 2019-08-08 23:11:46
excerpt: "Learn the difference between forEach and map methods."
tags:
  - javascript
seo:
  description: >-
    In JavaScript, the Array.forEach method accepts a callback
    function that is called once for each element in the array.
    The Array.map method, on the other hand, allows you to create a new
    array that consists of elements resulting from calling a function
    for each element in an array.
img: ../../images/high-angle-view-of-a-man-256381.jpg
---

## forEach()

This method accepts a callback function that is called once for each element in the array.

```javascript
array.forEach(function(currentValue, index, arr), thisValue);
```

- `currentValue` refers to the current element of the array (REQUIRED).
- `index` is the index of the current element
- `arr` is the array object that is being processed.
- `thisValue` is the `this` value passed to the callback function.

The method doesn't have a return value. It returns `undefined` always.

<br>

### Examples

- Display the elements of an array

```javascript
let numbers = [2, 5, 7, 2, 1, 9]

const display = number => {
  console.log(number)
}
numbers.forEach(display)

/*

Output:

2
5
7
2
1
9

*/
```

<br>
<br>

- Update the original elements in an array

The `arr` argument allows you to access the original array, and `index` will give you the index of the current element you want to manipulate.

```javascript
let numbers = [2, 5, 7, 2, 1, 9]

const doubleNumbers = (number, index, arr) => {
  const result = number * 2
  arr[index] = result
}

console.log("Original numbers: " + numbers)

numbers.forEach(doubleNumbers)

console.log("Doubled numbers: " + numbers)

/*

Output

Original numbers: 2, 5, 7, 2, 1, 9
Doubled numbers: 4, 10, 14, 4, 2, 18

*/
```

<br>
<br>

## map()

This method allows you to create a new array that consists of elements resulting from calling a function for each element in an array.

```javascript
const newArray = originalArray.map(function(currentValue, index, array), thisValue);
```

- `currentValue` refers to the current element of the array (REQUIRED).
- `index` is the index of the current element
- `array` is the array object that is being processed.
- `thisValue` is the `this` value passed to the callback function.

Unlike `forEach()`, this method returns a new array containing the results of calling the callback function for each element.

<br>

### Example

- Change the format of objects in an array

You can add and/or remove properties from objects and create a new array containing objects with the added/removed properties.

```javascript
let people = [
  { id: 1, firstName: "Alison", lastName: "Morgan" },
  { id: 2, firstName: "Sam", lastName: "Lee" },
  { id: 3, firstName: "Josh", lastName: "Denver" },
]
const getFirstName = person => {
  return person.firstName
}

const firstNames = people.map(getFirstName)

const newPeopleArray = people.map(person => {
  return {
    id: person.id,
    name: `${person.firstName} ${person.lastName}`,
  }
})

console.log("First names:", firstNames)
console.log("New people array:", newPeopleArray)

/*

Output:

First names:
["Alison", "Sam", "Josh"]
New people array:
[
  { id: 1, name: "Alison Morgan" },
  { id: 2, name: "Sam Lee" },
  { id: 3, name: "Josh Denver" },
]

*/
```
