/*
// Number
const num = 42 // integer
const float = 42.42 // float
const pow = 10e3
console.log(pow)
console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER)
console.log('Math.pow53 ', Math.pow(2, 53)-1)
console.log('MIN_SAFE_INTEGER ', Number.MIN_SAFE_INTEGER)
console.log('Max_value', Number.MAX_VALUE)
console.log('Min_value', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('1/0', 1/0)
console.log(Number.NaN) //Not A Number
console.log(typeof NaN)
const weird = 2 / undefined
console.log(isNaN(weird))
console.log(isNaN(42))
console.log(isFinite(Infinity))
console.log(isFinite(33))

const stringInt = '40'
const stringFloat = '40.42'
console.log(Number.parseInt(stringInt) +2)
console.log(parseInt(stringInt) +2)
console.log(Number(stringInt) +2)
console.log(+stringInt +2)

console.log(parseFloat(stringFloat) +2)*/

/*console.log(0.4+0.2)
console.log((2 / 5) + (1/5))
console.log(+(0.4+0.2).toFixed(1))
console.log(parseFloat((0.4+0.2).toFixed(1)))*/

//BigInt
/*console.log( 900719925474099999999999999999n -1n)
// console.log(10n-4) //error
// console.log(10.555n) //error
console.log(parseInt(10n)-4)
console.log(10n - BigInt(4))
console.log(5n / 2n)*/

//Math
console.log(Math.E)
console.log(Math.PI)
console.log(Math.sqrt(26))
console.log(Math.pow(5,3))
console.log(Math.abs(-25))
console.log(Math.min(42,12,32,22,11,422))
console.log(Math.floor(4.9))
console.log(Math.ceil(4.9))
console.log(Math.round(4.9))
console.log(Math.trunc(4.9))
console.log(Math.random())

//Example рандомное число в диапозоне
/*

function getRandomBetween (min,max) {
    return Math.floor(Math.random() * (max - min+1) + min)
}
console.log(getRandomBetween(10, 42))
*/
