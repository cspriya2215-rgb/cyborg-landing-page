window.onload = () => {
  const header = document.querySelector("h1");
  header.style.opacity = 0;

  setTimeout(() => {
    header.style.transition = "opacity 2s";
    header.style.opacity = 1;
  }, 500);
};
