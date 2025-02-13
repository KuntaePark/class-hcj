const body = document.querySelector("body");

const button = document.createElement("button");
button.innerText = "펼치기";

const headerText = "주어진 임무를 끝까지 수행하는 집요한 개발자입니다.";

const header = document.querySelector("header");
const h1 = document.createElement("h1");

header.append(h1);

let showing = false;
button.onclick = () => {
  h1.innerText = showing ? headerText : "";
  button.innerText = showing ? "접기" : "펼치기";
  showing = !showing;
};

body.append(button);

const footer = document.querySelector("footer");
const ul = document.createElement("ul");

const list = ["github", "email", "mobile"];

for (let i = 0; i < list.length; i++) {
  const li = document.createElement("li");
  switch (list[i]) {
    case "github":
      li.innerText = `${list[i]} : https://github.com/KuntaePark`;
      ul.append(li);
      break;
    case "email":
      li.innerText = `${list[i]} : sgvelcro@naver.com`;
      ul.append(li);
      break;
    case "mobile":
      li.innerText = `${list[i]} : 01039533964`;
      ul.append(li);
      break;
  }
}

footer.append(ul);
