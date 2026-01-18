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

function closeEvents() {
  document.getElementById("nso").setAttribute("class", "hidden");
  document.getElementById("fla").setAttribute("class", "hidden");
  document.getElementById("remodel").setAttribute("class", "hidden");
  document.getElementById("minimize").setAttribute("class", "hidden");
}

function viewMerch() {
  document.getElementById("merch").removeAttribute("class");
  document.getElementById("ops").setAttribute("class", "hidden");
  document.getElementById("brand").setAttribute("class", "hidden");
  document.getElementById("exit").removeAttribute("class");
}

function viewOps() {
  document.getElementById("ops").removeAttribute("class");
  document.getElementById("merch").setAttribute("class", "hidden");
  document.getElementById("brand").setAttribute("class", "hidden");
  document.getElementById("exit").removeAttribute("class");
}

function viewBrand() {
  document.getElementById("brand").removeAttribute("class");
  document.getElementById("merch").setAttribute("class", "hidden");
  document.getElementById("ops").setAttribute("class", "hidden");
  document.getElementById("exit").removeAttribute("class");
}

function closeServices() {
  document.getElementById("merch").setAttribute("class", "hidden");
  document.getElementById("ops").setAttribute("class", "hidden");
  document.getElementById("brand").setAttribute("class", "hidden");
  document.getElementById("exit").setAttribute("class", "hidden");
}

window.addEventListener("load", () => {
  document.getElementById("experience-btn").addEventListener("click", viewExp);
  document.getElementById("hide-exp-btn").addEventListener("click", hideExp);
  document.getElementById("hide-exp-btn2").addEventListener("click", hideExp);
  document.getElementById("achievements-btn").addEventListener("click", viewAch);
  document.getElementById("hide-ach-btn").addEventListener("click", hideAch);
  document.getElementById("nso-title").addEventListener("click", viewNso);
  document.getElementById("remodel-title").addEventListener("click", viewRemodel);
  document.getElementById("fla-title").addEventListener("click", viewFla);
  document.getElementById("minimize").addEventListener("click", closeEvents);
  document.getElementById("merch-title").addEventListener("click", viewMerch);
  document.getElementById("ops-title").addEventListener("click", viewOps);
  document.getElementById("brand-title").addEventListener("click", viewBrand);
  document.getElementById("exit").addEventListener("click", closeServices);
});
