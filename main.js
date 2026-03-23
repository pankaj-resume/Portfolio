// Simple alert on button click

document.querySelector(".btn").addEventListener("click", function(){
    alert("Thank you for contacting!");
});

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

