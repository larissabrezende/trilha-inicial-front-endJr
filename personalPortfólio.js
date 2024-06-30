document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");
  const navbarLinks = navbar.querySelectorAll("a");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("active");
    });
  });
});
