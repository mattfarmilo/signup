const password = document.querySelector("#password");
const confPassword = document.querySelector("#confPassword");
const noMatch = document.querySelector("#noMatch");
let pass1;
let pass2;

password.addEventListener("input", () => {
  pass1 = password.value;
  chkValid(pass1, pass2);
});

confPassword.addEventListener("input", () => {
  pass2 = confPassword.value;
  chkValid(pass1, pass2);
})

function chkValid (pwd1, pwd2) {
  if(password.getAttribute("class") === "error") {
    if (pwd1.length > 0 && pwd1 === pwd2) {
      password.classList.toggle("error");
      confPassword.classList.toggle("error");
      noMatch.classList.toggle("hide");
    }
  } else {
    if (pwd1.length === 0 || pwd1 !== pwd2) {
      password.classList.toggle("error");
      confPassword.classList.toggle("error");
      noMatch.classList.toggle("hide");
    }
  }
};