export function scrollToSection(selector) {
  const container = document.querySelector(".smooth-scroll-content");
  const target = document.querySelector(selector);

  if (container && target) {
    const offsetTop =
      target.getBoundingClientRect().top +
      container.scrollTop -
      container.getBoundingClientRect().top;

    container.scrollTo({ top: offsetTop, behavior: "smooth" });
    window.history.pushState({}, "", selector);
  }
}
