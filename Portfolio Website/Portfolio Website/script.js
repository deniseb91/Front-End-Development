//Grab button:
let mybutton=document.getElementById("myBtn");

//Hide button, but show button when scrolled down
window.onscroll=function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop>600||document.documentElement.scrollTop>600){
        mybutton.style.display="block";
    }else{
        mybutton.style.display="none";
    }
}

//Scroll to top when clicked
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

//Smooth scroll down from links
let animationLink=document.getElementById("animLink");
let modelLink=document.getElementById("modelLink");
let webdevLink=document.getElementById("webdevLink");
let contactLink=document.getElementById("name");

let goToAnim=function(){
    document.getElementById("animation").scrollIntoView({behavior: "smooth"});
}
let goToModel=function(){
    document.getElementById("modeling").scrollIntoView({behavior: "smooth"});
}
let goToWebdev=function(){
    document.getElementById("webdev").scrollIntoView({behavior: "smooth"});
}
let goToContact=function(){
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
}

animationLink.addEventListener("click", goToAnim);
modelLink.addEventListener("click", goToModel);
webdevLink.addEventListener("click", goToWebdev);
contactLink.addEventListener("click", goToContact);

//Move squarepics upon click, select the images first
const animsquare=document.getElementById("animsquare");
const modelsquare=document.getElementById("modelsquare");
const websquare=document.getElementById("websquare");

//Function to scroll to a specific place for each squarepic, move the picture, add bounce and add disappear
let bounce=function(){
    //function to bounce and disappear
}

let moveToAnimation=function(){
    document.getElementById("animation").scrollIntoView({behavior: "smooth"});
    animsquare
    bounce();
}

let moveToModeling=function(){
    document.getElementById("modeling").scrollIntoView({behavior: "smooth"});
    bounce();
}

let moveToWebdev=function(){
    document.getElementById("webdev").scrollIntoView({behavior: "smooth"});
    bounce();
}

//Make the above function happen upon click of the square
animsquare.addEventListener("click", moveToAnimation);
modelsquare.addEventListener("click", moveToModeling);
websquare.addEventListener("click", moveToWebdev);