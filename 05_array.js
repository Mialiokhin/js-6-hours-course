const cars = ['Mazda', 'Ford', 'BMW', 'Mersedes']
const fib = [1, 1, 2, 3,5,8,13]
/*const people = [
    {name: 'Lesha', budget: 4200},
    {name: 'Masha', budget: 3500},
    {name: 'Byba', budget: 1700}
]*/

// // console.log(cars)
// cars.push('Lada')
//
// cars.unshift('Porshe')
// const firstItom = cars.shift()
// const lastCar = cars.pop()
//     console.log(cars)
// console.log(firstItom)
// console.log(lastCar)

// console.log(cars.reverse())
// console.log(cars)
// cars[index] = 'Zotie'
// console.log(cars)
// let findedPerson
// for(const person of people) {
//     console.log(person)
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)


/*const index = people.findIndex(function(person) { return person.budget === 3500})
const person = people.find(function(person) { return person.budget === 3500})


console.log(people[index])*/
// console.log(person)

/*const person = people.find(person => person.budget === 3500)
console.log(person)*/

//
// console.log(cars.includes('Mazda'))
/*
const upperCaseCars = cars.map(car => car.toUpperCase())
console.log(upperCaseCars);
console.log(cars);

const pow2 = num => num ** 2
const sqrt = num => Math.sqrt(num)
const pow2Fib = fib.map(pow2).map(Math.sqrt)
console.log(pow2Fib);*/
/*const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
const filterestNumbers = pow2Fib.filter(num => num > 20)
console.log(pow2Fib);
console.log(filterestNumbers)*/

const people = [
    {name: 'Lesha', budget: 4200},
    {name: 'Masha', budget: 3500},
    {name: 'Byba', budget: 1700}
]

const allBudget = people
    .filter(person => person.budget >2000)
    .reduce( (acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)


// Задача 1

/*
const text = 'Привет, мы изучаем JS'
const reverseText = text.split('').reverse().join('')
console.log(reverseText)*/
