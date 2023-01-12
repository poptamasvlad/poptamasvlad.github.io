var skillsEl = document.getElementById("skills-list");

var skills = ["HTML", "CSS", "JS", "C++", "C#"];

var skillsHtml = "";
var i = 0;

for (var i = 0; i < skills.length; i++) {
  skillsHtml += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHtml;

document.getElementById("home").style.display = "block";
