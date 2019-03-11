class Projets {
    constructor(types){
        this.idContainer = $("#projets");
        this.types = types;
        this.mosaique_row = 0;
        this.mosaique_col = 4;
        this.title();
        this.calculTailleMosaique();
        this.mosaique();
        this.modal();
    }

    title(){
        let titleProjet = `<h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">{{ title }}</h3>`
        this.idContainer.append(titleProjet);
    }

    calculTailleMosaique(){
        let row = Math.round(this.types.length / this.mosaique_col);
        if (row == 0){row = 1;}
        this.mosaique_row = row;
    }

    mosaique(){
        for (let i = 0; i < this.mosaique_row; i++) {
            let rowDiv = `<div class="w3-row-padding" id="row${i}"></div>`;
            this.idContainer.append(rowDiv);
            for (let j = 1; j <= this.types.length; j++) {
                let colDiv = `<div class="w3-col l3 m3 w3-margin-bottom">
                                <div class="w3-display-container hvr-grow">
                                    <div class="w3-display-topleft w3-black w3-padding">{{ nomProjet${j} }}</div>
                                    <img v-bind:src="imgProjet${j}" onclick="modalOpen(${j})" style="width:100%;" />
                                </div>
                            </div>`
                $(`#row${i}`).append(colDiv);
            }
        }
    }
    
    // modal(){
    //     let modalWindow = `<div id="modalSlider" class="modal">
    //                         <!-- Modal content -->
    //                         <div class="modal-content w3-display-center">
    //                             <div class="w3-content w3-display-container" style="max-width:800px">
    //                                 <span class="close w3-button w3-black w3-display-topright" id="cross">&times;</span>
    //                                 <div id="slideImg"></div>
    //                                 <div class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</div>
    //                                 <div class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</div>
    //                             </div>
    //                         </div>
    //                       </div>`;
    //     $("#projetContainer").append(modalWindow);
    // }

    // slides(mosaicNumber){
    //     $(".eraseSlide").remove();
    //     for(let i = 0; i < this.types[mosaicNumber - 1][1]; i++){
    //         let slides = `<img class="mySlides eraseSlide" src="${prjImgPath}${this.types[mosaicNumber - 1][0]}/${i + 1}.jpg">`;
    //         let dots = `<span class=" dots eraseSlide" onclick="currentDiv(${i + 1})"></span>`;
    //         $("#slideImg").append(slides);
    //         $("#toolBar").append(dots);
    //     }
    // }

    modal(){
        let modalWindow = `<div id="modalSlider" class="modal">
                                <!-- Modal content -->
                                <div class="modal-content w3-display-center" id="swiperContainer">
                                <!-- Swiper -->
                                    <div class="swiper-container">
                                        <span class="close w3-button w3-black w3-display-topright" id="cross">&times;</span>
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide eraseSlide"></div>
                                        </div>
                                        <!-- Add Pagination -->
                                        <div class="swiper-pagination"></div>
                                        <!-- Add Arrows -->
                                        <div class="swiper-button-next"></div>
                                        <div class="swiper-button-prev"></div>
                                    </div>
                                </div>
                            </div>`;
        $("#projetContainer").append(modalWindow);
    }

    slides(mosaicNumber){
        $(".eraseSlide").remove();
        for(let i = 0; i < this.types[mosaicNumber - 1][1]; i++){
            let slides = `<div class="swiper-slide eraseSlide"><img class="mySlidesSwipper" src="${prjImgPath}${this.types[mosaicNumber - 1][0]}/${i + 1}.jpg"></div>`;
            $(".swiper-wrapper").append(slides);
            
        }
    }
}