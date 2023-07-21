let light = getComputedStyle(document.documentElement).getPropertyValue('--light');
let body = document.getElementById("body");
const theme = document.getElementById("theme");
const navMenu = document.getElementById("navMenu")
const navToggle = document.getElementById("nav-toggle")

theme.addEventListener('click', () => {
    if (light === "#FCFBFF") {
        body.style.setProperty("--light", "#020617");
        body.style.setProperty("--dark", "#FCFBFF");
        theme.innerHTML = `<i class="uil uil-sun"></i>`
        light = "#020617";
        console.log(light)
    } else {
        body.style.setProperty("--light", "#FCFBFF");
        body.style.setProperty("--dark", "#020617");
        theme.innerHTML = `<i class="uil uil-moon"></i>`
        light = "#FCFBFF";
        console.log(light)
    }
});

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
    if (navMenu.classList.contains('show-menu') === true) {
        navToggle.style.color = "var(--third-color)"
        navToggle.style.transform = "scale(1.3)";
    } else {
        navToggle.style.color = "var(--light)"
        navToggle.style.transform = "scale(1)";
    }
});