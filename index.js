var skillsEl = document.getElementById("skills-list");

var skills = [
  { name: "HTML", endorcements: 5 },
  { name: "CSS", endorcements: 4 },
  { name: "JS", endorcements: 3 },
  { name: "C++", endorcements: 2 },
  { name: "C#", endorcements: 1 },
];

var skillsHTML = skills.map(function (skill) {
  return `<li>${skill.name} - <span>${skill.endorcements}</span></li>`;
});

skillsEl.innerHTML = skillsHTML.join("");

function hideAllPages() {
  var pages = document.querySelectorAll(".page");

  pages.forEach(function (page) {
    hide(page.id);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

function initMenu() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        displayPage(id);
      }
    });
}

displayPage("skills");
initMenu();
