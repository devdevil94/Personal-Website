---
tags:
  - react
title: How to create a simple Autocomplete component with React?
excerpt: Build your own Autocomplete component in React
date: 2019-09-11T10:00:31.644Z
seo:
  description: >-
    Create a simple Autocomplete component in React from scratch.
img: ../../images/illuminated-cityscape-against-blue-sky-at-night-316093.jpg
---

There are multiple ways to build an Autocomplete component that you can, for example, use to implement as part of your search component in your app. <br><br>
The component will be able to display a filtered suggestions list based on the user input.

<br><br>

## App Component

We start with the `App` component which does nothing but render the `Autocomplete` component.

```javascript
import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"
import Autocomplete from "./components/Autocomplete"

function App() {
  return (
    <div className="App">
      <Autocomplete />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
```

<br><br>

## Autocomplete Component

The interesting part is the Autocomplete component itself. You can start by using `useState` hook to define the initial state for this component.

```javascript
const [inputValue, setInputValue] = useState("")
const [filteredSuggestions, setFilteredSuggestions] = useState([])
const [selectedSuggestion, setSelectedSuggestion] = useState(0)
const [displaySuggestions, setDisplaySuggestions] = useState(false)
```

Declare a `suggestions` array that contain the full list of suggestions.

```javascript
const suggestions = [
  "Oathbringer",
  "American Gods",
  "A Game of Thrones",
  "Prince of Thorns",
  "Assassin's Apprentice",
  "The Hero of Ages",
  "The Gunslinger",
]
```

`Autocomplete` renders a text input as well as a `SuggestionsList` component that receives props and renders the filtered suggestions list accordingly.

```javascript
return (
  <>
    <h1>React Autocomplete</h1>
    <input
      className="user-input"
      type="text"
      onChange={onChange}
      value={inputValue}
    />
    <SuggestionsList
      inputValue={inputValue}
      selectedSuggestion={selectedSuggestion}
      onSelectSuggestion={onSelectSuggestion}
      displaySuggestions={displaySuggestions}
      suggestions={filteredSuggestions}
    />
  </>
)
```

When the user types something in the input, the `onChange` function is called. We use [`filter`](https://web.devdevil.co/array-methods-using-filter) method to 'filter' out the suggstions that don't match the user input.

```javascript
const onChange = event => {
  const value = event.target.value
  setInputValue(value)

  const filteredSuggestions = suggestions.filter(suggestion =>
    suggestion.toLowerCase().includes(value.toLowerCase())
  )

  setFilteredSuggestions(filteredSuggestions)
  setDisplaySuggestions(true)
}
```

When the user selects a suggestion, `onSelectSuggestion` is called from the `SuggestionList` component to update the state.

```javascript
const onSelectSuggestion = index => {
  setSelectedSuggestion(index)
  setInputValue(filteredSuggestions[index])
  setFilteredSuggestions([])
  setDisplaySuggestions(false)
}
```

<br><br>

## Suggestions List Component

This component renders the filtered suggsetions passed by `Autocomplete` component through the `props`.

```javascript
const SuggestionsList = props => {
  const {
    suggestions,
    inputValue,
    onSelectSuggestion,
    displaySuggestions,
    selectedSuggestion,
  } = props

  if (inputValue && displaySuggestions) {
    if (suggestions.length > 0) {
      return (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => {
            const isSelected = selectedSuggestion === index
            const classname = `suggestion ${isSelected ? "selected" : ""}`
            return (
              <li
                key={index}
                className={classname}
                onClick={() => onSelectSuggestion(index)}
              >
                {suggestion}
              </li>
            )
          })}
        </ul>
      )
    } else {
      return <div>No suggestions available...</div>
    }
  }
  return <></>
}
```

<br><br>

## Styling the Components

The final step is to add css code to make the components nice to look at.

```css
* {
  font-family: sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.App {
  padding: 50px 20px;
}
.user-input {
  width: 250px;
  padding: 5px 3px;
}
.suggestions-list {
  list-style: none;
  padding: 0;
  max-height: 160px;
  overflow-y: auto;
  max-width: 250px;
}
.suggestion {
  background-color: rgb(226, 181, 181);
  padding: 10px;
  color: rgb(65, 65, 65);
  cursor: pointer;
}
.suggestion:hover {
  background-color: rgba(238, 238, 238, 0.1);
}
.selected {
  background-color: rgb(148, 44, 44);
  color: rgb(238, 223, 223);
}
```

<br><br>

## Demo

You can check out the demo of the Autocomplete component on [CodePen](https://codepen.io/devdevil94/pen/JjPvGZY/).

<p class="codepen" data-height="329" data-theme-id="dark" data-default-tab="js,result" data-user="devdevil94" data-slug-hash="JjPvGZY" style="height: 329px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Autocomplete component in React">
  <span>See the Pen <a href="https://codepen.io/devdevil94/pen/JjPvGZY/">
  Autocomplete component in React</a> by Saud Al Alawi (<a href="https://codepen.io/devdevil94">@devdevil94</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
