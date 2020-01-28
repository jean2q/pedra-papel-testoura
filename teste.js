
function computerPlay() {
    const jogadas = ['Pedra', 'Papel', 'Tesoura'] 
    computerSelection = jogadas[(Math.floor(Math.random() * (3)))]
    console.log('A jogada do computador é ' + (computerSelection))
    return computerSelection
}
computerPlay()