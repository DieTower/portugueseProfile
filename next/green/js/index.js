class Index {

    constructor() {

        // Container
        this.container = $('.container');

        // Nav li
        this.liMovie = $('.li1');
        this.liTv = $('.li2');
        this.liTravel = $('.li3');

        // Article
        this.articleMovies = $('.movies');
        this.articleTv = $('.tvShows');
        this.articleTravel = $('.travel');

        // Country elements
        this.spain = $('.spain');
        this.norway = $('.norway');
        this.england = $('.england');
        this.czech = $('.czech');
        this.hungary = $('.hungary');

        // Nav
        this.nav = $('.navFirstOne');

        // Back buttons
        this.back1 = $('.back1');
        this.back2 = $('.back2');
        this.back3 = $('.back3');

        this.kane = $('.ck');

        this.attachmentEvents();

    }

    attachmentEvents() {
        this.articleMovies.addEventListener("mouseover",this.changeLi.bind(this));
        this.articleTv.addEventListener("mouseover",this.changeLi.bind(this));
        this.articleTravel.addEventListener("mouseover",this.changeLi.bind(this));

        this.articleMovies.addEventListener("mouseout",this.changeLiClean.bind(this));
        this.articleTv.addEventListener("mouseout",this.changeLiClean.bind(this));
        this.articleTravel.addEventListener("mouseout",this.changeLiClean.bind(this));

        /* Country effects */
        this.spain.addEventListener("mouseover",this.countryEffect.bind(this));
        this.norway.addEventListener("mouseover",this.countryEffect.bind(this));
        this.england.addEventListener("mouseover",this.countryEffect.bind(this));
        this.czech.addEventListener("mouseover",this.countryEffect.bind(this));
        this.hungary.addEventListener("mouseover",this.countryEffect.bind(this));

        this.articleTravel.addEventListener("mouseover",this.countryClean.bind(this));

        this.kane.addEventListener("mouseover",this.changeMovieImgOver.bind(this));
        this.kane.addEventListener("mouseout",this.changeMovieImgOut.bind(this));

        /* Back effects */
        this.back1.addEventListener("click",this.goBackLeft.bind(this));
        this.back2.addEventListener("click",this.goBackTop.bind(this));
        this.back3.addEventListener("click",this.goBackLeft.bind(this));
    }

    goBackLeft() {

        this.container.classList.add('getOutLeft');

        setTimeout(function() {

            window.open("../../index.html","_self");

        }, 550);

    }

    goBackTop() {

        this.container.classList.add('getOutTop');
        
        setTimeout(function() {

            window.open("../../index.html","_self");
            
        }, 550);

    }

    countryClean(element) {

        var e = element.target;

        if(e.parentElement.parentElement.classList.contains('travel') || e.parentElement.parentElement.parentElement.classList.contains('travel')) {

            this.countryEffectClean();

        }

    }

    countryEffect(element) {

        var e = element.target;

        this.countryEffectClean();

        if(e.classList.contains('spain') || e.parentElement.classList.contains('spain')) {
            
            this.nav.classList.add('spainImg');

        } else if(e.classList.contains('norway') || e.parentElement.classList.contains('norway')) {

            this.nav.classList.add('norwayImg');

        } else if(e.classList.contains('england') || e.parentElement.classList.contains('england')) {

            this.nav.classList.add('englandImg');

        } else if(e.classList.contains('czech') || e.parentElement.classList.contains('czech')) {

            this.nav.classList.add('czechImg');

        } else if(e.classList.contains('hungary') || e.parentElement.classList.contains('hungary')) {

            this.nav.classList.add('hungaryImg');

        }

    }

    countryEffectClean() {

        if(this.nav.classList.contains('spainImg')) {

            this.nav.classList.remove('spainImg');

        } else if(this.nav.classList.contains('norwayImg')) {

            this.nav.classList.remove('norwayImg')

        } else if(this.nav.classList.contains('englandImg')) {

            this.nav.classList.remove('englandImg')

        } else if(this.nav.classList.contains('czechImg')) {

            this.nav.classList.remove('czechImg')

        } else if(this.nav.classList.contains('hungaryImg')) {

            this.nav.classList.remove('hungaryImg')

        }

    }

    changeLi(element) {

        var e = element.target;

        if(e.classList.contains('movies') || e.parentElement.classList.contains('movies') || e.parentElement.parentElement.classList.contains('movies') || e.parentElement.parentElement.parentElement.classList.contains('movies')) {
            
            this.liMovie.classList.add('greenLi');

        } else if(e.classList.contains('tvShows') || e.parentElement.classList.contains('tvShows') || e.parentElement.parentElement.classList.contains('tvShows') || e.parentElement.parentElement.parentElement.classList.contains('tvShows') || e.parentElement.parentElement.parentElement.parentElement.classList.contains('tvShows')) {

            this.liTv.classList.add('greenLi');

        } else if(e.classList.contains('travel') || e.parentElement.classList.contains('travel') || e.parentElement.parentElement.classList.contains('travel') || e.parentElement.parentElement.parentElement.classList.contains('travel') || e.parentElement.parentElement.parentElement.parentElement.classList.contains('travel') || e.parentElement.parentElement.parentElement.parentElement.parentElement.classList.contains('travel')) {
            
            this.liTravel.classList.add('greenLi');

        }

    }

    changeLiClean() {
        
        if(this.liMovie.classList.contains('greenLi')) {

            this.liMovie.classList.remove('greenLi');

        } else if(this.liTv.classList.contains('greenLi')) {

            this.liTv.classList.remove('greenLi');

        } else if(this.liTravel.classList.contains('greenLi')) {

            this.liTravel.classList.remove('greenLi');

        }

    }

    changeMovieImgOver() {
        var background = $('.movies');
        var span1 = $('.tk',background);
        var span2 = $('.ck',background);

        if(background.classList.contains('img1')) {

            background.classList.remove('img1');
            background.classList.add('img2');
            span1.classList.remove('underLine');
            span2.classList.add('underLine');
        }

    }

    changeMovieImgOut() {
        var background = $('.movies');
        var span1 = $('.tk',background);
        var span2 = $('.ck',background);

        if(background.classList.contains('img2')) {

            background.classList.remove('img2');
            background.classList.add('img1');
            span1.classList.add('underLine');
            span2.classList.remove('underLine');

        }
    }

}

const index = new Index();