window.onscroll = function () {
  const nav = document.querySelector("nav");
  const fixedNav = nav.offsetTop;

  if (window.pageYOffset > fixedNav) {
    nav.classList.add("navbar-fixed");
  } else {
    nav.classList.remove("navbar-fixed");
  }
};

const hamburger = document.querySelector("#hamburger");
const faBars = document.querySelector(".fa-bars");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  faBars.classList.toggle("fa-bars");
  faBars.classList.toggle("fa-x");
  navMenu.classList.toggle("hidden");
});

function Show(formId, btnId) {
  // Hide all forms
  document.querySelectorAll(".form-container").forEach(function (form) {
    form.classList.add("hidden");
  });

  // Show the selected form
  document.getElementById(formId).classList.remove("hidden");

  // Reset all button styles
  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.classList.remove("btnOn");
    btn.classList.add("btnOff");
  });

//   // Set the clicked button to active
  document.getElementById(btnId).classList.add("btnOn");
  document.getElementById(btnId).classList.remove("btnOff");
}

const kirim = document.getElementById('kirim')

kirim.addEventListener("click", function () {
  alert('mau')
})