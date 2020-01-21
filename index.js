let num = document.getElementById('numero');
let item1  = document.querySelector('.heart');
let item2  = document.querySelector('.diamond');

let icon = ['\u2660','\u2663','\u2665','\u2666'];
let valor = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];

let x = Math.floor(Math.random()*icon.length);
let y = Math.floor(Math.random()*valor.length);


num.innerHTML = valor[y];

if(x % 2===0){
    item1.innerHTML = icon[x];
    item2.innerHTML = icon[x];
    item1.style.color = "red"
    item2.style.color = "red"} else {item1.innerHTML = icon[x];
    item2.innerHTML = icon[x];};

