function viewExp() {
  document.getElementById("experience").removeAttribute("class");
  document.getElementById("view-btn").setAttribute("class", "hidden");
}

function hideExp() {
  document.getElementById("experience").setAttribute("class", "hidden");
  document.getElementById("view-btn").removeAttribute("class");
}

window.addEventListener("load", () => {
  document.getElementById("view-btn").addEventListener("click", viewExp);
  document.getElementById("hide-btn").addEventListener("click", hideExp);
});