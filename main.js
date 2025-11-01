const board = document.getElementById("board")
const score = document.getElementById("score")
const result = document.getElementById("result")
const grid = 4
let cats = []
let scoreValue = 0



function gameBoard() {
    for (let i = 0; i < 16; i++) {
        const cat = document.createElement("div")
        cat.innerHTML = 0
        cat.classList.add('x0')
        board.appendChild(cat)
        cats.push(cat)
    }
    generate()
    generate()
}
gameBoard()

//are there zeros on the board
function checkEmptySpace() {
    let zeros = 0
    for (let i = 0; i < 16; i++) {
        if (cats[i].innerHTML == 0) {
            zeros++
        }
    }
    if (zeros === 0) {
        return false
    } return true
}
//false = no lose
function checkHorizontal() {
    for (let i = 0; i < 15; i++) {
        if (cats[i].innerHTML === cats[i + 1].innerHTML) {
            return false
        } else return true
    }
}
checkHorizontal()
//false = no lose
function checkVertical() {
    for (let i = 0; i < 4; i++) {
        if (cats[i].innerHTML === cats[i + 4].innerHTML) {
            return false
        } else return true
    }
}
checkVertical()
function generate() {
    let emptyspace = checkEmptySpace()
    if (emptyspace == true) {
        const randomNumber = Math.floor(Math.random() * cats.length)
        if (cats[randomNumber].innerHTML == 0) {
            cats[randomNumber].innerHTML = 2
        } else {
            generate()
        }
    }
}

function right() {
    for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
            let row = [parseInt(cats[i].innerHTML),
            parseInt(cats[i + 1].innerHTML),
            parseInt(cats[i + 2].innerHTML),
            parseInt(cats[i + 3].innerHTML)]

            let filter = row.filter(num => num)
            let missing = 4 - filter.length
            let zeros = Array(missing).fill(0)
            let newRow = zeros.concat(filter)

            cats[i].innerHTML = newRow[0]
            cats[i + 1].innerHTML = newRow[1]
            cats[i + 2].innerHTML = newRow[2]
            cats[i + 3].innerHTML = newRow[3]

        }
    }
}
function left() {
    for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
            let row = [parseInt(cats[i].innerHTML),
            parseInt(cats[i + 1].innerHTML),
            parseInt(cats[i + 2].innerHTML),
            parseInt(cats[i + 3].innerHTML)]

            let filter = row.filter(num => num)
            let missing = 4 - filter.length
            let zeros = Array(missing).fill(0)
            let newRow = filter.concat(zeros)

            cats[i].innerHTML = newRow[0]
            cats[i + 1].innerHTML = newRow[1]
            cats[i + 2].innerHTML = newRow[2]
            cats[i + 3].innerHTML = newRow[3]
        }
    }
}

function up() {
    for (let i = 0; i < 4; i++) {
        let column = [parseInt(cats[i].innerHTML),
        parseInt(cats[i + 4].innerHTML),
        parseInt(cats[i + 8].innerHTML),
        parseInt(cats[i + 12].innerHTML)]
        let filter = column.filter(num => num)
        let missing = 4 - filter.length
        let zeros = Array(missing).fill(0)
        let newColumn = filter.concat(zeros)
        cats[i].innerHTML = newColumn[0]
        cats[i + 4].innerHTML = newColumn[1]
        cats[i + 8].innerHTML = newColumn[2]
        cats[i + 12].innerHTML = newColumn[3]
    }
}
function down() {
    for (let i = 0; i < 4; i++) {
        let column = [parseInt(cats[i].innerHTML),
        parseInt(cats[i + 4].innerHTML),
        parseInt(cats[i + 8].innerHTML),
        parseInt(cats[i + 12].innerHTML)]
        let filter = column.filter(num => num)
        let missing = 4 - filter.length
        let zeros = Array(missing).fill(0)
        let newColumn = zeros.concat(filter)
        cats[i].innerHTML = newColumn[0]
        cats[i + 4].innerHTML = newColumn[1]
        cats[i + 8].innerHTML = newColumn[2]
        cats[i + 12].innerHTML = newColumn[3]
    }
}
function combineRow() {
    for (let i = 0; i < 15; i++) {
        if (cats[i].innerHTML === cats[i + 1].innerHTML) {
            let combineTotal = parseInt(cats[i].innerHTML) + parseInt(cats[i + 1].innerHTML)
            cats[i].innerHTML = combineTotal
            cats[i + 1].innerHTML = 0
            scoreValue += combineTotal
            score.innerHTML = scoreValue
            // cats[i].classList.forEach(className => {
            //     if (className.startsWith('x')) {
            //         cats[i].classList.remove('x0')
            //         cats[i].classList.add('x' + combineTotal)
            //     }
            // })
        }
    }
    win()
    lose()
}
function combineColumn() {
    for (let i = 0; i < 12; i++) {
        if (cats[i].innerHTML === cats[i + 4].innerHTML) {
            let combineTotal = parseInt(cats[i].innerHTML) + parseInt(cats[i + 4].innerHTML)
            cats[i].innerHTML = combineTotal
            cats[i + 4].innerHTML = 0
            scoreValue += combineTotal
            score.innerHTML = scoreValue
            // cats[i].classList.forEach(className => {
            //     if (className.startsWith('x')) {
            //         cats[i].classList.remove()
            //         cats[i].classList.add('x'+ combineTotal)
            //     }
            // })
        }
    }
    win()
    lose()
}
function win() {
    let win = winVar()
    if (win == true)
        result.style.display = 'block'
    result.innerHTML = 'you win!! keep playing iyw'
}
function winVar() {
    for (let i = 0; i < 16; i++) {
        if (cats[i].innerHTML == 2048) {
            return true
        } return false
    }
}

function lose() {
    let lose = loseVar()
    if (lose == true) {
        result.style.display = 'block'
        document.getElementById("result").innerHTML = 'wuh woh you lost'
    }
}

function loseVar() {
    let emptyspace = checkEmptySpace()
    let horizontal = checkHorizontal()
    let vertical = checkVertical()
    if (emptyspace == false) {
        return horizontal && vertical
    } else return false
}

function changeSprite() {

}

function detectKey(k) {
    checkEmptySpace()
    checkHorizontal()
    checkVertical()
    winVar()
    loseVar()
    // console.log(loseVar(), winVar(), checkEmptySpace())
    if (k.key === 'ArrowLeft') {
        keyLeft()
    } else if (k.key === 'ArrowRight') {
        keyRight()
    } else if (k.key === 'ArrowUp') {
        keyUp()
    } else if (k.key === 'ArrowDown') {
        keyDown()
    }
}
document.addEventListener('keydown', detectKey)


function keyLeft() {
    left()
    combineRow()
    left()
    generate()
}
function keyRight() {
    right()
    combineRow()
    right()
    generate()
}
function keyUp() {
    up()
    combineColumn()
    up()
    generate()
}
function keyDown() {
    down()
    combineColumn()
    down()
    generate()
}