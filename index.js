let diceImg = [
  "https://cdn-icons-png.flaticon.com/128/10826/10826863.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826864.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826865.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826866.png",
  "https://cdn-icons-png.flaticon.com/128/1626/1626822.png",
  "https://cdn-icons-png.flaticon.com/128/10826/10826868.png",
];

let dice1 = [1, 2, 3, 4];
let dice2 = [1, 2, 3, 4];

const divs = document.querySelectorAll("#root > div");
const root = document.querySelector("#root");

function showDices() {
  divs[0].innerHTML = null;
  divs[1].innerHTML = null;
  dice1.forEach((d) => {
    const img = document.createElement("img");
    img.src = diceImg[d - 1];
    img.alt = "주사위";
    divs[0].append(img);
  });
  dice2.forEach((d) => {
    const img = document.createElement("img");
    img.src = diceImg[d - 1];
    img.alt = "주사위";
    divs[1].append(img);
  });
}

function getRandDice() {
  return Math.floor(Math.random() * 6) + 1;
}
const btn = document.querySelector("#root > button");

showDices();
let isStart = true;
let intId = null;
btn.addEventListener("click", (e) => {
  if (isStart) {
    const scoreBoard = document.querySelector(".scoreBoard");
    if (scoreBoard !== null) scoreBoard.remove();
    btn.innerHTML = "멈추기";
    intId = setInterval(() => {
      for (let i = 0; i < 4; i++) {
        dice1[i] = getRandDice();
      }
      for (let i = 0; i < 4; i++) {
        dice2[i] = getRandDice();
      }
      showDices();
    }, 100);
  } else {
    clearInterval(intId);
    let mySum = 0;
    let comSum = 0;
    dice1.forEach((d) => (mySum += d));
    dice2.forEach((d) => (comSum += d));
    const scoreBoard = document.createElement("div");
    scoreBoard.className = "scoreBoard";
    if (mySum > comSum) {
      scoreBoard.innerText = "이겼습니다!";
    }
    if (mySum < comSum) {
      scoreBoard.innerText = "졌습니다!";
    }
    if (mySum === comSum) {
      scoreBoard.innerText = "비겼습니다!";
    }
    root.append(scoreBoard);
    btn.innerHTML = "시작하기";
  }
  isStart = !isStart;
});
