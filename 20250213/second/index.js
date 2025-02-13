const login = document.querySelector("#login");
const modal = document.querySelector("div.login-modal");
login.onclick = () => {
  modal.style.display = "block";
};

const closeBtn = document.querySelector(".login-modal > button");
closeBtn.onclick = () => {
  modal.style.display = "None";
};
