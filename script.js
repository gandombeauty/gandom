let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let prev = this.parentElement;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      prev.style.maxHeight = prev.scrollHeight+ panel.scrollHeight + "px";
      console.log(prev.scrollHeight);
    }
  });
}
