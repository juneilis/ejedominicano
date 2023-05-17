let menu = document.getElementById('nav');
let open = document.getElementById('menu-btn');
let close = document.getElementById('close');

function openmenu(){
    menu.style.left="0";
    open.style.display="none";
    close.style.display="block";
}
function closemenu(){
    menu.style.left="-100%";
    open.style.display="block";
    close.style.display="none";
}
//nav bg color change 
function change(){
    var nav= document.getElementById('navbar')
    var value = window.scrollY;
    if(value > 80){
        nav.classList.add('nav-change')
    }
    else {
        nav.classList.remove('nav-change')
    }
}
window.addEventListener("scroll" , change)


function img2(){
    
    document.getElementById("demo").style.backgroundImage="url(cambio1.png)";
}
function img3(){
    
    document.getElementById("demo").style.backgroundImage="url(cambio2.png)";
}
const d = new Date()
document.getElementById("de").innerHTML = d;
console.log(d);


