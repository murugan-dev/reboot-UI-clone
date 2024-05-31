const li = document.querySelector(".menu");
const menu = document.querySelector(".menu-icon");
const xmark = document.querySelector(".close-icon");

menu.addEventListener("click", (e) => {
    e.preventDefault();
    li.classList.add("mobile");
    menu.style.display = "none"
    xmark.style.display = "block"
});

xmark.addEventListener("click", (e) => {
    e.preventDefault();
    li.classList.remove("mobile");
    menu.style.display = "block"
    xmark.style.display = "none"
});
