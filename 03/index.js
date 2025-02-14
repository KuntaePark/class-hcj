const form = document.getElementById("regisForm");

const idElem = document.getElementById("regisId");
const pwdElem = document.getElementById("regisPwd");
const pwdConfElem = document.getElementById("regisPwdConfirm");
const birthElem = document.getElementById("regisBirth");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = idElem.value;
  const pwd = pwdElem.value;
  const pwdConf = pwdConfElem.value;
  const birth = birthElem.value;

  if (!id.length) {
    alert("아이디를 입력하세요!");
    return idElem.focus();
  }

  if (!pwd.length) {
    alert("비밀번호를 입력하세요!");
    return pwdElem.focus();
  }

  if (pwd !== pwdConf) {
    alert("비밀번호 확인이 일치하지 않습니다!");
    return pwdConfElem.focus();
  }
  if (birth.length !== 6) {
    alert("생일 양식이 일치하지 않습니다.");
    return birthElem.focus();
  }

  alert("회원가입이 완료되었습니다!");
  form.reset();
});

const cancelBtn = document.getElementById("cancelBtn");

cancelBtn.onclick = () => {
  console.log("취소");
};
