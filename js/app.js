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

document.getElementById("btn-home").addEventListener('click', () => {
  var home = document.getElementById("contenido-home");
  var maestros = document.getElementById("contenido-maestros");
  var alumnos = document.getElementById("contenido-alumnos");
  var materias = document.getElementById("contenido-materias");

  if (home.style.display === 'none') {
    home.style.display = 'block';
    maestros.style.display = 'none';
    alumnos.style.display = 'none';
    materias.style.display = 'none';
  }
});

document.getElementById("btn-alumnos").addEventListener('click', () => {
  var home = document.getElementById("contenido-home");
  var alumnos = document.getElementById("contenido-alumnos");

  if (home.style.display === 'none') {
    home.style.display = 'block';
    alumnos.style.display = 'none';
  } else {
    home.style.display = 'none';
    alumnos.style.display = 'block';
  }
});
document.getElementById("area-alumnos").addEventListener('click', () => {
  var home = document.getElementById("contenido-home");
  var alumnos = document.getElementById("contenido-alumnos");

  if (home.style.display === 'none') {
    home.style.display = 'block';
    maestros.style.display = 'none';
  } else {
    home.style.display = 'none';
    alumnos.style.display = 'block';
  } 
});

document.getElementById("btn-maestros").addEventListener('click', () => {
  var home = document.getElementById("contenido-home");
  var maestros = document.getElementById("contenido-maestros");

  if (home.style.display === 'none') {
    home.style.display = 'block';
    maestros.style.display = 'none';
  } else {
    home.style.display = 'none';
    maestros.style.display = 'block';
  }
});
document.getElementById("area-maestros").addEventListener('click', () => {
  var home = document.getElementById("contenido-home");
  var maestros = document.getElementById("contenido-maestros");

  if (home.style.display === 'none') {
    home.style.display = 'block';
    maestros.style.display = 'none';
  } else {
    home.style.display = 'none';
    maestros.style.display = 'block';
  } 
});

document.getElementById("btn-materias").addEventListener('click', () => {
  var home = document.getElementById("contenido-home");
  var materias = document.getElementById("contenido-materias");

  if (home.style.display === 'none') {
    home.style.display = 'block';
    materias.style.display = 'none';
  } else {
    home.style.display = 'none';
    materias.style.display = 'block';
  }
});
document.getElementById("area-materias").addEventListener('click', () => {
  var home = document.getElementById("contenido-home");
  var materias = document.getElementById("contenido-materias");

  if (home.style.display === 'none') {
    home.style.display = 'block';
    materias.style.display = 'none';
  } else {
    home.style.display = 'none';
    materias.style.display = 'block';
  } 
});

const allLinks = document.querySelectorAll(".tabs-maestros a");
const allTabs = document.querySelectorAll(".tab-content-maestros")
const tabContentWrapper = document.querySelector(".tab-content-wrapper-maestros");
const shiftTabs = (linkId) => {
  allTabs.forEach((tab, i) => {
      
    if (tab.id.includes(linkId)) {
      allTabs.forEach((tabItem) => { 
        tabItem.style = `transform: translateY(-${i*540}px);`;
      });
    }
  });
}
allLinks.forEach((elem) => {
  elem.addEventListener('click', function() {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinks.forEach((link, i) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
    shiftTabs(linkId);
  });
});
const currentHash = window.location.hash;
let activeLink = document.querySelector(`.tabs-maestros a`);
if (currentHash) {
  const visibleHash = document.getElementById(
    `${currentHash.replace('#', '')}`
  );

  if (visibleHash) {
    activeLink = visibleHash;
  }
}
activeLink.classList.toggle('active');
shiftTabs(activeLink.id);


const allLinksAlumnos = document.querySelectorAll(".tabs-alumnos a");
const allTabsAlumnos = document.querySelectorAll(".tab-content-alumnos")
const tabContentWrapperAlumnos = document.querySelector(".tab-content-wrapper-alumnos");
const shiftTabsAlumnos = (linkId) => {
  allTabsAlumnos.forEach((tab, i) => {
      
    if (tab.id.includes(linkId)) {
      allTabsAlumnos.forEach((tabItem) => { 
        tabItem.style = `transform: translateY(-${i*540}px);`;
      });
    }
  });
}
allLinksAlumnos.forEach((elem) => {
  elem.addEventListener('click', function() {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinksAlumnos.forEach((link, i) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
    shiftTabsAlumnos(linkId);
  });
});
const currentHashAlumnos = window.location.hash;
let activeLinkAlumnos = document.querySelector(`.tabs-maestros a`);
if (currentHashAlumnos) {
  const visibleHash = document.getElementById(
    `${currentHashAlumnos.replace('#', '')}`
  );

  if (visibleHash) {
    activeLinkAlumnos = visibleHash;
  }
}
activeLinkAlumnos.classList.toggle('active');
shiftTabsAlumnos(activeLink.id);


const allLinksMaterias = document.querySelectorAll(".tabs-materias a");
const allTabsMaterias = document.querySelectorAll(".tab-content-materias")
const tabContentWrapperMaterias = document.querySelector(".tab-content-wrapper-materias");
const shiftTabsMaterias = (linkId) => {
  allTabsMaterias.forEach((tab, i) => {
      
    if (tab.id.includes(linkId)) {
      allTabsMaterias.forEach((tabItem) => { 
        tabItem.style = `transform: translateY(-${i*540}px);`;
      });
    }
  });
}
allLinksMaterias.forEach((elem) => {
  elem.addEventListener('click', function() {
    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allLinksMaterias.forEach((link, i) => {
      if (link.href == hrefLinkClick){
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
    shiftTabsMaterias(linkId);
  });
});
const currentHashMaterias = window.location.hash;
let activeLinkMaterias = document.querySelector(`.tabs-materias a`);
if (currentHashMaterias) {
  const currentHashAlumnos = document.getElementById(
    `${currentHashAlumnos.replace('#', '')}`
  );

  if (visibleHash) {
    activeLinkMaterias = visibleHash;
  }
}
activeLinkMaterias.classList.toggle('active');
shiftTabsMaterias(activeLink.id);


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