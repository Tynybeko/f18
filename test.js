const data = [
    {
        id: 1,
        title: 'Nike',
        price: 200
    },
    {
        id: 2,
        title: 'Puma',
        price: 170
    },
    {
        id: 3,
        title: 'Adidas',
        price: 250
    },
]

let cart = []


let sneakersContent = document.querySelector('.sneakers_content')
let sneakersItemTemplate = document.getElementById('sneakers_item_template')
for (let item of data) {
    const template = sneakersItemTemplate.content.cloneNode(true)
    template.querySelector('h2').textContent = item.title
    template.querySelector('p').textContent = item.price
    template.querySelector('div').addEventListener('click', () => {
        let newCart = [...cart, item]
        setCartItem(newCart)
        cart = newCart
    })
    sneakersContent.append(template)

}


let openBtn = document.querySelector('.open_cart_btn')
let rightBar = document.getElementById('right_bar')
let rightBarContent = rightBar.querySelector('.content')
let rightBarContentBody = rightBar.querySelector('.content .body')
let closeBtn = rightBar.querySelector('.close_btn')

function setCartItem(cartItems) {
    for (let item of cartItems) {
        const template = sneakersItemTemplate.content.cloneNode(true)
        template.querySelector('h2').textContent = item.title
        template.querySelector('p').textContent = item.price
        rightBarContentBody.append(template)
    }
}

openBtn.addEventListener('click', () => {
    rightBar.classList.toggle('closed')
})


closeBtn.addEventListener('click', () => {
    rightBarContent.classList.add('close')
    const closeContent = () => {
        rightBarContent.classList.remove('close')
        rightBar.classList.add('closed')
        rightBarContent.removeEventListener('animationend', closeContent)
    }
    rightBarContent.addEventListener('animationend', closeContent)
})