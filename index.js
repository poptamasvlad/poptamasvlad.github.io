var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "C++", "C#"];

var skillsHtml = "";
var i = 0;

for (var i = 0; i < skills.length; i++) {
  skillsHtml += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHtml;

function displayHome() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("home").style.display = "block";
}

function displaySkills() {
  document.getElementById("home").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "block";
}

function displayLanguages() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
}

function displayProjects() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
  document.getElementById("projects").style.display = "block";
}

displayHome();
