const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')[0] //старый метод
//const heading2 = document.getElementsByClassName('h2-class')[0] тоже
//const heading2 = document.querySelector('.h2-class')
const heading2 = document.querySelector('#subHello') //всегда 1 элемент первый попавшийся
//console.dir(heading2)
//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
//console.log(h2List)
const heading3 = h2List[h2List.length - 1] //[1]
console.log(heading3)

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = 'white'
    node.style.textAlign = 'center'
    node.style.backgroundColor = color
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}
setTimeout(() => {
    addStylesTo(heading, 'JavaScript', 'blue')

},1000)

const link = heading3.querySelector('a')
link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся', 'green', '4rem')

},2000)

setTimeout(() => {
    addStylesTo(heading3.children[0], 'И все получится',)

},3000)

heading.onclick = () => {
if (heading.style.color === 'white'){
    heading.style.color = 'black'
    heading.style.backgroundColor = 'orange'
} else {
    heading.style.color = 'white'
    heading.style.backgroundColor = 'blue'
}}


heading3.addEventListener('dblclick', () => {
    if (heading3.style.color === 'white'){
        heading3.style.color = 'black'
        heading3.style.backgroundColor = 'orange'
    } else {
        heading3.style.color = 'white'
        heading3.style.backgroundColor = 'red'
    }})

