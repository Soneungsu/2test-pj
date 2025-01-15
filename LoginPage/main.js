const idBtn = document.querySelector(".id");
const pwBtn = document.querySelector(".pw");

idBtn.addEventListener("click", idInPutBox);
pwBtn.addEventListener("click", pwInPutBox);

function idInPutBox() {
  document
    .querySelectorAll(".lgWrap input")
    .forEach((e) => e.classList.remove("active"));
  idBtn.classList.add("active");
}

function pwInPutBox() {
  document.querySelectorAll(".lgWrap input").forEach((e) => {
    e.classList.remove("active");
  });
  pwBtn.classList.add("active");
}
