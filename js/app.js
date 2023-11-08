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