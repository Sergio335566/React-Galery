import { TimelineMax as Timeline, Power1, Power2, Power3 } from 'gsap';
export default class Animation {
    getAboutTimeline(delay) {
        var timeline = new Timeline({ paused: true });
        this.backGalery = this.container.querySelector('.js-galery');
        this.artistDescription = this.container.querySelectorAll('.js-description p span');
        timeline.from(this.container, 0.3, { display: 'none', autoAlpha: 1, delay: this.delay }).to(this.container, 1, { display: 'block', autoAlpha: 1 });
        timeline
            .from(this.home, 0.4, {autoAlpha: 0})
            .from(this.backGalery, 0.4, {autoAlpha: 0})
            .staggerFrom(this.artistDescription, 0.5, {autoAlpha: 0}, 0.3)
        return timeline;
    }
    getProjectTimeline(delay){
        var timeline = new Timeline({ paused: true });
        if (this.content && this.contentInner) {
            timeline
                .to(this.h1, 0.4, {display: 'block', autoAlpha: 1})
                .from(this.container, 0.1, { display: 'none', delay: this.delay, ease: Power1.easeIn })
                .from(this.content, 0.15, { autoAlpha: 1, ease: Power1.easeInOut })
                .from(this.contentInner, 0.15, { autoAlpha: 1, ease: Power1.easeIn })
                .from(this.home, 0.4, {display: 'none', autoAlpha: 0})
                .from(this.images, 0.4, { autoAlpha: 0, ease: Power1.easeIn })
                .from(this.imageName, 0.3, { y: 35, autoAlpha: 0, ease: Power3.easeOut })
        }
        return timeline;
    }

    getHomeTimeline(delay){
        var timeline = new Timeline({ paused: false });
        timeline.from(this.container, 0.3, { display: 'none', autoAlpha: 1, delay: this.delay }).to(this.container, 1, { display: 'block', autoAlpha: 1 });
        timeline.staggerFrom(this.texts, 0.3, {autoAlpha: 0}, 0.15)
        timeline.from(this.images, 0.3, {autoAlpha: 0, y: 10, ease: Power3.easeOut})
        return timeline;
    }

    play(pathname, node, appears){
        this.container = node;
        this.images = this.container.querySelectorAll('.container-images .container-images-single');
        this.imageName = this.container.querySelector('.container-images .image-name');
        this.texts = this.container.querySelectorAll('h3 a');
        this.content = this.container.querySelector('.content');
        this.contentInner = this.container.querySelector('.content--inner');
        this.h1 = this.container.querySelector('h1');
        this.home = this.container.querySelector('.js-home');
        this.cursor = this.container.querySelector('.js-cursor')
        this.about = this.container.querySelector('.js-about');
        this.delay = appears ? 0 : 1;
        this.containerName = this.container.classList[1];
        var timeline;
        if (this.containerName === 'js-container-artists'){
            timeline = this.getHomeTimeline()
        }
        else if(this.containerName === 'js-container-singleArtist') {
            timeline = this.getProjectTimeline()
        }
        else if(this.containerName === 'js-container-about') {
            timeline = this.getAboutTimeline()
        }
        for (var i = 0; i < this.texts.length; i++) {
            this.texts[i].addEventListener('click', this.clickTitle.bind(this, i));
        }
        window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
    }

    exit(){
        var timeline = new Timeline({ paused: true });
        if (this.containerName === 'js-container-artists') {
            timeline.to(this.cursor, 0.1, {autoAlpha: 0}).to(this.images, 0.6, { y: 15, autoAlpha: 0, ease: Power1.easeOut }, 0.5)
        }
        else if(this.containerName === 'js-container-singleArtist') {
            timeline.to(this.images, 0.2, { autoAlpha: 0, ease: Power1.easeIn }).to(this.home, 0.4, { autoAlpha: 0}).to(this.imageName, 0.3, { y: 35, autoAlpha: 0, ease: Power3.easeOut }).to(this.h1, 0.3, {y: -35, autoAlpha: 0, ease: Power3.easeOut })
        }
        else if(this.containerName === 'js-container-about') {
            timeline.to(this.home, 0.4, {autoAlpha: 0})
                    .to(this.backGalery, 0.4, {autoAlpha: 0})
                    .staggerTo(this.artistDescription, 0.5, {autoAlpha: 0}, 0.3)
        }
        timeline.to(this.container, 0.5, {autoAlpha: 0, ease: Power1.easeOut}, 2)
        timeline.play();
    }

    clickTitle(i){
        var timeline = new Timeline();
        var timeline2 = new Timeline();
        this.texts[i].classList.add('clicked')
        console.log(this.texts)
        for (var i = 0; i < this.texts.length; i++) {
            if (this.texts[i].classList.contains('clicked')) {
                timeline
                .to(this.texts[i], 0.6, {position: 'absolute', autoAlpha: 1, display: "block", x: '-50%', left:'50%', ease: Power2.easeOut, delay: 0.8})
            } else {
                timeline2
                    .to(this.texts[i], 0.2, {y: '-5%', autoAlpha: 0, ease: Power3.easeIn})
            }
        }
    }
}
