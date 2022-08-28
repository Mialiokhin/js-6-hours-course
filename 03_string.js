/*const name = 'Lesha'*/
/*
const age = 31
// const output = 'Privet, menia zovyt ' + name + ' i moi vozrast ' + age + ' let'
function getAge() {
    return age
}*/
/*const output = `Привет, меня зовут ${name} и мой возраст ${age < 40 ? 'a' : 'b' } лет`
console.log(output)*/
/*
const output = `
<div> This is div <div>
<p>this is p</p>
`
console.log(output)*/
const name = 'Lesha'
console.log (name.length)
console.log (name.toUpperCase())
console.log (name.toLowerCase())
console.log (name.charAt(2))
console.log (name.indexOf('L'))
console.log (name.toLowerCase().startsWith('les'))
console.log (name.endsWith('ha'))
console.log (name.repeat(3))
const string = '                  password'
console.log (string.trim())
console.log (string.trimLeft())
console.log (string.trimRight())

function logPerson(s, name, age) {
    if (age < 0 ) {
        age = 'еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`}
const  personName = 'Leshka'
const  personName2 = 'мАШКА'
const personAge = '31'
const personAge2 = '-31'
const output  = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2  = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)