/* ---------------------------------------------------------------------------------------------- */
// Init de quelques varibles utiles pour la construction

let noms = ["Denis", "Ludovic", "Sandrine"];

let contacts = [
    {
        class: "phone",
        typeElem: " Tel : ",
        textElem: "tel",
    },
    {
        class: "envelope",
        typeElem: " Email : ",
        textElem: "mail",
    },
    {
        class: "map-marker-alt",
        typeElem: " Adresse : ",
        textElem: "address",
    },
];

var type_projets = [["Maison1", "4"], ["Maison2", "8"], ["Ecole1", "5"], ["BatIndus", "5"], ["Scolaire", "13"]];
var prjImgPath = "img/ProjetSection/";

/* ---------------------------------------------------------------------------------------------- */
// Construction de la page

let Struct = new Structure();
let AboutSection = new About(noms);
let ProjetsSection = new Projets(type_projets);
let ContactSection = new Contact(contacts);


/* ---------------------------------------------------------------------------------------------- */
// Init données de la page
$("document").ready(function(){

    let dataNavHead = new Vue({
        el: '#topContent',
        data: {
            menuItem_1: "Qui ?",
            menuItem_2: "Vision",
            menuItem_3: "Projets",
            menuItem_4: "Contact",
    
            ref1: "#qui",
            ref2: "#vision",
            ref3: "#projets",
            ref4: "#contact",
    
            nomP1: "Bordeaux",
            nomP2: "Architectes",
    
            imgHead: "img/Header/ville.jpg",
        }
    });
    
    let dataAbout = new Vue({
        el: '#about',
        data: {
            titleVision: "Vision",
            titleQui: "Qui nous sommes",
    
            textVision: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.`,
    
            quiTextDenis: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.`,
            quiTextLudovic: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.`,
            quiTextSandrine: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.`,
                        
            srcQuiImgDenis: "img/QuiSection/Denis.jpg",
            srcQuiImgLudovic: "img/QuiSection/Ludovic.jpg",
            srcQuiImgSandrine: "img/QuiSection/Sandrine.jpg",
        }
    });
    
    let dataProjets = new Vue({
        el: '#projets',
        data: {
            title: "Projets",
    
            nomProjet1: "Maison 1",
            nomProjet2: "Maison 2",
            nomProjet3: "Enseignement",
            nomProjet4: "Industriel",
            nomProjet5: "Scolaire",
    
            imgProjet1: "img/ProjetSection/Maison1/1.jpg",
            imgProjet2: "img/ProjetSection/Maison2/1.jpg",
            imgProjet3: "img/ProjetSection/Ecole1/1.jpg",
            imgProjet4: "img/ProjetSection/BatIndus/1.jpg",
            imgProjet5: "img/ProjetSection/Scolaire/1.jpg",
        }
    });
    
    let dataContact = new Vue({
        el: '#contact',
        data: {
            title: "Nous contacter",
            tel: "05 56 36 38 69",
            mail: "thepaut.architecte@9business.fr",
            address: "24 avenue Carnot 33600 Pessac",
        }
    });
    
    let dataFooter = new Vue({
        el: '#footer',
        data: {
            footerText: "",
        }
    });
})


// test

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("menuLarge");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("menuNavBarTopSmall");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}