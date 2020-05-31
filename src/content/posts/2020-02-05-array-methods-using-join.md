---
tags:
  - javascript
title: "Array methods: Using join()"
excerpt: Learn how to convert the elements of an array into a string using join().
date: 2020-02-05T17:19:00.364Z
seo:
  description: >-
    In JavaScript, the Array.join method returns a string that is the result of
    joining the elements of an array with a specific separator between them.
img: ../../images/abstract-art-blur-bright-373543.jpg
---

## join()

This method **returns a string that is the result of joining the elements of an array with a specific separator between them**.

```javascript
const resultString = array.join(separator)
```

- `separator` is the string that separates between the elements. The default value is a comma (,).

<br>

### Examples

- Joining an array of characters

```javascript
const chars = ["H", "E", "L", "L", "O"]
console.log(chars.join(""))

/*

Output:

HELLO

*/
```

<br>
<br>

- Joining an array of strings

```javascript
const items = ["Hammer", "Sword", "Potion", "Map", "Armor"]
console.log(items.join())
console.log(items.join(" | "))

/*

Output:

Hammer,Sword,Potion,Map,Armor
Hammer | Sword | Potion | Map | Armor

*/
```

<br>
<br>

```javascript
const todos = ["Go home", "Clean room", "Do homework"]
console.log(todos.join("\n"))

/*

Output:

Go home
Clean room
Do homework

*/
```
