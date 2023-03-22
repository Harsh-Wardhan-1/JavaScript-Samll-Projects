

const washBtn = document.getElementById("wash-btn")
const weedBtn = document.getElementById("weed-btn")
const lawnBtn = document.getElementById("lawn-btn")
const display = document.getElementById("display")
const totalEl = document.getElementById("total")

let tasks = []
let sum = 0

washBtn.addEventListener("click", function () { addElement("wash-btn") })
lawnBtn.addEventListener("click", function () { addElement("lawn-btn") })
weedBtn.addEventListener("click", function () { addElement("weed-btn") })



function addElement(ele) {
    let data = document.getElementById(ele).textContent
    let arr = data.split(':')
    let task = arr[0].trim()
    const check = tasks.some(a => a.work === task)
    if (!check) {
        tasks.push({ work: task, amount: value(task) })

        const remove = document.createElement("button")
        remove.className = "remove"
        remove.id = ele + "-rem"
        remove.innerHTML = "Remove"

        const line = document.createElement("div")
        line.id = ele + "-dis"
        line.innerHTML = tasks[tasks.length - 1].work + ":  " + tasks[tasks.length - 1].amount + " "

        line.appendChild(remove)
        display.appendChild(line)
        total(tasks[tasks.length - 1].amount)

        remove.addEventListener("click", function () { divRemove(ele) })
    }
}

function value(task) {
    if (task === "Wash Car") {
        return 10
    }
    else if (task === "Mow Lawn") {
        return 20
    }
    else if (task === "Pull Weed") {
        return 30
    }
}

function total(add) {
    sum += add
    totalEl.innerHTML = "Total: " + sum
}

function totalSub(sub) {
    sum -= sub
    totalEl.innerHTML = "Total: " + sum
}

function divRemove(ele) {
    console.log("hello")
    let data = document.getElementById(ele).textContent
    let arr = data.split(':')
    let task = arr[0].trim()
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].work === task) {
            totalSub(tasks[i].amount)
            tasks.splice(i, 1)
        }
    }
    let divId = document.getElementById(ele + "-rem").parentElement;
    divId.remove()
}