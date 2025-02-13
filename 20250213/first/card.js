const body = document.querySelector("body");

body.style.backgroundColor = "white";

const btn = document.querySelector(".card-component .btn");
const url =
  "https://cdn.pixabay.com/photo/2019/10/07/04/52/mountain-4531731_1280.jpg";

const img = document.querySelector(".card-component img");
img.src = url;

btn.onclick = () => {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  if (confirm("다운로드하시겠습니까?")) {
    return a.click();
  } else {
    console.log("취소");
  }
};

const viewBtn = document.createElement("button");
viewBtn.className = "btn";
viewBtn.style.marginTop = "10px";
let isCard = false;
viewBtn.innerText = "전체이미지";

viewBtn.onclick = () => {
  viewBtn.innerText = isCard ? "전체이미지" : "카드이미지";
  const card = document.querySelector(".card-component");
  card.className = isCard ? "card-component" : "card-component fv";
  isCard = !isCard;
};

body.append(viewBtn);
