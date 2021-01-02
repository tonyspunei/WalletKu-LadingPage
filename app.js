(function () {
  let button = document.querySelector(".hamburgerIcon");
  let linksHamburger = document.querySelector(".linksHamburger");

  button.addEventListener("click", showHamburger);

  function showHamburger() {
    if (linksHamburger.classList.contains("active")) {
      linksHamburger.classList.remove("active");
    } else {
      linksHamburger.classList.add("active");
    }
  }
})();
