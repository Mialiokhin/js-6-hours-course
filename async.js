// Event Loop

/*setTimeout(() => {
    console.log('timeout')
    }, 2500)*/

/*
const timeout = setTimeout(() => {

    console.log('timeout')
}, 2500)
clearTimeout(timeout)*/

// const inerval = setInterval(() => {
//
//     console.log('timeout')
// }, 1000)
// /*clearInterval(inerval)*/

/*const delay = (callback, wait = 1000) => {
    setTimeout(callback, wait)
        }
        delay(() => {
            console.log('after 2 seconds')
        }, 2000)*/
const delay = (wait = 1000) => {
   const promise =  new Promise((resolve, reject) =>{
    setTimeout(() => {
resolve()
    }, wait)
    } )
    return promise
}

/*delay(2500)
.then(() => {
    console.log('after 2 seconds')
})
.catch( err => console.error(err))
.finally(() => console.log('finally'))*/

const getData = () => new Promise( resolve => resolve([
    1,1,2,3,5,6,13
]))
/*getData().then( data => console.log(data))*/

async function assyncExample() {
    await delay(3000)
    const data = await getData()
    console.log('Data', data)
}
assyncExample()