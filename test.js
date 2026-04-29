const categories = [
    { id: 1, title: "House Plants", },
    { id: 2, title: "Potter Plants", },
    { id: 3, title: "Seeds", },
    { id: 4, title: "Small Plants", },
    { id: 5, title: "Big Plants", },
    { id: 6, title: "Succulents", },
    { id: 7, title: "Terrariums", },
    { id: 8, title: "Gardening", },
    { id: 9, title: "Accessories", }
];

const flowers = [
    // ------ House Plants (id:1) ------
    { id: 1, name: "Barberton Daisy", price: 119.00, oldPrice: null, categoryId: 1, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200" },
    { id: 2, name: "Angel Wing Begonia", price: 169.00, oldPrice: 199.00, categoryId: 1, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200" },
    { id: 3, name: "African Violet", price: 199.00, oldPrice: 229.00, categoryId: 1, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=200" },
    { id: 4, name: "Peace Lily", price: 149.00, oldPrice: null, categoryId: 1, image: "https://images.unsplash.com/photo-1593697973125-d8d4bd4f6a6b?w=200" },
    { id: 5, name: "Fiddle Leaf Fig", price: 299.00, oldPrice: 349.00, categoryId: 1, image: "https://images.unsplash.com/photo-1595411425259-075d6f12b5e6?w=200" },
    { id: 6, name: "Monstera Deliciosa", price: 249.00, oldPrice: null, categoryId: 1, image: "https://images.unsplash.com/photo-1614594971025-d1e0b7a95c2f?w=200" },

    // ------ Potter Plants (id:2) - растения в декоративных горшках ------
    { id: 7, name: "Ceramic Pot Cactus", price: 45.00, oldPrice: null, categoryId: 2, image: "https://images.unsplash.com/photo-1522891093800-1b6da5147e68?w=200" },
    { id: 8, name: "Terracotta Aloe", price: 59.00, oldPrice: 69.00, categoryId: 2, image: "https://images.unsplash.com/photo-1548602168-8a8cce33d8c2?w=200" },
    { id: 9, name: "Hanging Pot Fern", price: 89.00, oldPrice: null, categoryId: 2, image: "https://images.unsplash.com/photo-1597872484300-9f1ea4be27d4?w=200" },
    { id: 10, name: "Glazed Pot Snake Plant", price: 79.00, oldPrice: 99.00, categoryId: 2, image: "https://images.unsplash.com/photo-1593482892280-1e6ca7e35ee9?w=200" },
    { id: 11, name: "Mini Bonsai Pot", price: 129.00, oldPrice: null, categoryId: 2, image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=200" },

    // ------ Seeds (id:3) ------
    { id: 12, name: "Sunflower Seeds", price: 4.99, oldPrice: null, categoryId: 3, image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=200" },
    { id: 13, name: "Basil Seeds", price: 3.49, oldPrice: null, categoryId: 3, image: "https://images.unsplash.com/photo-1633114128174-2f8a497f5f76?w=200" },
    { id: 14, name: "Mint Seeds", price: 2.99, oldPrice: 4.99, categoryId: 3, image: "https://images.unsplash.com/photo-1615485925608-4b2fc65fdcca?w=200" },
    { id: 15, name: "Tomato Seeds", price: 5.49, oldPrice: null, categoryId: 3, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=200" },            // ------ Small Plants (id:4) ------
    { id: 16, name: "Mini Cactus", price: 19.99, oldPrice: null, categoryId: 4, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=200" },
    { id: 17, name: "Baby Spider Plant", price: 24.99, oldPrice: 29.99, categoryId: 4, image: "https://images.unsplash.com/photo-1592853155505-ea9982c26f62?w=200" },
    { id: 18, name: "Tiny Jade", price: 29.99, oldPrice: null, categoryId: 4, image: "https://images.unsplash.com/photo-1598387845775-5f5e6c9f3f7d?w=200" },
    { id: 19, name: "Little Peperomia", price: 34.99, oldPrice: 39.99, categoryId: 4, image: "https://images.unsplash.com/photo-1598387743411-2c8c8a2b4b5a?w=200" },
    { id: 20, name: "Dwarf Pothos", price: 27.99, oldPrice: null, categoryId: 4, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200" },

    // ------ Big Plants (id:5) ------
    { id: 21, name: "Kentia Palm", price: 299.00, oldPrice: 349.00, categoryId: 5, image: "https://images.unsplash.com/photo-1598371839696-5c5bb00c6e03?w=200" },
    { id: 22, name: "Rubber Tree", price: 179.00, oldPrice: null, categoryId: 5, image: "https://images.unsplash.com/photo-1593482892280-1e6ca7e35ee9?w=200" },
    { id: 23, name: "Bird of Paradise", price: 249.00, oldPrice: 279.00, categoryId: 5, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=200" },
    { id: 24, name: "Areca Palm", price: 199.00, oldPrice: null, categoryId: 5, image: "https://images.unsplash.com/photo-1595411425259-075d6f12b5e6?w=200" },

    // ------ Succulents (id:6) ------
    { id: 25, name: "Echeveria Elegans", price: 15.99, oldPrice: null, categoryId: 6, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=200" },
    { id: 26, name: "Haworthia Zebra", price: 19.99, oldPrice: 24.99, categoryId: 6, image: "https://images.unsplash.com/photo-1548602168-8a8cce33d8c2?w=200" },
    { id: 27, name: "Lithops Living Stones", price: 29.99, oldPrice: null, categoryId: 6, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=200" },
    { id: 28, name: "String of Pearls", price: 39.99, oldPrice: 49.99, categoryId: 6, image: "https://images.unsplash.com/photo-1614594971025-d1e0b7a95c2f?w=200" },
    { id: 29, name: "Burro's Tail", price: 34.99, oldPrice: null, categoryId: 6, image: "https://images.unsplash.com/photo-1598387845775-5f5e6c9f3f7d?w=200" },
    { id: 30, name: "Jade Plant", price: 44.99, oldPrice: 59.99, categoryId: 6, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=200" },
    { id: 31, name: "Open Glass Terrarium", price: 89.00, oldPrice: null, categoryId: 7, image: "https://images.unsplash.com/photo-1633933358116-a27b9e7e6f2c?w=200" },
    { id: 32, name: "Closed Moss Terrarium", price: 129.00, oldPrice: 149.00, categoryId: 7, image: "https://images.unsplash.com/photo-1633933358116-a27b9e7e6f2c?w=200" },
    { id: 33, name: "Air Plant Terrarium", price: 69.00, oldPrice: null, categoryId: 7, image: "https://images.unsplash.com/photo-1633933358116-a27b9e7e6f2c?w=200" },
    { id: 34, name: "Geometric Terrarium", price: 149.00, oldPrice: 179.00, categoryId: 7, image: "https://images.unsplash.com/photo-1633933358116-a27b9e7e6f2c?w=200" },            // ------ Gardening (id:8) ------
    { id: 35, name: "Pruning Shears", price: 25.00, oldPrice: null, categoryId: 8, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200" },
    { id: 36, name: "Garden Trowel Set", price: 35.00, oldPrice: 45.00, categoryId: 8, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200" },
    { id: 37, name: "Watering Can", price: 49.00, oldPrice: null, categoryId: 8, image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=200" },
    { id: 38, name: "Organic Fertilizer", price: 19.99, oldPrice: 24.99, categoryId: 8, image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=200" },

    // ------ Accessories (id:9) ------
    { id: 39, name: "Plant Stand", price: 59.00, oldPrice: null, categoryId: 9, image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200" },
    { id: 40, name: "Self-Watering Pot", price: 79.00, oldPrice: 99.00, categoryId: 9, image: "https://images.unsplash.com/photo-1522891093800-1b6da5147e68?w=200" },
    { id: 41, name: "Grow Light", price: 129.00, oldPrice: null, categoryId: 9, image: "https://images.unsplash.com/photo-1593482892280-1e6ca7e35ee9?w=200" },
    { id: 42, name: "Humidity Tray", price: 29.99, oldPrice: 34.99, categoryId: 9, image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=200" }
];
const flowersBlock = document.querySelector('section.flowers')
const flowerTemplate = document.getElementById('flower_template')

const paginationBlock = document.querySelector('.pagination')
const prevBtn = paginationBlock.querySelector('.pagination_btn.prev')
const nextBtn = paginationBlock.querySelector('.pagination_btn.next')
const paginationItemsBlock = paginationBlock.querySelector('.pagination_items')
const paginationItems = paginationItemsBlock.getElementsByClassName('pagination_items_item')
const paginationItem = paginationItems[0].cloneNode(true)



let page = 1;
let pageSize = 9;
let totalPage = Math.ceil(flowers.length / pageSize)
paginationItemsBlock.innerHTML = ''
for (let i = 1; i <= totalPage; i++) {
    const item = paginationItem.cloneNode(true)
    item.textContent = i
    item.setAttribute('data-page', i)
    paginationItemsBlock.append(item)
}
function setFlower(data) {
    flowersBlock.innerHTML = '';
    data.forEach(element => {
        const template = flowerTemplate.content.cloneNode(true);
        template.querySelector('h3').textContent = element.name
        template.querySelector('img').src = element.image
        template.querySelector('p').textContent = element.price + ` - ID ${element.id}`
        flowersBlock.append(template)
    });
}

function pagination(fixPage) {
    if (fixPage <= 1) {
        prevBtn.disabled = true
    } else if (prevBtn.disabled) {
        prevBtn.disabled = false
    }
    if (fixPage >= totalPage) {
        nextBtn.disabled = true
    } else if (prevBtn.disabled) {
        nextBtn.disabled = false
    }
    let findPageItem = Array.from(paginationItems, (el) => {
        el.classList.remove('active')
        return el
    }).find(el => el.dataset.page == fixPage)
    findPageItem.classList.add('active')
    const paginatedEls = flowers.slice((fixPage - 1) * pageSize, pageSize * fixPage)
    setFlower(paginatedEls)
}


nextBtn.addEventListener('click', () => {
    if (page + 1 > totalPage) return
    page++
    pagination(page)
})

prevBtn.addEventListener('click', () => {
    if (page - 1 < 1) return
    page--
    pagination(page)
})

for (let pageItem of paginationItems) {
    pageItem.addEventListener('click', () => {
        let currentPage = pageItem.dataset.page
        page = currentPage
        pagination(currentPage)
    })
}

pagination(page)