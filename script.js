const imagens = [
  'img/1.png', 'img/2.png', 'img/3.png', 'img/4.png',
  'img/5.png', 'img/6.png', 'img/7.png', 'img/8.png'
];

let cardArray = [...imagens, ...imagens];
cardArray.sort(() => 0.5 - Math.random());

const board = document.getElementById('jogo');
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchedPairs = 0;

const modal = document.getElementById('modal');
const finalMessage = document.getElementById('final-message');
const restartBtn = document.getElementById('restart-btn');


let timer = document.getElementById('timer');
let seconds = 0;
let interval = null;
let gameStarted = false;

function createCard(imageName) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardInner = document.createElement('div');
  cardInner.classList.add('card-inner');

  const front = document.createElement('div');
  front.classList.add('card-front');
  front.style.backgroundImage = `url(${imageName})`;

  const back = document.createElement('div');
  back.classList.add('card-back');

  cardInner.appendChild(front);
  cardInner.appendChild(back);
  card.appendChild(cardInner);
  card.dataset.image = imageName;

  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('revealed') || card === firstCard) return;

    if (!gameStarted) {
      startTimer();
      gameStarted = true;
    }

    card.classList.add('revealed');

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      checkMatch();
    }
  });

  return card;
}

function init() {
  cardArray.forEach(img => {
    const card = createCard(img);
    board.appendChild(card);
  });
}

function startTimer() {
  interval = setInterval(() => {
    seconds++;
    timer.innerText = `⏱️ Tempo: ${seconds}s`;
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function checkMatch() {
  const isMatch = firstCard.dataset.image === secondCard.dataset.image;

  if (isMatch) {
    matchedPairs++;
    firstCard = null;
    secondCard = null;

    if (matchedPairs === imagens.length) {
      stopTimer();
      setTimeout(() => {
        showModal();
      }, 500);
    }

  } else {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('revealed');
      secondCard.classList.remove('revealed');
      firstCard = null;
      secondCard = null;
      lockBoard = false;
    }, 1000);
  }
}

init();

function showModal() {
  const bestTime = localStorage.getItem('melhorTempo');
  let message = `Você terminou em ${seconds} segundos.`;

  if (!bestTime || seconds < bestTime) {
    localStorage.setItem('melhorTempo', seconds);
    message += " 🏆 Novo recorde!";
  } else {
    message += ` ⏱️ Seu melhor tempo é ${bestTime}s.`;
  }

  finalMessage.innerText = message;
  modal.classList.remove('hidden');
}

restartBtn.addEventListener('click', () => {
  location.reload(); 
});