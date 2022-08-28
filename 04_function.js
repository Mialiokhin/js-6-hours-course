/*
// Функции
//Function Declaration
function greet(name) {
    console.log('Privet - ', name)
}

//Function Expression
const greet2 = function greer2(name) {
    console.log('Privet2 - ', name)
}

/!*
greet('Lena')
greet2('Lena')

console.log(typeof greet)*!/

/!*console.dir(greet)*!/

//Анонимные функции
let counter = 0
const interval = setInterval(function () {
    if (counter == 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)*/

// Стрелочные функции

/*function greet(name) {
    console.log('Privet - ', name)
}
const arrow = (name) => {
    console.log('Privet - ', name)
}
arrow('ffffff')

const arrow2 = name => console.log('Privet - ', name)
arrow2('fffffssssss')

const pow2 = num => num ** 2
console.log(pow2(5))*/

//Параметры по умолчанию

/*const sum = (a=40,b=a*2) => a + b
console.log(sum())

function sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    }
return result
}
const res = sumAll(1,2,3,4,5,6,7,8)
console.log(res)*/

//Замыкание

function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}
const logWithLastName =  createMember('Lesha')
console.log(logWithLastName('Mel'))
console.log(logWithLastName('PoPOpo'))
