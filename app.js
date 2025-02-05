const squares = document.querySelectorAll('.board .sqr')
const result = document.querySelector('#result')
const displayCurrentPlayer = document.querySelector('#current-player')
let currentPlayer = 1
let gameOver = false

// Winning combinations (index of the squares in the grid)
const winningArrays = [
  // Horizontal- right to lift
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [11, 12, 13, 14],
  [12, 13, 14, 15],
  [13, 14, 15, 16],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [18, 19, 20, 21],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [25, 26, 27, 28],
  [26, 27, 28, 29],
  [27, 28, 29, 30],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [32, 33, 34, 35],
  [33, 34, 35, 36],
  [34, 35, 36, 37],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],

  // Vertical up to down
  [0, 7, 14, 21],
  [1, 8, 15, 22],
  [2, 9, 16, 23],
  [3, 10, 17, 24],
  [4, 11, 18, 25],
  [5, 12, 19, 26],
  [6, 13, 20, 27],
  [7, 14, 21, 28],
  [8, 15, 22, 29],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 18, 25, 32],
  [12, 19, 26, 33],
  [13, 20, 27, 34],
  [14, 21, 28, 35],
  [15, 22, 29, 36],
  [16, 23, 30, 37],
  [17, 24, 31, 38],
  [18, 25, 32, 39],
  [19, 26, 33, 40],
  [20, 27, 34, 41],

  // Diagonal - inclined
  [0, 8, 16, 24],
  [1, 9, 17, 25],
  [2, 10, 18, 26],
  [3, 11, 19, 27],
  [4, 12, 20, 28],
  [5, 13, 21, 29],
  [6, 14, 22, 30],
  [7, 15, 23, 31],
  [8, 16, 24, 32],
  [9, 17, 25, 33],
  [10, 18, 26, 34],
  [11, 19, 27, 35],
  [12, 20, 28, 36],
  [13, 21, 29, 37],
  [14, 22, 30, 38],
  [15, 23, 31, 39],
  [16, 24, 32, 40],
  [17, 25, 33, 41],

  [6, 12, 18, 24],
  [5, 11, 17, 23],
  [4, 10, 16, 22],
  [3, 9, 15, 21],
  [2, 8, 14, 20],
  [1, 7, 13, 19],
  [0, 6, 12, 18]
]

const checkBoard = () => {
  for (let x = 0; x < winningArrays.length; x++) {
    const [a, b, c, d] = winningArrays[x]

    // Check if all four squares in the winning combination are taken by the same player
    if (
      squares[a].classList.contains('player-one') &&
      squares[b].classList.contains('player-one') &&
      squares[c].classList.contains('player-one') &&
      squares[d].classList.contains('player-one')
    ) {
      result.innerHTML = 'Player One Wins!'
      gameOver = true
    } else if (
      squares[a].classList.contains('player-two') &&
      squares[b].classList.contains('player-two') &&
      squares[c].classList.contains('player-two') &&
      squares[d].classList.contains('player-two')
    ) {
      result.innerHTML = 'Player Two Wins!'
      gameOver = true
    }
  }
}

// Handle square clicks
squares.forEach((square, index) => {
  square.onclick = () => {
    if (gameOver) return

    const column = index % 7
    for (let row = 5; row >= 0; row--) {
      const squareIndex = row * 7 + column
      if (!squares[squareIndex].classList.contains('taken')) {
        squares[squareIndex].classList.add('taken')
        if (currentPlayer === 1) {
          squares[squareIndex].classList.add('player-one')
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer
        } else {
          squares[squareIndex].classList.add('player-two')
          currentPlayer = 1
          displayCurrentPlayer.innerHTML = currentPlayer
        }
        checkBoard()
        break
      }
    }
  }
})

// Restart game
const restartButton = document.getElementById('restart-btn')
restartButton.onclick = () => {
  gameOver = false
  result.innerHTML = ''
  displayCurrentPlayer.innerHTML = 1
  squares.forEach((square) => {
    square.classList.remove('taken', 'player-one', 'player-two')
  })
}
