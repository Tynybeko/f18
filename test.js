const data = [
  {
    id: 1,
    title: 'Apple',
    desc: 'Свежие красные яблоки с натуральной сладостью и легкой кислинкой. Отлично подходят для перекуса, салатов и десертов.',
    price: 100
  },
  {
    id: 2,
    title: 'Banana',
    desc: 'Спелые бананы с мягкой текстурой и насыщенным вкусом. Идеально подходят для завтрака, смузи и полезных десертов.',
    price: 80
  },
  {
    id: 3,
    title: 'Orange',
    desc: 'Сочные апельсины с ярким цитрусовым вкусом. Богаты витамином C и отлично подходят для свежевыжатого сока.',
    price: 120
  },
  {
    id: 4,
    title: 'Mango',
    desc: 'Ароматный манго с нежной мякотью и сладким тропическим вкусом. Отличный вариант для десертов и фруктовых салатов.',
    price: 150
  },
  {
    id: 5,
    title: 'Pineapple',
    desc: 'Свежий ананас с сочной мякотью и освежающим вкусом. Подходит для коктейлей, десертов и легких закусок.',
    price: 200
  },
  {
    id: 6,
    title: 'Strawberry',
    desc: 'Сладкая клубника с ярким ароматом и нежной текстурой. Идеально подходит для десертов, выпечки и свежих салатов.',
    price: 90
  },
  {
    id: 7,
    title: 'Watermelon',
    desc: 'Спелый арбуз с сочной и сладкой мякотью. Отлично освежает в жаркую погоду и подходит для летних фруктовых тарелок.',
    price: 110
  },
  {
    id: 8,
    title: 'Grapes',
    desc: 'Свежий виноград с натуральной сладостью и мягкой текстурой. Подходит для перекуса, десертов и фруктовых салатов.',
    price: 95
  },
  {
    id: 9,
    title: 'Peach',
    desc: 'Сочный персик с нежной мякотью и приятным сладким вкусом. Отличный вариант для десертов и свежих фруктовых блюд.',
    price: 130
  },
  {
    id: 10,
    title: 'Cherry',
    desc: 'Свежая вишня с насыщенным вкусом и легкой кислинкой. Идеально подходит для десертов, выпечки и летних напитков.',
    price: 160
  },
  {
    id: 11,
    title: 'Ананас',
    desc: 'Свежая вишня с насыщенным вкусом и легкой кислинкой. Идеально подходит для десертов, выпечки и летних напитков.',
    price: 160
  }
];
let content = document.querySelector('main>.items')
let productTemplate = document.getElementById('product-template')


let ourDialog = document.getElementById('item_dialog')
let btn = document.querySelector('.open_dialog')

let cancelBtn = ourDialog.querySelector('button.cancel')

let addForm = ourDialog.querySelector('form')
addForm.onsubmit = (e) => {
  e.preventDefault()
  let formData = new FormData(addForm)
  let obj = Object.fromEntries(formData.entries())
  data.push({
    ...obj,
    id: data.length + 1
  })
  setProductItem(data)
  addForm.reset()
  ourDialog.close()
}
cancelBtn.onclick = () => {
  addForm.reset()
  ourDialog.close()
}


btn.onclick = () => {
  ourDialog.showModal()
}


function setProductItem(data) {
  content.innerHTML = ''
  data.forEach(el => {
    let clone = productTemplate.content.cloneNode(true)
    clone.querySelector('.item-title').textContent = el.title
    let itemContent = clone.querySelector('.item-content')
    itemContent.textContent = el.desc
    itemContent.onclick = () => {
      itemContent.classList.toggle('wrap')
    }
    clone.querySelector('.item-price>strong').textContent = el.price
    content.append(clone)
  })
}

setProductItem(data)