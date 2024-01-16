//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
    navbarMenu.classList.toggle("open");
    hamburgerMenu.classList.toggle("clicked");
});

const dropDowns = Array.from(document.querySelectorAll('.cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
    item.classList.toggle('cs-active')
}
item.addEventListener('click', onClick)
}



