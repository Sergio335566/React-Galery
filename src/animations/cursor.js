import { TweenMax, TimelineMax as Timeline } from 'gsap';
export default class Cursor {
    constructor(containerEl, pathName) {
        this.container = containerEl;
        this.pathname = pathName;
        this.init();
    }
    init() {
        this.navigation = this.container.querySelector('.js-navigation');
        this.cursor = this.container.querySelector('.js-cursor');
        this.images = this.container.querySelectorAll('.container-images img');
        this.imageName = this.container.querySelector('.js-image-name h2');
        this.home = this.container.querySelector('.js-home');
        this.about = this.container.querySelector('.js-about');
        this.nameContainer = this.container.querySelector('.js-names');
        this.leftContainer = this.navigation.querySelector('.js-left');
        this.rightContainer = this.navigation.querySelector('.js-right');
        this.hover = this.container.querySelectorAll('.js-hover');
        this.indexLength = this.images.length;
        this.correctPathName = this.pathname === '/';
        this.index = 0;
        this.images[0].style.opacity = "1";
        this.imageName.innerHTML = this.images[0].getAttribute('data-name');
        this.initListeners();
    }
    initListeners() {
        for (var i = 0; i < this.hover.length; i++) {
            this.hover[i].addEventListener('mouseenter', this.textHover.bind(this));
            this.hover[i].addEventListener('mouseleave', this.textHover.bind(this));
        }
        this.container.addEventListener('mousemove', this.cursorMove.bind(this));
        this.leftContainer.addEventListener('mousemove', this.nextCursor.bind(this, false));
        this.leftContainer.addEventListener('click', this.displayImages.bind(this, false));
        this.rightContainer.addEventListener('mousemove', this.nextCursor.bind(this, true));
        this.rightContainer.addEventListener('click', this.displayImages.bind(this, true));
        this.clicked = false;
    }
    cursorMove(event) {
        this.mouseX = event.pageX;
        this.mouseY = event.pageY;
        this.cursor.style.transform = 'translate3D(' + this.mouseX + 'px,' + this.mouseY + 'px, 0px)';
    }
    changeName(sens) {
        this.clicked = false;
        this.images[this.index].style.opacity = "0";
        this.images[this.newIndex].style.opacity = "1";
        this.index = this.newIndex;
        this.imageName.innerHTML = this.images[this.newIndex].getAttribute('data-name');
        this.nextCursor(sens);
    }
    displayImages(sens) {
        this.newIndex = sens ? this.index + 1 : this.index - 1;
        this.yMove = sens ? "20" : '-20';
        if (this.newIndex < 0) {
          this.newIndex = this.indexLength - 1;
        }
        if (this.newIndex === this.indexLength) {
          this.newIndex = 0
        }
        this.images[this.newIndex].getAttribute('data-name');
        this.timeline = new Timeline();
        if (this.clicked === false) {
            this.clicked = true;
            this.timeline.add(
            TweenMax.to(this.imageName, 0.1, {y: this.yMove, opacity: 0}))
            .add(
            TweenMax.to(this.imageName, 0.1, {y: -this.yMove, opacity: 0, onComplete: this.changeName.bind(this, sens)}))
            .add(
            TweenMax.to(this.imageName, 0.1, {y: 0, opacity: 1}));
        }
    }
    nextCursor(sens) {
        var indexCursor = sens ? this.index + 1 : this.index - 1;
        this.nextImage = indexCursor;
        if (indexCursor < 0) {
          this.nextImage = this.indexLength - 1;
        }
        if (indexCursor === this.indexLength) {
          this.nextImage = 0;
        }
        this.cursor.style.backgroundImage = "url(" + this.images[this.nextImage].currentSrc + ")";
    }
    textHover(event) {
        if (event.type === 'mouseenter') {
            this.cursor.classList.add('hidden');
        } else {
            this.cursor.classList.remove('hidden');
        }
    }
}
