const burgerIcon = document.querySelector("#burger-icon");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector("#menu");

console.log(burgerIcon);
console.assert.log(closeIcon);
console.log(menu);

burgerIcon.addEventListener("click", function () {
    menu.style.right = "0";
});

document.addEventListener("click", function () {
    menu.style.right = "-100%";
});

document.addEventListener("click", function () {
    menu.style.right = "-100%";
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        menu.style.right = "-100%";
    }
});

let body = document.querySelector('body');
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');

console.log(body)
console.log(div1)
console.log(div2)

let changeBtn = document.querySelector('.change')

function changeTheme() {
    console.log('click');
    body.classList.toggle('body');
    div1.classList.toggle('div1-dark');
    div2.classList.toggle('div2-dark');
}

changeBtn.addEventListener('click', changeTheme)