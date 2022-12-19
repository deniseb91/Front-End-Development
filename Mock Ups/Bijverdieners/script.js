/*.imkerportraits {
    display:flex;
    justify-content: center;
    padding: 0 180px;
    gap:10px;
}

.imkerportrait{
    flex:1;
    width:30%;
    height:auto;
    padding: 0 10px;
    margin: 0 auto; 
    
}
*/

//klik op contact in navbar > smooth scroll naar contact
let contactLink = document.getElementById("contactLink");

let goToContact = function(){
    document.getElementById("contactSection").scrollIntoView({behavior: "smooth"});
}

contactLink.addEventListener("click", goToContact);

//honingpot achtergrond blijft staan op footer
let honey = document.getElementByClassName("honeybg");

