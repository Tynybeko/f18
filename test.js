let loginBtn = document.getElementById('login')
let modal = document.querySelector('.modal')

let closeBtn = modal.querySelector('.close_btn')

loginBtn.addEventListener('click', () => {
    modal.classList.add('opened')
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove('opened')
})


modal.addEventListener('click', () => {
    modal.classList.remove('opened')
})

