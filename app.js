let text   = document.querySelector("#text");
let btn    = document.querySelector("#btn");
let result = document.querySelector("#result");

btn.addEventListener("click",random);

function random(){
    let len   = text.value.length;
    let x     = Math.floor(Math.random()*len);

    result.innerHTML = text.value.charAt(x);
}