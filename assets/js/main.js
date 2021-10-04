/* ====== Toggle menu ====== */
const showMenu = (toggleId, navId, navLinks) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)
  const links = document.querySelectorAll(navLinks)
  
  if (toggle && nav) {
    // Show nav menu
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
      console.log(nav.classList);
    })

    // Hide nav menu by nav items
    links.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.toggle('show')
        console.log(nav.classList);
      })
    });
  }
}
showMenu('navbar-toggle', 'navbar-nav', '.navbar__link')


/* ====== Back to top ====== */
let backtotop = document.querySelector('.scroll__top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 600) {
      backtotop.style.display = ''
  } else {
      backtotop.style.display = 'none'
    }
  }
  window.addEventListener('load', toggleBacktotop)
  window.addEventListener('scroll', toggleBacktotop)
}


/* ====== Switch theme ====== */
const body = document.body.classList
const switcher = document.querySelector("#theme-switcher")
const theme = switcher.classList
const localTheme = localStorage.getItem('theme')
// Store theme class locally
if (localTheme && localTheme == 'dark' ) {
  if (!body.contains('dark')) {
    body.add('dark')
    theme.add('bx-sun')
    theme.remove('bx-moon')
  } else {
    theme.add('bx-moon')
    theme.remove('bx-sun')
  }
}
// Change theme on click on theme's icon
switcher.addEventListener('click', (e) => {
  e.preventDefault()
  body.toggle('dark')
  if (body.contains('dark')) {
    theme.add('bx-sun')
    theme.remove('bx-moon')
    localStorage.setItem('theme', 'dark')
  } else {
    theme.add('bx-moon')
    theme.remove('bx-sun')
    localStorage.setItem('theme', '')
  }
})


/* ====== Scroll Reveal ====== */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: false
});

sr.reveal('.hero__text',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.hero__image',{delay: 400});
sr.reveal('.hero__icons',{ interval: 300});
sr.reveal('.section__header',{});
sr.reveal('.service__item',{delay: 300});
sr.reveal('.section__header',{});
sr.reveal('.project__item',{delay: 300});
sr.reveal('.contact__cta',{delay: 300});
sr.reveal('.contact__icons',{delay: 300});