import { TweenMax, TimelineMax as Timeline } from 'gsap';
export default class Name {
    constructor(containerEl, pathName) {
        this.container = containerEl;
        this.hover = this.container.querySelectorAll('.js-hover');
        this.name = this.container.querySelector('.artist-name');
        this.home = this.container.querySelector('.js-home');
        this.backGalery = this.container.querySelector('.js-galery');
        this.surnom = this.container.querySelector('.js-surnom');
        this.initListeners();
    }
    initListeners() {
        for (var i = 0; i < this.hover.length; i++) {
            this.hover[i].addEventListener('mouseenter', this.textHover.bind(this));
            this.hover[i].addEventListener('mouseleave', this.textHover.bind(this));
        }
        this.container.addEventListener('mousemove', this.nameMove.bind(this));
        this.container.addEventListener('click', this.addName.bind(this));
        this.clicked = 0;
    }
    nameMove(event) {
        this.mouseX = event.pageX;
        this.mouseY = event.pageY;
        var timeline = new Timeline(),
            timeline2 = new Timeline();
        timeline.to(this.name, 0.3, {x: this.mouseX, y: this.mouseY})
        timeline2.staggerTo(this.surnom, 0.4, {x: this.mouseX, y: this.mouseY}, 0.1)
    }
    textHover(event) {
        if (event.type === 'mouseenter') {
            this.name.classList.add('hidden');
        } else {
            this.name.classList.remove('hidden');
        }
    }
    addName() {
        this.positionX = this.mouseX / window.innerWidth * 100;
        this.positionY = this.mouseY / window.innerHeight * 100;
        if (this.clicked < 10) {
            var clone = this.surnom.firstElementChild.cloneNode(true);
            clone.classList.add(this.clicked)
            this.surnom.appendChild(clone);
            var that = this;
            setTimeout(function(){
                that.surnom.removeChild(clone)
            }, 1000);
            this.spanSurnom = this.surnom.querySelectorAll('.js-surnom span');
            this.spanSurnom[this.clicked].style.left = this.positionX + "%";
            this.spanSurnom[this.clicked].style.top = this.positionY + "%";
        }


    }
}
