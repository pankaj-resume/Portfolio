// Typing Effect
const roles = ["AI Developer","Full Stack Developer","Graphic Designer"];
let i=0,j=0,del=false;

function type(){
  let txt=roles[i];
  document.getElementById("typing").innerText=txt.substring(0,j);

  if(!del) j++; else j--;

  if(j==txt.length) del=true;
  if(j==0){ del=false; i=(i+1)%roles.length; }

  setTimeout(type,del?50:100);
}
type();

// FILTER
function filterSelection(cat){
  let cards=document.querySelectorAll(".card");
  cards.forEach(card=>{
    if(cat==="all"||card.classList.contains(cat)){
      card.style.display="block";
    }else{
      card.style.display="none";
    }
  });
}

// LIGHTBOX
document.querySelectorAll(".card img").forEach(img=>{
  img.onclick=()=>{
    let popup=document.createElement("div");
    popup.style.position="fixed";
    popup.style.top=0;
    popup.style.left=0;
    popup.style.width="100%";
    popup.style.height="100%";
    popup.style.background="rgba(0,0,0,0.9)";
    popup.style.display="flex";
    popup.style.justifyContent="center";
    popup.style.alignItems="center";

    let full=document.createElement("img");
    full.src=img.src;
    full.style.maxWidth="90%";

    popup.appendChild(full);
    document.body.appendChild(popup);

    popup.onclick=()=>popup.remove();
  };
});

// AOS
AOS.init();