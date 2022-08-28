const person = {
    name: 'Lesha',
    age: '31',
    isProgrammer: true,
    languages: ['ru','bel', 'pl'],
    'complex key': 'Complex Value',
    ['key_' + (1+3)]: 'Comouted Key', //key_4
    greet() {console.log('greet from pearson')},
    info() {
       /* console.log('this is', this)*/
        console.info('Информация про человека по имени:', this.name)}

}

  /*  console.log(person.name)
    console.log(person["age"])
console.log(person['complex key'])
console.log(person)
person.greet()

person.age++
person.languages.push('ua')

/!*person['key_4'] = undefined*!/
delete person['key_4']
console.log(person)*/

// const name = person.name
// const age = person.age
// const languages = person.languages
// console.log(age);

/*
const {name, age: personAge =10 , languages} = person
console.log(name, personAge, languages)*/

/*for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key', key)
        console.log('value', person[key])
    }
}*/

/*Object.keys(person).forEach((key) => {
    console.log('key', key)
    console.log('value', person[key])
})*/

//Контекст

/*person.info()*/

const logger = {
    keys(){
        console.log('Object keys:', Object.keys(this))
    },
    keysAndValues() {
    Object.keys(this).forEach(key => {
        console.log(`'${key}': ${this[key]}`)
    })
    },
    withParents(top = false, between = false, bottom = false) {
        if (top) {
            console.log('---- Start ----')
        }
        Object.keys(this).forEach((key,index,array) => {
            console.log(`'${key}': ${this[key]}`)
            if (between && index !== array.length -1) {
                console.log('-----------')
            }
        })
            if (bottom) {
                console.log('---- End ----')
            }
    }
}
logger.withParents.call(person, true, true, true)
logger.withParents.apply(person, [true, true, true])
/*logger.keysAndValues.call(person)*/
/*const bound = logger.keys.bind(person)
bound()*/
/*logger.keys.call(person)*/
