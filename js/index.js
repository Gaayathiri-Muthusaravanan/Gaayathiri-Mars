const footer = document.getElementById("footer");
const container = document.querySelector(".container");
footer.style.textAlign="center";
footer.style.backgroundColor="#2c3e50";
footer.style.color="white";
footer.style.padding = "20px";
footer.innerHTML = "Copyrights";
const today = new Date();
const thisYear = today.getFullYear();
footer.innerHTML = `&copy; Gaayathiri Muthusaravanan ${thisYear} — All rights reserved.`;
const skills = ["Java", "JavaScript", "HTML", "CSS", "Github"];
const skillsSection = document.getElementById("skills");
const skillsList = document.querySelector(".skillsList");
for(let i=0; i<skills.length; i++){
    const skillsItem = document.createElement("li");
    skillsItem.className = "skillsItem";
    skillsItem.textContent = skills[i];
    skillsList.appendChild(skillsItem);
}
