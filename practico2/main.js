const nombreJugador = document.getElementById('name');
const boton = document.getElementById('start');
const eleccion = document.querySelectorAll('.choice');
const result = document.getElementById('result');
let cantidadPartidas=document.getElementById('jugadas');
let playerName = "";
boton.addEventListener('click', () => {
  playerName = nombreJugador.value;

  if (playerName) {
    nombreJugador.disabled = true;
    boton.disabled = true;
    eleccion.forEach(choice => choice.addEventListener('click', play));
  }
});

function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  result.innerHTML = `${playerName}, elegiste ${playerChoice}. La computadora
   eligió ${computerChoice}.<br>${winner}`;
}

function getComputerChoice() {
  const choices = ['PIEDRA', 'PAPEL', 'TIJERAS'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getWinner(player, computer) {
  let cantPartidas=0;
  if (player === computer) {
    return "EMPATE!";
    cantPartidas++;
  } else if (
    (player === 'PIEDRA' && computer === 'TIJERAS') ||
    (player === 'PAPEL' && computer === 'PIEDRA') ||
    (player === 'TIJERAS' && computer === 'PAPEL')
    
  ) {cantPartidas++;
    return "¡Ganaste!";
  } else {
    return "La computadora gana.";
    cantPartidas++;
  }
}
