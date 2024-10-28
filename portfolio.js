let light = getComputedStyle(document.documentElement).getPropertyValue('--light');
let body = document.getElementById("body");
let section = document.querySelectorAll('section[id]')
const theme = document.getElementById("theme");
const navMenu = document.getElementById("navMenu")
const navLink = document.querySelectorAll(".navLink")
const navToggle = document.getElementById("nav-toggle")
const li_s = document.querySelectorAll(".itemNav")
let header = document.querySelector("#header")
const mediaQuery = window.matchMedia("(max-width: 768px)");
let isMenuActive = false;

theme.addEventListener('click', () => {
    if (light === "#FCFBFF") {
        body.style.setProperty("--light", "#020617");
        body.style.setProperty("--dark", "#FCFBFF");
        theme.innerHTML = `<i class="uil uil-sun"></i>`
        light = "#020617";
    } else {
        body.style.setProperty("--light", "#FCFBFF");
        body.style.setProperty("--dark", "#020617");
        theme.innerHTML = `<i class="uil uil-moon"></i>`
        light = "#FCFBFF";
    }
});

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    isMenuActive = navMenu.classList.contains('show-menu');

    navToggle.style.color = isMenuActive ? "var(--third-color)" : "var(--light)";
    navToggle.style.transform = isMenuActive ? "scale(1.3)" : "scale(1)";

    if (isMenuActive) {
        header.classList.add('headerRoll');
    } else {
        header.classList.toggle('headerRoll', window.scrollY > 0);
    }
});

window.addEventListener("scroll", () => {
    if (!isMenuActive) {
        header.classList.toggle('headerRoll', window.scrollY > 0);
    }
});

Array.from(li_s).forEach((li) => {
    li.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
        navToggle.style.color = "var(--light)"
        navToggle.style.transform = "scale(1)";
    });
});

window.onscroll = () => {
    const scrollY2 = window.scrollY;

    section.forEach(sec => {
        let offsetTop = sec.offsetTop - 58;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        const sectionClass = document.querySelector('.itemNav a[href*=' + id + ']')

        if (scrollY2 > offsetTop && scrollY2 <= offsetTop + height) {
            sectionClass.classList.add('activeClass')
        } else {
            sectionClass.classList.remove('activeClass')
        }
    })
}

const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}