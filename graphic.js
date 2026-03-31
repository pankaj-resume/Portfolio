// AOS Animation
AOS.init();


// Typing Animation

const text = ["Full Stack Developer","Web Designer","Freelancer"];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];
letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{

setTimeout(type,100);

}

}

type();



// Image Popup Viewer

const images = document.querySelectorAll(".card img");

images.forEach(function(img){

img.addEventListener("click", function(){

const popup = document.createElement("div");

popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.background = "rgba(0,0,0,0.9)";
popup.style.display = "flex";
popup.style.alignItems = "center";
popup.style.justifyContent = "center";
popup.style.zIndex = "9999";

const popupImg = document.createElement("img");

popupImg.src = this.src;
popupImg.style.maxWidth = "90%";
popupImg.style.maxHeight = "90%";
popupImg.style.borderRadius = "10px";

popup.appendChild(popupImg);

document.body.appendChild(popup);

popup.addEventListener("click", function(){

popup.remove();

});

});

});



document.querySelectorAll(".card").forEach(function(card){

card.addEventListener("click", function(){

let img = this.querySelector("img").src;

// popup create
const popup = document.createElement("div");

popup.style.position = "fixed";
popup.style.top = "0";
popup.style.left = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.background = "rgba(0,0,0,0.95)";
popup.style.display = "flex";
popup.style.alignItems = "center";
popup.style.justifyContent = "center";
popup.style.zIndex = "9999";

// image
const popupImg = document.createElement("img");

popupImg.src = img;
popupImg.style.maxWidth = "95%";
popupImg.style.maxHeight = "95%";
popupImg.style.borderRadius = "10px";

popup.appendChild(popupImg);
document.body.appendChild(popup);

// close
popup.addEventListener("click", function(){
popup.remove();
});

});

});
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function(){

navLinks.classList.toggle("show");

});