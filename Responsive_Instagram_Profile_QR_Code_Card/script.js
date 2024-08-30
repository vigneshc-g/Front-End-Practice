let card = document.querySelector(".full-card");
let img = document.querySelector("#qr-code-img");

img.addEventListener("mouseover", ()=> {
    card.style.filter = "invert(100%)";
});

img.addEventListener("mouseleave", ()=> {
    card.style.filter = "invert(0%)";   
});