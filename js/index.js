class Index {

    constructor() {

        this.container = $('.container');
        this.profile = $('.profile');

        this.green = $(".greenContainer");
        this.greenBig = $(".greenBigContainer");
        this.red = $(".redContainer");
        this.redBig = $(".redBigContainer");
        this.lisbon = $(".lisbon");
        
        // "Hi" thing
        this.hi = $(".hi");

        this.word1 = $(".word1");
        this.word2 = $(".word2");
        
        this.yellowArrow = $(".yellowArrow");

        this.greenVanish = $(".vanishContainer1");
        this.redVanish = $(".vanishContainer2");

        this.attachmentEvents();
    }

    attachmentEvents() {
        this.greenVanish.addEventListener("mouseover",this.greenEffectOver.bind(this));
        this.greenVanish.addEventListener("mouseout",this.greenEffectOut.bind(this));
        this.greenVanish.addEventListener("click",this.greenEffectClick.bind(this));
        this.word1.addEventListener("click",this.greenEffectClick.bind(this));

        this.yellowArrow.addEventListener("click",this.yellowArrowEffect.bind(this));

        this.redVanish.addEventListener("mouseover",this.redEffectOver.bind(this));
        this.redVanish.addEventListener("mouseout",this.redEffectOut.bind(this));
        this.redVanish.addEventListener("click",this.redEffectClick.bind(this));
        this.word2.addEventListener("click",this.redEffectClick.bind(this));

        this.lisbon.addEventListener("mouseover",this.lisbonEffectOver.bind(this));
        this.lisbon.addEventListener("mouseout",this.lisbonEffectOut.bind(this));
        this.lisbon.addEventListener("click",this.lisbonClick.bind(this));

        this.lisbon.addEventListener("mouseover",this.changeImgForward.bind(this));
        this.lisbon.addEventListener("mouseout",this.changeImgBackward.bind(this));
    }

    greenEffectOver() {
        this.green.classList.add('callGreenContainer');
        this.word1.classList.add('show');
        //this.yellowArrow.classList.add('hidden');
    }

    greenEffectOut() {
        this.green.classList.remove('callGreenContainer');
        this.word1.classList.remove('show');
        //this.yellowArrow.classList.remove('hidden');
    }

    greenEffectClick() {
        this.redVanish.classList.add('hidden');
        this.hi.classList.add('hidden');

        /* For the normal design */
        this.container.classList.add('green');

        /* For the alternative design */
        this.greenBig.classList.add('greenW');

        this.profile.classList.add('profileDown');
        this.word1.classList.add('goForLeft');

        setTimeout(function() {
            window.open("./next/green/index.html","_self");
        },900);
    }

    yellowArrowEffect() {
        var social = $('.social');
        var arrow = $('i',this.yellowArrow);
        var profile = $('ul',this.profile);

        if(social.classList.contains('vanish')) {

            profile.classList.add('profileHeight');

            setTimeout(function() {
                social.classList.remove('vanish');
                this.yellowArrow.classList.remove('arrowAnimation');
                arrow.classList.add('ninetyDegrees');
            }.bind(this), 100);

        } else {

            social.classList.add('vanish');
            this.yellowArrow.classList.add('arrowAnimation');
            arrow.classList.add('ninetyDegreesNull');
            arrow.classList.remove('ninetyDegrees');

            setTimeout(function() {
                profile.classList.add('profileHeightNull');
            }.bind(this), 100);

            setTimeout(function() {
                arrow.classList.remove('ninetyDegreesNull');
                profile.classList.remove('profileHeight');
                profile.classList.remove('profileHeightNull');
            }.bind(this),1500);

        }
    };

    redEffectOver() {
        this.red.classList.add('callRedContainer');
        this.word2.classList.add('show');
        this.hiddenHi();
    }

    redEffectOut() {
        this.red.classList.remove('callRedContainer');
        this.word2.classList.remove('show');
    }

    redEffectClick() {
        this.greenVanish.classList.add('hidden');

        /* For the normal design */
        this.container.classList.add('red');

        /* For the alternative design */
        this.redBig.classList.add('redW');

        this.profile.classList.add('profileUp');
        this.word2.classList.add('goForRight');

        setTimeout(function() {
            window.open("./next/red/index.html","_self");
        },600);
    }

    lisbonEffectOver() {
        this.green.classList.add('callGreenContainer');
        this.red.classList.add('callRedContainer');
        this.yellowArrow.classList.add('hidden');
        this.hiddenHi();
    }

    lisbonEffectOut() {
        this.green.classList.remove('callGreenContainer');
        this.red.classList.remove('callRedContainer');
        this.yellowArrow.classList.remove('hidden');
    }

    lisbonClick() {
        window.open("https://pt.wikipedia.org/wiki/Lisboa","_blank")
    }

    hiddenHi() {
        setTimeout(function() {
            this.hi.classList.add('hidden');
        }.bind(this),500);
    }

    changeImgForward() {
        var img = $('.img');

        img.classList.add('rotateImg');

        setTimeout(function() {
        
            img.classList.remove('img1');
            img.classList.add('img2');

        },250);

    }

    changeImgBackward() {
        var img = $('.img');

        img.classList.add('rotateImgBack');

        setTimeout(function() {

            img.classList.remove('img2');
            img.classList.add('img1');

        },250);

        setTimeout(function() {

            img.classList.remove('rotateImg');
            img.classList.remove('rotateImgBack');

        },950);

    }

}

const index = new Index();