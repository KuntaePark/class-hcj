const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

let isClock = false;
let intervalId = null;

btn.onclick = () => {
  if (!isClock) {
    const time = new Date().toLocaleTimeString();
    h1.innerText = time;
    intervalId = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      h1.innerText = time;
    }, 1000);
    isClock = true;
    btn.innerText = "멈추기";
  } else {
    h1.innerText = "지금 몇 시지??";
    btn.innerText = "시간보기";
    if (intervalId) {
      clearInterval(intervalId);
    }
    isClock = false;
  }
};
