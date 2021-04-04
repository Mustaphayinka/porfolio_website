// MENU SHOW

const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show') // show is a style property in the css file
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

// ACTIVE AND REMOVE MENU
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')


    // remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=> n.addEventListener('click', linkAction))



// SOCIAL REVEAL ANIMATION
const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2000,
    reset:true
})

// SCROLL HOME
sr.reveal('.home__title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home__img', {delay:400})
sr.reveal('.home__social-icon', {interval:200})


// SCROLL ABOUT
sr.reveal('.about__img', {})
sr.reveal('.about__substitle', {delay:200})
sr.reveal('.about__text', {delay:400})


// SCROLL SKILLS
sr.reveal('.skills__substitle', {})
sr.reveal('.skills__text', {delay:200})
sr.reveal('.skills__data', {interval:400})
sr.reveal('.skills__img', {delay:200})


// SOCIAIL WORK
sr.reveal('.work__img', {interval:200})

// SOCIAL CONTACT
sr.reveal('.contact__input', {interval:200})



// MESSAGE FORM
var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.classList.add('success');
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  }).catch(error => {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)


 // TEXT EFFECT
  // TEXT ARRAY
  const dataText = ["An Economist.","A Data Scientist."];
  document.addEventListener("DOMContentLoaded", typingEffect);

  function typingEffect() {

  function typeWriter(text, i, fnCallback) {
    if (i < (text.length)) {
      document.querySelector(".text-effect").innerHTML = text.substring(0, i+1) + "<span class='effect'></span>";

      // SET DELAY BEFORE NEXT CHARACTER
      setTimeout(function() {
        typeWriter(text, i+1, fnCallback)
      }, 100)
    } else if (typeof fnCallback == "function") {
      setTimeout(fnCallback, 700);
    } 
  }

  // START Typing
  function startTextAnimation(i) {
    if (typeof dataText[i] == "undefined") {
      setTimeout(function() {
        startTextAnimation(0);
      }, 2000)
    }
    if (i < dataText[i].length) {
      typeWriter(dataText[i], 0, function() {
        startTextAnimation(i + 1);
      });
    }
    
  }
  startTextAnimation(0);
}