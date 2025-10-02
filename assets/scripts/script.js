
setInterval(()=>{
    let cards = document.querySelectorAll(".box");
    let conteinerCards = document.querySelector(".cards");
    let bolas = document.querySelectorAll(".bola");
    let status = document.querySelector(".status");
    let carrossel = document.querySelector(".carrosel");

    status.prepend(bolas[bolas.length -1]);
    conteinerCards.appendChild(cards[0]);
    carrossel.classList.add("next");

    setTimeout(()=>{
        carrossel.classList.remove("next");
    },1000);
}, 2000);



