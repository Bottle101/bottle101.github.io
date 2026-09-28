(() => {
  const nav = document.querySelector(".navbar");

  if (!nav) {
    return;
  }

  let navOffset = 0;

  const updateDocking = () => {
    const shouldDock = window.innerWidth >= 750 && window.scrollY > navOffset;
    document.body.classList.toggle("has-docked-nav", shouldDock);
  };

  const measure = () => {
    document.body.classList.remove("has-docked-nav");
    navOffset = nav.getBoundingClientRect().top + window.scrollY;
    updateDocking();
  };

  window.addEventListener("scroll", updateDocking, { passive: true });
  window.addEventListener("resize", measure);
  window.addEventListener("load", measure);
  measure();
})();
