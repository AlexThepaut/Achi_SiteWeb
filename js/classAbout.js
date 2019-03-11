class About{
    /**
     * 
     * @param {array} noms array de noms
     */
    constructor(noms){
        this.idContainer = $("#about");
        this.noms = noms;
        this.qui();
        this.vision();
    }

    qui(){
        let idQui = "qui";
        let quiContainer = `<div class="w3-container w3-padding-32" id="${idQui}"></div>`
        this.idContainer.append(quiContainer);
        this.title(idQui, "titleQui");
        this.quiContent(idQui);
    }

    vision(){
        let idVision = "vision";
        let visionContainer = `<div class="w3-container w3-padding-32" id="${idVision}"></div>`
        this.idContainer.append(visionContainer);
        this.title(idVision, "titleVision");
        let textVision = `<p>{{ textVision }}</p>`;
        $(`#${idVision}`).append(textVision);
    }

    /**
     * Création du titre des deux sections
     * @param {string} id id de la div recepteur du titre
     * @param {string} text nom de la donnée VueJS qui sera affichée en titre
     */
    title(id, text){
        let titleDiv = `<h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">{{ ${text} }}</h3>`;
        $(`#${id}`).append(titleDiv);
    }

    quiContent(id){
        let taille = 12 / this.noms.length;
        for (let i = 0; i < 3; i++) {
            let hoverImg = `<div class="hvrbox w3-col l${taille} m${taille} w3-margin-bottom">
                                <img v-bind:src="srcQuiImg${this.noms[i]}" class="hvrbox-layer_bottom" style="width:100%">
                                <div class="hvrbox-layer_top">
                                    <div class="hvrbox-text">{{ quiText${this.noms[i]} }}</div>
                                </div>
                            </div>`;
            $(`#${id}`).append(hoverImg);
        }
    }
}