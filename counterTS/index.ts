const counter = document.getElementById('counter')
const increment = document.getElementById('increment') 
const decrement = document.getElementById('decrement') 
//Unlike javascript, typescript doesn't have buuilt in awareness of the dom manipulation structure

let count = 0

function updateCounter() {
    counter.innerHTML = count.toString()
}

increment?.addEventListener('click', () => {
    count++
    updateCounter()
})

decrement?.addEventListener('click', () => {
    count--
    updateCounter()
})

updateCounter()

//NOTES: This code works completely fine even when getting an error saying "document is not defined"