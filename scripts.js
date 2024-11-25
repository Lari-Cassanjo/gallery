var janela = document.querySelector("#janela");
var gatilho = document.querySelector("#janela-img");
var legenda = document.querySelector("#legenda");
var fechar = document.querySelector(".fechar");

document.querySelectorAll(".gallery-img").forEach((item) => {
    item.addEventListener("click", () => {
        janela.style.display = "block";
        gatilho.src = item.src;
        legenda.textContent = item.getAttribute("alt");
    });
});

fechar.onclick = function () {
    janela.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == janela) {
        janela.style.display = "none";
    }
};
