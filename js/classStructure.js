class Structure {
    /**
     * Constructeur de la structure de la page
     * et des différentes parties
     */
    constructor(){
        this.templateHead = "header2";
        this.templateNav = "navBar2";
        this.Page = $("#Page");
        this.buildTop();
        this.contentBuild();
        this.mapBuild();
        this.footerBuild();
    }

    buildTop(){
        let idTop = "topContent";
        let topDiv = `<div id="${idTop}"></div>`
        this.Page.append(topDiv);
        this.navbarBuild(idTop);
        this.headerBuild(idTop);        
    }

    navbarBuild(idTop){
        let that = this;
        let idMenuNav = "menuNavBarTop";
        let navContainer = `<div class="w3-top">
                                <div class="w3-bar big-font" id="menuLarge">
                                    <a href="#home" class="w3-bar-item w3-button"><b>{{ nomP1 }}</b> {{ nomP2 }}</a>
                                    <div class="w3-right w3-hide-small menuGraphic" id="menuNavBarTop"></div>
                                </div>
      
                                <!-- Navbar on small screens -->
                                <div id="menuNavBarTopSmall" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                                </div>
                            </div>`;
        $(`#${idTop}`).append(navContainer);
        that.menuNavBuild(idMenuNav);
    }

    menuNavBuild(idMenu){
        for (let i = 1; i <= 4; i++) {
            $(`#${idMenu}`).append(`<a v-bind:href="ref${i}" class="w3-bar-item pullDownGraphic"><b>{{ menuItem_${i} }}</b></a>`);
        }
    }

    headerBuild(idTop){
        let header = `<div class="headContainer">
                        <div class="bgimg-1 w3-display-container" id="home">
                            <div class="w3-display-middle" style="white-space:nowrap;">
                                <span class="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity"><span class="w3-hide-small">{{ nomP1 }}</span> {{ nomP2 }}</span>
                            </div>
                        </div>
                    </div>`;
        $(`#${idTop}`).append(header);
    }

    contentBuild(){
        let idGContainer = "globalContainer";
        let globalContainer = `<div class="w3-content w3-padding" style="max-width:1564px" id="${idGContainer}"></div>`;
        this.Page.append(globalContainer);
        this.aboutBuild(idGContainer);
        this.projetBuild(idGContainer);
        this.contactBuild(idGContainer);
    }

    aboutBuild(idGContainer){
        let aboutContainer = `<div id="about"></div>`;
        $(`#${idGContainer}`).append(aboutContainer);
    }

    projetBuild(idGContainer){
        let projetContainer = `<div id="projetContainer"><div class="w3-container w3-padding-32" id="projets"></div></div>`;
        $(`#${idGContainer}`).append(projetContainer);
    }

    contactBuild(idGContainer){
        let contactContainer = `<div class="w3-container w3-padding-32" id="contact"></div>`;
        $(`#${idGContainer}`).append(contactContainer);
    }

    mapBuild(){
        let mapDiv = `<div id="googleMap" class="w3-grayscale"></div>`
        this.Page.append(mapDiv);
    }

    footerBuild(){
        let footerContent = `<footer class="w3-center w3-black w3-padding-16" id="footer"><p> {{ footerText }} </p></footer>`;
        this.Page.append(footerContent);
    }
}