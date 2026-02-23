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
skillsSection.appendChild(skillsList);
const messageForm = document.getElementsByName("leave-message")[0];
messageForm.addEventListener("submit",function(event){
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);
    messageForm.reset();
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.id="userNameList";
    newMessage.innerHTML = ` 
    <a href="mailto:${usersEmail}" id = "user-link">${usersName}</a> <br/>
     <span>${usersMessage}</span><br/>
    `;

    messageList.appendChild(newMessage);
   //remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.id = "removeButton";
    removeButton.type = "button";
    removeButton.addEventListener("click",function(e){
        let entry = removeButton.parentNode;
        entry.remove();

        
    })
    newMessage.appendChild(removeButton);
    
    messageList.appendChild(newMessage);
    //edit button
    const editButton = document.createElement("button");
    editButton.id = "editButton";
    editButton.innerText = "edit";
    editButton.type = "button";
    editButton.addEventListener("click", function(){
        const messageSpan = newMessage.querySelector("span");
        const currentMessage = messageSpan.textContent;
        const editedMessageText = prompt("Edit message:", currentMessage);
        messageSpan.textContent = editedMessageText;
        
    })
    newMessage.appendChild(editButton);
    // Just a line below every message
    const hr = document.createElement("hr");
    newMessage.appendChild(hr);
})
