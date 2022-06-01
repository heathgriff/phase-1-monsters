
// When the page loads, show the first 50 monsters. Each monster's name, age, and description should be shown.

    // 1) FETCH the data
        // http://localhost:3000/monsters/?_limit=50&_page=1
    // 2) render the data to the DOM
        // each monster's name, age, description   
        // forEach(), render data

// Above your list of monsters, you should have a form to create a new monster. You should have fields for name, age, and description, and a 'Create Monster Button'. When you click the button, the monster should be added to the list and saved in the API.

    // 3) create monster

let formContainer = document.querySelector("#create-monster")
    //console.log(formContainer)
let form = document.createElement('form')
form.id = 'monster-form'
let nameLabel = document.createElement('label')
let nameInput = document.createElement('input')
let ageLabel = document.createElement('label')
let ageInput = document.createElement('input')
let descriptionLabel = document.createElement('label')
let descriptionInput = document.createElement('input')
let h2 = document.createElement('h2')
let button = document.createElement('button')
button.innerText = "create monster!!!"



document.addEventListener("DOMContentLoaded", () => {
    // what needs to happen on page load

    fetchMonsters()
    createForm()
    document.querySelector("#monster-form").addEventListener('submit', (e) => {
        e.preventDefault()
        debugger;
        postNewMonster()
    })
})

function fetchMonsters() {

    let monsterContainer = document.querySelector("#monster-container")
    // console.log(monsterContainer)

    fetch('http://localhost:3000/monsters/?_limit=50&_page=1') 
    .then(resp => {
        // console.log('resp status', resp.status) // 200
        // console.log('resp ok', resp.ok) // true
        return resp.json() 
    })
    .then(monsterData => {
        // console.log('monsterData', monsterData)
        monsterData.forEach((monster) => {
            // render name, age, description onto DOM
            // create h1 as container within div
            let card = document.createElement('div')
            let name = document.createElement('h2')
            let age = document.createElement('h4')
            let description = document.createElement('p')

            name.innerText = monster.name
            age.innerText = `age: ${monster.age}`
            description.innerText = `bio: ${monster.description}`
            
            card.append(name, age, description)
            monsterContainer.appendChild(card)
        })
    })
}

// fetch('http://localhost:3000/monsters/?_limit=50&_page=1') 
//     .then(resp => {
//         console.log('resp status', resp.status) // 200
//         console.log('resp ok', resp.ok) // true
//         return resp.json() 
//     })
//     .then(monsterData => {
//         console.log('monsterData', monsterData)
//         monsterData.forEach((monster) => {
//             // render name, age, description onto DOM
//             // create h1 as container within div
//             let card = document.createElement('div')
//             let name = document.createElement('h4')
//             let age = document.createElement('p')
//             let description = document.createElement('p')
            
//             card.append(name, age, description)
//             monsterContainer.appendChild(card)
//         })
//     })

function createForm() {
   
    h2.innerText = 'create monster'
    nameLabel.innerText = 'name: '
    ageLabel.innerText = 'age: '
    descriptionLabel.innerText = 'description: '

    form.append(nameLabel, nameInput, ageLabel, ageInput, descriptionLabel, descriptionInput)
     console.log(form)
    formContainer.append(h2, form),
    // console.log('form container', formContainer)

    postNewMonster()
}

function postNewMonster() {
    fetch('http://localhost:3000/monsters', {
        method: POST,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json.stringify({name, age, description})
    })
    .then(resp => resp.json)
    .then(monster => {
        console.log(monster)
    })
}


// At the end of the list of monsters, show a button. When clicked, the button should load the next 50 monsters and show them.