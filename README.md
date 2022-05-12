# Learning Javascript

- [Learning Javascript](#learning-javascript)
  - [Lodash](#lodash)
    - [Configuring with a project](#configuring-with-a-project)
    - [Interesting utilities methods](#interesting-utilities-methods)
      - [`_.assign()`](#_assign)
      - [`_.times()`](#_times)
      - [`_.debounce()`](#_debounce)
      - [`_.find()`](#_find)
      - [`_.filter()`](#_filter)
      - [`_.first()`](#_first)
      - [`_.last()`](#_last)
      - [`_.chunk()`](#_chunk)
      - [`_.get()`](#_get)
      - [`_.set()`](#_set)
  - [Snippets](#snippets)

## Lodash

Lodash is a library that enhance basic JS, giving it methods to handle data  in a ruby like style

### Configuring with a project

```shell
yarn add lodash
```

or

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
```

it's also possible to import specific methods within an package.json

```json
// package.json
{
  // ...
  "dependencies": {
  "lodash.get" "^4.4.2",
  "lodash.set" "^4.3.2"
  }
}

```

### Interesting utilities methods

#### `_.assign()`

Allows you to add new values to return new object with new assigned properties, it doesn't change the original object

```js
const user = {name: "Lucas", age: 34}
const updatedUser = _.assign({ surname: "Casanova", age: 35 }, user)
console.log(updatedUser)

// Output
// {surname: 'Casanova', name: 'Lucas', age: 34}

// Note that id doesn't change a property that already has a value, it just adds the new property
```

#### `_.times()`

it just repeats and map the result of an instruction for `n` times

```js
console.log(_.times(3, () => { return 2 * 2 }))

// Output
// [4, 4, 4]

// Note that this is basically the same as:

console.log([1, 2, 3].map(() => { return 2 * 2 }))

// Output
// [4, 4, 4]

```

#### `_.debounce()`

Basically it just a timeout that resets if an input is trigger before the timeout runs out, for instance if you will make a Ajax request it avoids to make requests every time an user tipping something on an input, if you set a debounce of 5 seconds it will only make that Ajax request after 5 seconds timeout

```html
<!-- index.html -->
  <div>
    <h2>Debounce example</h2>
    <input type="text" name="debounce" />
  </div>

  <script>
      function submit() {
      console.log("Submitted!")
    }

    const input = document.querySelector("input[name='debounce']")
    input.addEventListener('keyup', _.debounce(submit, 5000))
</script>
```

#### `_.find()`

It's basically and enhancement for normal find from JS

```js
const users = [{name: "Lucas", age: 35}, {name: "Eloina", age:63}, {name: "Camila", age: 40}, {name: "Daniel", age: 37}]
const result = _.find(users, {name: "Lucas"})
console.log(result)

// Output
// {name: "Lucas", age: 35}

// Note is basically same as:

const result = users.find(e => {e.name === "Lucas"})
```

#### `_.filter()`

It's basically and enhancement for normal filter from JS

```js
const users = [{name: "Lucas", age: 35, gender: "male"}, {name: "Eloina", age:63, gender: "female"}, {name: "Camila", age: 40, gender: "female"}, {name: "Daniel", age: 37, gender: "male"}]
const result = _.filter(users, {gender: "male"})
console.log(result)

// Output
// [{name: "Lucas", age: 35, gender: "male"}, {name: "Daniel", age: 37, gender: "male"}]

// Note is basically same as:

const result = users.filter(e => {e.gender === "male"})
```

#### `_.first()`

```js
const numbers = [1,2,3,4,5,6,7,8]
console.log(_.first(numbers))

// Output
// 1
```

#### `_.last()`

```js
const numbers = [1,2,3,4,5,6,7,8]
console.log(_.last(numbers))

// Output
// 8
```

#### `_.chunk()`

Break and array or an object into chunks

```js
// Array
const numbers = [1,2,3,4,5,6,7,8]
console.log(_.chunk(numbers, 2))

// Object
const users = [{name: "Lucas", age: 35, gender: "male"}, {name: "Eloina", age:63, gender: "female"}, {name: "Camila", age: 40, gender: "female"}, {name: "Daniel", age: 37, gender: "male"}]
console.log(_.chunk(users, 2))

// Output
// Array
// [[1, 2],[3, 4],[5, 6],[7, 8]]

// Object
//[[{name: "Lucas", age: 35, gender: "male"}, {name: "Eloina", age:63, gender: "female"}], 
//[{name: "Camila", age: 40, gender: "female"}, {name: "Daniel", age: 37, gender: "male"}]]
```

#### `_.get()`

Mostly use to handle API responses due to the possibility to data inconsistency or variability, mostly what get method does is to try getting the day from a unknown source if the date isn't found or there's an inconsistency it will return a default value instead of throw an exception stopping the application.

Error situation

```js
const devs = [
  {
    name: "Lucas",
    age: 35,
    languages: {
      using: ["HTML", "CSS", "Javascript", "SQL", "Ruby"],
      learning: ["Java", "Python", "Lua"]
    }
  },
  {
    name: "Geovanna",
    age: 17,
    languages: {
      learning: ["Javascript", "CSS"]
    }
  }
]

// Error due to the fact that dev2 doesn't have a property `using` therefore, there is no array and no index 2 
let usingLanguages = devs.map(dev => { return dev.languages.using[2] })
console.log(usingLanguages)

// Output
// let usingLanguages = devs.map(dev => { return dev.languages.using[2] })

// TypeError: Cannot read properties of undefined (reading '2')
```

Regular attempt to avoid it

```js
let usingLanguages

try {
  usingLanguages = devs.map(dev => { return dev.languages.using[2] })
  console.log(usingLanguages)
} catch (error) {
  console.log("Error", error.message)
}

// Output
// Error Cannot read properties of undefined (reading '2')
```

Using lodash `get()`

```js
usingLanguages = _.get(devs, 'languages.using[2]', 'Error due to data inconsistency')
console.log(usingLanguages)

// Output
// Error due to data inconsistency
```

#### `_.set()`

Set is basically to add data to an object that might or might not have a property, it might seems ordinary for simple data, simple objects, however it shines if you will create deeper properties

Attempting to set values for a non existing properties chunk with regular JS

```js
const devs = [
  {
    name: "Lucas",
    age: 35,
    languages: {
      using: ["HTML", "CSS", "Javascript", "SQL", "Ruby"],
      learning: ["Java", "Python", "Lua"]
    }
  },
  {
    name: "Geovanna",
    age: 17,
    languages: {
      learning: ["Javascript", "CSS"]
    }
  }
]

try {
  devs.forEach(dev => { dev.responsibility.documentation = ["Register", "Report"] })
  console.log(devs[1].responsibility.documentation)
} catch (error) {
  console.log("Error", error.message)
}
//Output
// Note that it handles the exception but it doesn't set the objects
// Error Cannot set properties of undefined (setting 'documentation')
```

Using lodash `set()` to do so

```js
const devs = [
  {
    name: "Lucas",
    age: 35,
    languages: {
      using: ["HTML", "CSS", "Javascript", "SQL", "Ruby"],
      learning: ["Java", "Python", "Lua"]
    }
  },
  {
    name: "Geovanna",
    age: 17,
    languages: {
      learning: ["Javascript", "CSS"]
    }
  }
]

devs.forEach(dev => { _.set(dev, "responsibility.documentation", ["Register", "Report"]) })
console.log(devs)

// Output
// [
//   {
//     name: 'Lucas',
//     age: 35,
//     languages: {
//       using: ["HTML", "CSS", "Javascript", "SQL", "Ruby"],
//       learning: ["Java", "Python", "Lua"]
//     },
//     responsibility: { 
//       documentation:  ["Register", "Report"] 
//     }
//   },
//   {
//     name: 'Geovanna',
//     age: 17,
//     languages: {
//       learning: ["Javascript", "CSS"]
//     },
//     responsibility: { 
//       documentation:  ["Register", "Report"] 
//     }
//   }
// ]
```

## Snippets
