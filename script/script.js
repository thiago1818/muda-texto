let btnHamburguer = document.querySelector(".hamburguer");
let nav = document.querySelector("#nav");

btnHamburguer.addEventListener("click", () => {

    btnHamburguer.classList.toggle("active");
    nav.classList.toggle("active");

});

