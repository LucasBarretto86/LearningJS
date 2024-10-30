const _ = require('lodash')

// _.assign()
const user = { name: "Lucas", age: 34 }
const updatedUser = _.assign({ surname: "Casanova", age: 35 }, user)
console.log(updatedUser)

//_.times()
console.log(_.times(3, () => { return 2 * 2 }))
console.log([1, 2, 3].map(() => { return 2 * 2 }))

//_.debounce()
// Check index.html

// _.find()
const users = [{ name: "Lucas", age: 35, gender: "male" }, { name: "Eloina", age: 63, gender: "female" }, { name: "Camila", age: 40, gender: "female" }, { name: "Daniel", age: 37, gender: "male" }]
let result = _.find(users, { name: "Lucas" })
console.log(result)

// _.filter()
result = _.filter(users, { gender: "male" })
console.log(result)

// _.first()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(_.first(numbers))

// _.last()
console.log(_.last(numbers))

// _.chunk()
console.log(_.chunk(numbers, 2))
console.log(_.chunk(users, 2))

// _.get()
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
// let usingLanguages = devs.map(dev => { return dev.languages.using[2] })
// console.log(usingLanguages)

let usingLanguages

try {
  usingLanguages = devs.map(dev => { return dev.languages.using[2] })
  console.log(usingLanguages)
} catch (error) {
  console.log("Error", error.message)
}


usingLanguages = _.get(devs, 'languages.using[2]', 'Error due to data inconsistency')
console.log(usingLanguages)

// _.set()

// ERROR due to the fact that objects doesn't have deep property documentation under responsibility neither the responsibility property

// devs.forEach(dev => { dev.responsibility.documentation = ["Register", "Report"] })

// How to deal with exception

try {
  devs.forEach(dev => { dev.responsibility.documentation = ["Register", "Report"] })
  console.log(devs[1].responsibility.documentation)
} catch (error) {
  console.log("Error", error.message)
}

// Lodash don't just doest this deep modification it doesn't throw any error, that's might be useful indeed

devs.forEach(dev => { _.set(dev, "responsibility.documentation", ["Register", "Report"]) })
console.log(devs)
