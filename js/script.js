function viewExp() {
  document.getElementById("experience").removeAttribute("class");
  document.getElementById("experience-btn").setAttribute("class", "hidden");
}

function hideExp() {
  document.getElementById("experience").setAttribute("class", "hidden");
  document.getElementById("experience-btn").removeAttribute("class");
}

function viewAch() {
  document.getElementById("achievements").removeAttribute("class");
  document.getElementById("achievements-btn").setAttribute("class", "hidden");
}

function hideAch() {
  document.getElementById("achievements").setAttribute("class", "hidden");
  document.getElementById("achievements-btn").removeAttribute("class");
}

function viewNso() {
  document.getElementById("nso").removeAttribute("class");
  document.getElementById("remodel").setAttribute("class", "hidden");
  document.getElementById("fla").setAttribute("class", "hidden");
  document.getElementById("minimize").removeAttribute("class");
}

function viewRemodel() {
  document.getElementById("remodel").removeAttribute("class");
  document.getElementById("nso").setAttribute("class", "hidden");
  document.getElementById("fla").setAttribute("class", "hidden");
  document.getElementById("minimize").removeAttribute("class");
}

function viewFla() {
  document.getElementById("fla").removeAttribute("class");
  document.getElementById("remodel").setAttribute("class", "hidden");
  document.getElementById("nso").setAttribute("class", "hidden");
  document.getElementById("minimize").removeAttribute("class");
}

function closeAll() {
  document.getElementById("nso").setAttribute("class", "hidden");
  document.getElementById("fla").setAttribute("class", "hidden");
  document.getElementById("remodel").setAttribute("class", "hidden");
  document.getElementById("minimize").setAttribute("class", "hidden");
}

window.addEventListener("load", () => {
  document.getElementById("experience-btn").addEventListener("click", viewExp);
  document.getElementById("hide-exp-btn").addEventListener("click", hideExp);
  document.getElementById("achievements-btn").addEventListener("click", viewAch);
  document.getElementById("hide-ach-btn").addEventListener("click", hideAch);
  document.getElementById("nso-title").addEventListener("click", viewNso);
  document.getElementById("remodel-title").addEventListener("click", viewRemodel);
  document.getElementById("fla-title").addEventListener("click", viewFla);
  document.getElementById("minimize").addEventListener("click", closeAll);
});