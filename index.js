let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");
//Show Menu
menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
//Show Search Form
let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form")
    search_form.classList.toggle('active');
}
//Hide Search Form
let close_icon = document.querySelector("#close");
close_icon.onclick = () => {
    let search_form = document.querySelector("#search-form");
    search_form.classList.remove('active');
};
