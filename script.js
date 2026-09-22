const aboutBtn = document.getElementById("aboutBtn");
const dropDown = document.getElementById("dropDown-Container");
const btnKnow = document.getElementById("btn-know");

aboutBtn.addEventListener("click", function () {
  dropDown.classList.toggle("active");
});

btnKnow.addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
});
