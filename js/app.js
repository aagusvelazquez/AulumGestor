document.getElementById('anio').innerHTML = new Date().getFullYear();
document.getElementById('añoCampusDesktop').innerHTML = new Date().getFullYear();
document.getElementById('añoCampusMobile').innerHTML = new Date().getFullYear();
document.getElementById('login-btn').addEventListener('click', () => {
    var usuario = document.getElementById("email").value;
    var contraseña = document.getElementById("password").value;
    const content = document.getElementById('main');

    if (usuario === "admin" && contraseña === "password") {
        logIn.style.display = 'none';
        content.style.display = 'block';
    } else {
        alert("Usuario o contraseña incorrecta.");
    }
});

const sidebarBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("aside");

sidebarBtn.addEventListener('click', () => {
    document.body.classList.toggle('active');
})


const btnMenuMobile = document.getElementById('btnMenuMobile');
const dropdown = document.querySelector('.dropdown__wrapper--fade-in');

btnMenuMobile.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
});

document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isButtonClicked = button.contains(event.target);
    if (!isClickInsideDropdown && !isButtonClicked) {
        dropdown.classList.add('hide');
        dropdown.classList.add('dropdown__wrapper--fade-in');
    }
});

const btnMenu = document.querySelector('.btnMenu');
const closeButton = document.querySelector('.close');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.remove('none');
    menu.classList.remove('hide');
});

closeButton.addEventListener('click', () => {
    menu.classList.add('hide');
});