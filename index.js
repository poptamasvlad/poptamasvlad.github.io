var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "C++", "C#"];

var skillsHtml = "";
var i = 0;

for (var i = 0; i < skills.length; i++) {
  skillsHtml += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHtml;

var pageIds = ["home", "skills", "languages", "projects"];

function hideAllPages() {
  pageIds.forEach(function (pageId) {
    hide(pageId);
  });
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayLanguages() {
  displayPage("languages");
}

function displayProjects() {
  displayPage("projects");
}

function displayPage(id) {
  hideAllPages();
  show(id);
}

displayPage("home");
