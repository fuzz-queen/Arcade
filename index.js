let whoseTurn = document.getElementsByTagName('h3')
whoseTurn.current = 'x'
const board = document.getElementsByClassName("board")[0]

// function drawBoard(num) {
//     for (let i=0; i<num; i++) {
//         const setOf3 = document.getElementsByTagName('tr')
//         const space = document.getElementsByTagName('td')
//         board.appendChild(setOf3)
//         function draw3() {
//         setOf3.appendChild(space)
//         setOf3.appendChild(space)
//         setOf3.appendChild(space)
//         }
//         draw3()
//     }
// }    

const p1EnterName = document.getElementById("name1in")
p1EnterName.addEventListener('click', function() {

})

const p2EnterName = document.getElementById("name2in")

function drawBoard() {
    for(let i =0; i< 9; i++){
        let space = document.createElement('div')
        board.appendChild(space)
        space.className = 'square'
        space.index = i
        console.log(board)
    }
}
drawBoard()

board.addEventListener('click', function (evt) {
    console.log("let's see where this goes")
    let spotClicked = evt.target
    
    console.log(evt.target)
    if (!spotClicked.innerText) {
        console.log('sup yo')
        if (whoseTurn.current === 'x') {
            spotClicked.className='anX'
            spotClicked.innerText='X'
            
            whoseTurn.innerText = "O's turn"
        } else {
            spotClicked.className='anO'
            spotClicked.innerText='O'
            
            whoseTurn.innerText = "X's turn"
        }
    }
    console.log('square index:' + spotClicked.index)
    function isWinner(s1, s2, s3) {
        console.log(`isWinner: s1 ${s1} s2 ${s2} s3 ${s3}`)
        console.log(board.children[s1].className)
        console.log(board.children[s2].className)
        console.log(board.children[s3].className)
        if (board.children[s1].className !== 'square') {
            if (board.children[s1].className === board.children[s2].className && board.children[s2].className === board.children[s3].className) {
                console.log(`${whoseTurn.current} wins!`)
                console.log(`winner!`)
                return true
            } else {
                console.log(`*NO* winner!`)
                return false
            }
        } else {
            console.log(`*NO* winner! (empty square)`)
            return false
        }
    }

    let winner = false

    if (isWinner(0, 1, 2)){
        console.log(`${whoseTurn.current} wins!`)
        winner = true
    }
    if (isWinner(3, 4, 5)) {
        console.log(`${whoseTurn.current} wins!`)
        winner = true
    }
    if (isWinner(6, 7, 8)) {
        console.log(`${whoseTurn.current} wins!`)
        winner = true
    }
    if (isWinner(0, 3, 6)) {
        console.log(`${whoseTurn.current} wins!`)
        winner = true
    }
    if (isWinner(1, 4, 7)) {
        console.log(`${whoseTurn.current} wins!`)
        winner = true
    }
    if (isWinner(2, 5, 8)) {
        console.log(`${whoseTurn.current} wins!`)
        winner = true
    }
    if (isWinner(0, 4, 8)) {
        console.log(`${whoseTurn.current} wins!`)
        winner = true
    }
    if (isWinner(2, 4, 6)) {
        console.log(`${whoseTurn.current} wins!`)
        winner = true
    }


    if(!winner) {
        let isTie=true;
        for (let i=0; i<9; i++) {
            console.log(board.children[i].className)
            if (board.children[i].className === 'square'){
                isTie=false;
            } 
        }
        if (isTie === true) {
            window.alert("It's a tie, dawg!")
        }
        if (whoseTurn.current === 'x') {
            whoseTurn.current = 'o'
        } else {
            whoseTurn.current = 'x'
        }
    } else {
        alert(`${whoseTurn.current} wins!`)
    }
})

