//Abrir y Cerrar Modals
let modal1 = $(".modal__box__1");
$("#blog__1").click(function(){
    modal1.show(1000);
});

$(".subtitle__modal").click(function(){
    modal1.hide(1000);
});

//-------------------------------------
let modal2 = $(".modal__box__2");
$("#blog__2").click(function(){
    modal2.show(1000);
});

$(".subtitle__modal").click(function(){
    modal2.hide(1000);
});

//-------------------------------------
let modal3 = $(".modal__box__3");
$("#blog__3").click(function(){
    modal3.show(1000);
});

$(".subtitle__modal").click(function(){
    modal3.hide(1000);
});

//---------------------------------------
let modal4 = $(".modal__box__4");
$("#blog__4").click(function(){
    modal4.show(1000);
});

$(".subtitle__modal").click(function(){
    modal4.hide(1000);
});

//--------------------------------------
let modal5 = $(".modal__box__5");
$("#blog__5").click(function(){
    modal5.show(1000);
});

$(".subtitle__modal").click(function(){
    modal5.hide(1000);
});

//--------------------------------------
let modal6 = $(".modal__box__6");
$("#blog__6").click(function(){
    modal6.show(1000);
});

$(".subtitle__modal").click(function(){
    modal6.hide(1000);
});


//Click de botones VER MAS y CARD CLOSE

let card1 = $(".cardBack1")
$("#1").click(function(){
    card1.show(1000);
});

$("#cardClose1").click(function(){
    card1.hide(1000);
});
//---------------------------------------

let card2 = $(".cardBack2")
$("#2").click(function(){
    card2.show(1000);
});

$("#cardClose2").click(function(){
    card2.hide(1000);
});
//----------------------------------------

let card3 = $(".cardBack3")
$("#3").click(function(){
    card3.show(1000);
});

$("#cardClose3").click(function(){
    card3.hide(1000);
});


//Click para cerrar menu hamburguesa
let btnBurguerOpen = document.getElementById("btnBurguerOpen")
let btnBurguerClose = document.getElementById("btnBurguerClose")

btnBurguerOpen.addEventListener("click", () => {
    btnBurguerClose.style.display = "block"
    btnBurguerOpen.style.display = "none"
})

btnBurguerClose.addEventListener("click", () => {
    btnBurguerClose.style.display = "none"
    btnBurguerOpen.style.display = "block"
})
