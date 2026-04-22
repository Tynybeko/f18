const parents = [
    { id: 1, name: "Ali", age: 40, city: "Tashkent" },
    { id: 2, name: "Vali", age: 38, city: "Samarkand" }
]

const children = [
    { id: 1, name: "Ali Jr", age: 10, parentId: 1 },
    { id: 2, name: "Ali Jr 2", age: 7, parentId: 1 },
    { id: 3, name: "Vali Jr", age: 12, parentId: 2 }
]
const BASE_URL = `https://jsonplaceholder.typicode.com/`
const parentTemplate = document.getElementById('parent_template')
const parentsBlocks = document.querySelector('.parents-block')
const blocks = parentsBlocks.getElementsByClassName('parents-item')
const loader = document.getElementById('loader');
async function getParents() {
    try {
        loader.classList.remove('hidden')
        const response = await fetch(BASE_URL + 'users')
        if (response.ok) {
            const data = await response.json()
            data.forEach(parent => {
                const clone = parentTemplate.content.cloneNode(true);
                clone.querySelector('.parents-item').setAttribute('data-parent', parent.id)
                clone.querySelector('.fullname').textContent = parent.name
                clone.querySelector('.age strong').textContent = parent.email
                clone.querySelector('.address strong').textContent = parent.address.city
                parentsBlocks.append(clone)
            })
            for (let item of blocks) {
                item.addEventListener('click', async (e) => {
                    const target = e.currentTarget
                    const loading = target.querySelector('.loading')
                    const isOpen = target.classList.toggle('child')
                    if (!isOpen) {
                        childsBlocks.innerHTML = ''
                        return
                    }
                    try {
                        loading.classList.remove('hidden')
                        const idParent = target.dataset.parent
                        const response = await fetch(BASE_URL + `users/${idParent}/posts`)
                        if (response.ok) {
                            const data = await response.json()
                            const childsBlocks = target.querySelector('.childs')

                            data.forEach(el => {
                                const clone = parentTemplate.content.cloneNode(true);
                                clone.querySelector('.fullname').textContent = el.title
                                clone.querySelector('.age').textContent = el.body
                                clone.querySelector('.address').remove()
                                childsBlocks.append(clone)
                            })
                        }


                    } catch (err) {
                        console.log(err);

                    } finally {
                        loading.classList.add('hidden')

                    }

                })
            }
        } else {
            throw new Error('Не удалось получить данные')
        }

    } catch (err) {

    } finally {
        loader.classList.add('hidden')
    }

}


getParents()