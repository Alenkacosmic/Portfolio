var show = document.getElementsByClassName('paradise--student--header');
var step;

for (step = 0; step < show.length; step++) {
  show[step].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}