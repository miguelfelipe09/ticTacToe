let player1 = document.getElementById('player1-input')
let player2 = document.getElementById('player2-input')
let restart = document.getElementById("restart")
let whoPlays = 1
let jogadas = 0
let whoPlaysText = document.getElementById('text')
let game = [
    "","","",
    "","","",
    "","",""
]
function toPlay(){
    document.querySelectorAll('.btn').forEach(function(element){
        whoPlaysText.innerText = "Vez de " + player1.value
        element.addEventListener('click', function(ev){
            jogadas += 1
            if(whoPlays == 1){
                ev.currentTarget.innerText = 'X'
                element.setAttribute("disabled", "disabled")
                whoPlays = 0
                game[element.dataset.position] = "X"
                whoPlaysText.innerText = "Vez de " + player2.value
            } else if(whoPlays == 0) {
                whoPlaysText.innerText = "Vez de " + player1.value
                ev.currentTarget.innerText = 'O'
                element.setAttribute("disabled", "disabled")
                whoPlays = 1
                game[element.dataset.position] = "O"
            }
            winner()
        })
    })
}
function disableAll(){
    document.querySelectorAll('.btn').forEach(function(element){
        element.setAttribute('disabled', 'disabled')
    })
}
function backgroundWinner(position1, position2, position3){
    document.querySelectorAll('.btn').forEach(function(element){
        if(element.dataset.position == position1 || element.dataset.position == position2 || element.dataset.position == position3){
            element.classList.add('winner')
        }
    })
    return
}
function winner(){
    if(game[0] == "X" && game[1] == "X" && game[2] == "X"){
        whoPlaysText.innerText = player1.value + " Venceu!!!"
        backgroundWinner(0,1,2)
        disableAll()
    }
    else if(game[3] == "X" && game[4] == "X" && game[5] == "X"){
        whoPlaysText.innerText = player1.value + " Venceu!!!"
        backgroundWinner(3,4,5)
        disableAll()
    }
    else if(game[6] == "X" && game[7] == "X" && game[8] == "X"){
        whoPlaysText.innerText = player1.value + " Venceu!!!"
        backgroundWinner(6,7,8)
        disableAll()
    }
    if(game[0] == "X" && game[3] == "X" && game[6] == "X"){
        whoPlaysText.innerText = player1.value + " Venceu!!!"
        backgroundWinner(0,3,6)
        disableAll()
    }
    else if(game[1] == "X" && game[4] == "X" && game[7] == "X"){
        whoPlaysText.innerText = player1.value + " Venceu!!!"
        backgroundWinner(1,4,7)
        disableAll()
    }
    else if(game[2] == "X" && game[5] == "X" && game[8] == "X"){
        whoPlaysText.innerText = player1.value + " Venceu!!!"
        backgroundWinner(2,5,8)
        disableAll()
    }
    else if(game[0] == "X" && game[4] == "X" && game[8] == "X"){
        whoPlaysText.innerText = player1.value + " Venceu!!!"
        backgroundWinner(0,4,8)
        disableAll()
    }
    else if(game[2] == "X" && game[4] == "X" && game[6] == "X"){
        whoPlaysText.innerText = player1.value + " Venceu!!!"
        backgroundWinner(2,4,6)
        disableAll()
    }
    if(game[0] == "O" && game[1] == "O" && game[2] == "O"){
        whoPlaysText.innerText = player2.value + " Venceu!!!"
        backgroundWinner(0,1,2)
        disableAll()
    }
    else if(game[3] == "O" && game[4] == "O" && game[5] == "O"){
        whoPlaysText.innerText = player2.value + " Venceu!!!"
        backgroundWinner(3,4,5)
        disableAll()
    }
    else if(game[6] == "O" && game[7] == "O" && game[8] == "O"){
        whoPlaysText.innerText = player2.value + " Venceu!!!"
        backgroundWinner(6,7,8)
        disableAll()
    }
    if(game[0] == "O" && game[3] == "O" && game[6] == "O"){
        whoPlaysText.innerText = player2.value + " Venceu!!!"
        backgroundWinner(0,3,6)
        disableAll()
    }
    else if(game[1] == "O" && game[4] == "O" && game[7] == "O"){
        whoPlaysText.innerText = player2.value + " Venceu!!!"
        backgroundWinner(1,4,7)
        disableAll()
    }
    else if(game[2] == "O" && game[5] == "O" && game[8] == "O"){
        whoPlaysText.innerText = player2.value + " Venceu!!!"
        backgroundWinner(2,5,8)
        disableAll()
    }
    else if(game[0] == "O" && game[4] == "O" && game[8] == "O"){
        whoPlaysText.innerText = player2.value + " Venceu!!!"
        backgroundWinner(0,4,8)
        disableAll()
    }
    else if(game[2] == "O" && game[4] == "O" && game[6] == "O"){
        whoPlaysText.innerText = player2.value + " Venceu!!!"
        backgroundWinner(2,4,6)
        disableAll()
    }
    else if(jogadas > 7){
        alert("Deu velha")
        jogadas = 0
        disableAll()
    }
}
restart.addEventListener('click', function(){
    document.querySelectorAll('.btn').forEach(function(element){
        element.innerText = ""
        element.disabled = false
        element.classList.remove('winner')
    })
    for (let index = 0; index < game.length; index++) {
        game[index] = "";
    }
    jogadas = 0
    whoPlays = 1
    whoPlaysText.innerText = "Vez de " + player1.value
})
toPlay()

    