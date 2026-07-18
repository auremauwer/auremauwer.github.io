document.querySelectorAll(".card-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const body = button.nextElementSibling;

    button.setAttribute("aria-expanded", String(!expanded));
    body.style.maxHeight = expanded ? null : `${body.scrollHeight}px`;
  });
});
