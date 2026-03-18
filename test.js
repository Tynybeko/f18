const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
let block_content = document.querySelector('section.sneakers_blocks')

let blocks = document.querySelectorAll('.sneakers_blocks_item')
let blocks2 = document.getElementsByClassName('sneakers_blocks_item')


let btn = document.querySelector('button.add_button')

// btn.onclick = () => {
//     let text = prompt('Enter text')
//     // block_content.innerHTML += `<div class="sneakers_blocks_item">
//     //         <p>${text}</p>
//     //     </div>`

//     let div = document.createElement('div')
//     div.classList.add('sneakers_blocks_item')
//     let p = document.createElement('p')
//     p.textContent = text
//     div.append(p)
//     block_content.prepend(div)
// }

for (let block of blocks2) {
    let btn = block.querySelector('button.sneakers_blocks_item--btn')
    btn.onclick = () => {
        btn.classList.toggle('active')
    }
}

console.log(blocks);
console.log(blocks2);
