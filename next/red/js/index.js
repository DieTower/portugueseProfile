import './function.js';

class Index {

    constructor() {

        // Container
        this.container = $('.container');

        // Button back
        this.buttonBack1 = $('.back1');
        this.buttonback2 = $('.back2');

        this.attachmentEvents();
    }

    attachmentEvents() {
        this.buttonBack1.addEventListener("click",this.goBackTop.bind(this));
        this.buttonback2.addEventListener("click",this.goBackLeft.bind(this));
    }

    goBackTop() {
        this.container.classList.add('getOutTop');
        setTimeout(this.redirect, 600);
    }

    goBackLeft() {
        this.container.classList.add('getOutLeft');
        setTimeout(this.redirect, 600);
    }

    redirect() {
        window.open("../../index.html","_self");
    }

}

const index = new Index();