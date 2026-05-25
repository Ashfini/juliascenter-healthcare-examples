
  let lastScrollY = window.scrollY;

  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {

    if (window.scrollY > lastScrollY && window.scrollY > 100) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

    lastScrollY = window.scrollY;
  });
