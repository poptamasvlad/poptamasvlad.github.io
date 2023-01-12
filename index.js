var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "C++", "C#"];

var skillsHtml = "";
var i = 0;

for (var i = 0; i < skills.length; i++) {
  skillsHtml += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHtml;

var pageIds = ["home", "skills", "languages", "projects"];

function hidePage(id) {
  hide(id);
}

function hideAllPages() {
  pageIds.forEach(hidePage);
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function displayHome() {
  hideAllPages();
  show("home");
}

function displaySkills() {
  hideAllPages();
  show("skills");
}

function displayLanguages() {
  hideAllPages();
  show("languages");
}

function displayProjects() {
  hideAllPages();
  show("projects");
}

displayHome();
