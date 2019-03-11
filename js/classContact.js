class Contact{
    constructor(types){
        this.idContainer = $("#contact");
        this.types = types;
        this.title();
        this.details();
    }

    title(){
        let titleContact = `<h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">{{ title }}</h3>`
        this.idContainer.append(titleContact);
    }

    details(){
        
        for (let i = 0; i < this.types.length; i++) {
            let detail = `<div class="w3-row-padding">
                            <p class="w3-col l4 m4 w3-hide-small"></p>
                            <p class="w3-col l4 m4 w3-border-bottom w3-border-light-grey w3-padding-16 w3-center"><i class="fas fa-${this.types[i].class}"></i><b>${this.types[i].typeElem}</b> {{ ${this.types[i].textElem}}}</p>
                        </div>`
            this.idContainer.append(detail);
        }
    }
}