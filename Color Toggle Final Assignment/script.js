//Define constants for colors
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const purple = document.getElementById("purple");

//Define body to target to change color
const bodyElement = document.body;

//Select side bar to change width
let getSideBar = document.querySelector(".nav-sidebar");
//Select ul to change visibility
let getSideBarUl = document.querySelector(".nav-sidebar ul");
//Select listed items to change opacity
let getColorElement = document.getElementsByClassName("color");


//function to close the menu
let closeMenu = function () {
    getSideBar.style.width = "50px";
        
    for (let i=0; i < getColorElement.length; i++) {
        getColorElement[i].style.opacity = "0";
    }
    getSideBarUl.style.visibility = "hidden";
};

//add eventlistener to button top open the menu
let menuButton = document.querySelector(".btn-toggle-nav");
menuButton.addEventListener("mouseover", function(){
    openMenu();
});

menuButton.addEventListener("click", function(){
    openMenu();
});

getSideBar.addEventListener("mouseleave", function(){
    closeMenu();
});

let openMenu = function() {
        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = "300px";
        
        for (let i=0; i < getColorElement.length; i++) {
            getColorElement[i].style.opacity = "1";
        }

           
        red.addEventListener("click", function () {
            bodyElement.style.backgroundColor = "red";
            changeText("red!");
            closeMenu();
        });
        
        orange.addEventListener("click", function () {
            bodyElement.style.backgroundColor = "orange";
            changeText("orange!");
            closeMenu();
        });
        
        yellow.addEventListener("click", function () {
            bodyElement.style.backgroundColor = "yellow";
            changeText("yellow!");
            closeMenu();
        });
        
        green.addEventListener("click", function () {
            bodyElement.style.backgroundColor = "greenyellow";
            changeText("green!");
            closeMenu();
        });
               
        blue.addEventListener("click", function () {
            bodyElement.style.backgroundColor = "blue";
            changeText("blue!");
            closeMenu();
        });
        
        purple.addEventListener("click", function () {
            bodyElement.style.backgroundColor = "purple";
            changeText("purple!");
            closeMenu();
        });
    
};

//Hover a color
red.addEventListener("mouseover", function(){
    red.style.opacity = ".7";
});
red.addEventListener("mouseleave", function(){
    red.style.opacity = "1";
});
orange.addEventListener("mouseover", function(){
    orange.style.opacity = ".7";
});
orange.addEventListener("mouseleave", function(){
    orange.style.opacity = "1";
});
yellow.addEventListener("mouseover", function(){
    yellow.style.opacity = ".7";
});
yellow.addEventListener("mouseleave", function(){
    yellow.style.opacity = "1";
});
green.addEventListener("mouseover", function(){
    green.style.opacity = ".7";
});
green.addEventListener("mouseleave", function(){
    green.style.opacity = "1";
});
blue.addEventListener("mouseover", function(){
    blue.style.opacity = ".7";
});
blue.addEventListener("mouseleave", function(){
    blue.style.opacity = "1";
});
purple.addEventListener("mouseover", function(){
    purple.style.opacity = ".7";
});
purple.addEventListener("mouseleave", function(){
    purple.style.opacity = "1";
});

//Change text when picking a color
let colorPicked = document.getElementById("color-picked");
let changeText = function (clr) {
    colorPicked.textContent = "You picked " + clr;
};