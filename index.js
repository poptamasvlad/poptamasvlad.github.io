var skillsEl = document.getElementById("skills-list");

// skillsEl.style.color = "blue";
// skillsEl.style.fontSize = "15px";

// var oldText = skillsEl.innerHTML;
// skillsEl.innerHTML = oldText + "<li>JS</li>";

// skillsEl.innerHTML += '<li class="favorite">HTML</li>';
// skillsEl.innerHTML += '<li class="favorite">CSS</li>';
// skillsEl.innerHTML += "<li>JS</li>";
// skillsEl.innerHTML += "<li>C++</li>";
// skillsEl.innerHTML += "<li>C#</li>";

var skills = ["HTML", "CSS", "JS", "C++", "C#"];

// skillsEl.innerHTML += "<li>" + skills[0] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[1] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[2] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[3] + "</li>";
// skillsEl.innerHTML += "<li>" + skills[4] + "</li>";

var skillsHtml = "";
var i = 0;

for (var i = 0; i < skills.length; i++) {
  skillsHtml += "<li>" + skills[i] + "</li>";
}

skillsEl.innerHTML = skillsHtml;
