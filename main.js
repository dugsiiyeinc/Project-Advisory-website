const humberger= document.querySelector('.humbergur');
const mobile_menu = document.querySelector('.mobile-menu');
const Icons= document.querySelectorAll('i');


humberger.addEventListener("click", function(envent){
const isvisible =mobile_menu.getAttribute("data-visible");
if (isvisible === "true"){
    mobile_menu.setAttribute('data-visible', "false");
    Icons[0].setAttribute('data-visible', "true");
    Icons[1].setAttribute('data-visible', "false");

}
else if(isvisible === "false"){
    mobile_menu.setAttribute('data-visible', "true");
    Icons[0].setAttribute('data-visible', "false");
    Icons[1].setAttribute('data-visible', "true");
}
})