let whoseTurn = document.getElementsByTagName('h3')
whoseTurn.current = 'x'
const board = document.getElementsByClassName("board")[0]
const setOf3 = document.getElementsByTagName('tr')
const space = document.getElementsByTagName('td')

function drawBoard(num) {
    for (let i=0; i<num; i++) {
        board.createElement(setOf3)
        function draw3() {
        setOf3.appendChild(space)
        setOf3.appendChild(space)
        setOf3.appendChild(space)
        }
        draw3()
    }
}    

drawBoard(3)

// function drawBoard() {
//     for(let i =0; i< 9; i++){
//         const gameSquare = document.createElement("td")
//         gameGrid.appendChild(gameSquare)
//     }
// }
// drawBoard()

board.addEventListener('click', function fillSpace() {
    let spotClicked = clickEvent.target
    if (spotClicked.matches(gameSquare)) {
        if (spotClicked.className) {
            window.alert("This space is already taken!")
        } else if (whoseTurn === 'x') {
            spotClicked.className='anX'
        } else {
            spotClicked.className='anO'
        }
    }
})


        // for(let i =0; i< 9; i++){
        //     console.log(gameGrid)
        //     console.log(i)
        //     let gameSquare = document.createElement("div")
        //     gameGrid.appendChild(gameSquare)
        //     console.log('')
        //   }
    

