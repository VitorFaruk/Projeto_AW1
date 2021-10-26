// login.html desenvolvido por: João Vitor de Souza Lima.

const btnLogin = document.querySelector(".btn-login");
const div = document.querySelector("div");


btnLogin.addEventListener("click", event => {
    event.preventDefault();
    div.classList.add("div-hide");
});
