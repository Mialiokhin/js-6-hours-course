// 1 Переменные

/*const firstName = 'Vladilen'

//const age = 26 // number
const isProgrammer = true //boolean
const _ = 'private'
const $ = 'some value'
const withNum5 = '5'*/

//2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

//const lastName = prompt('Last Nameddf')
//alert(firstName + ' ' + lastName)

// Операторы

/*let currentYear = 2022
const birthYear = 1991
//const age = currentYear - birthYear

const a = 10
const b = 5
let c = 32*/
//c = c + a
//c +=a

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(++currentYear)
//console.log(--currentYear)
//console.log(c)

// Типы данных

// const isProgrammer = true
// const name = 'Alex'
// const age = 31
// let x
//
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

//Приоритет операторов
/*
const fullAge = 31
const birthYear = 1991
const currentYear = 2022

const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)*/

// Условные операторы

/*const  courseStatus = 'fail' //ready, fail, pending

if (courseStatus === 'ready') {
    console.log('Курс готов и его можно проходить')
} else if (courseStatus === 'pending') {
    console.log('Курс в процессе разработки')
} else {
    console.log('Курс не получился')
}

const num1 = 42
const num2 = '42'
console.log(num1 === num2)*/


/*
const isReady = true
// if (isReady) {
//     console.log('vse gotovo')
//     } else {console.log('ne gotovo')}
/!*
isReady ? console.log('gotovo') : console.log('ne gotovo')*!/


// Булевая логика

//Функции

function calculateAge(year) {
    return 2022 - year
}

/!*const myAge = calculateAge(1993)
console.log (calculateAge(1900))*!/
function logInfoAbout(name, year) {
    const age = calculateAge(year)

    if (age > 0 ) {
    console.log ('Chelovek po imeni: ' + name + ' imeet vozrast ' + age)
    } else console.log('eto buduushee')
}
logInfoAbout('xyi',1991)
logInfoAbout('xyi',2025)*/

//массивы


/*const cars = ['Mazda', 'Mersedes', 'Ford']
console.log(cars)
// const cars = new Array('Mazda', 'Mersedes', 'Ford')
// console.log(cars)
console.log(cars.length)
cars[0] = 'Porshe'
console.log(cars)
cars[cars.length] = 'mazda'
console.log(cars)*/

//циклы

// const cars = ['Mazda', 'Mersedes', 'Ford']
//
// // for (let i = 0; i < cars.length; i++) {
// //     const car = cars[i]
// //     console.log(car)
// // }
//
// for (let car of cars) {
//     console.log(car)
// }

// ОБЬЕКТЫ
const person = {
    firstName: 'lesha',
    lastName: ' Mel',
    year: 1991,
    languages: ['ru', 'en', 'pl'],
    hasWife: true,
    greet: function (){console.log('greed')}
}
console.log(person.firstName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = false
console.log(person)
person.greet()