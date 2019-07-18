import { TimelineMax as Timeline, Power1, Power3 } from 'gsap';

const getDefaultTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const content = node.querySelector('.content');
    const h1 = node.querySelector('h1');
    let images = node.querySelectorAll('.container-images .container-images-single');
    let imageName = node.querySelector('.container-images .image-name');
    let home = node.querySelector('.js-home');
    const contentInner = node.querySelector('.content--inner');

    if (content && contentInner) {
        timeline
            .to(h1, 0.4, {display: 'block', autoAlpha: 1})
            .from(node, 0.1, { display: 'none', delay, ease: Power1.easeIn })
            .from(content, 0.15, { autoAlpha: 1, ease: Power1.easeInOut })
            .from(contentInner, 0.15, { autoAlpha: 1, ease: Power1.easeIn })
            .from(home, 0.4, {display: 'none', autoAlpha: 0})
            .from(images, 0.4, { autoAlpha: 0, ease: Power1.easeIn })
            .from(imageName, 0.3, { y: 35, autoAlpha: 0, ease: Power3.easeOut })
    }
    return timeline;
};

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: false });
    let images = node.querySelectorAll('.container-images .container-images-single');
    const texts = node.querySelectorAll('h3');
    timeline.from(node, 0.3, { display: 'none', autoAlpha: 1, delay }).to(node, 1, { display: 'block', autoAlpha: 1 });
    timeline.staggerFrom(texts, 0.3, {autoAlpha: 0}, 0.15)
    timeline.from(images, 0.3, {autoAlpha: 0, y: 10, ease: Power3.easeOut})
    return timeline;
};

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 1;
    let timeline;
    if (pathname === '/') timeline = getHomeTimeline(node, delay);
    else timeline = getDefaultTimeline(node, delay);
    const texts = node.querySelectorAll('h3 a');
    for (var i = 0; i < texts.length; i++) {
        texts[i].addEventListener('click', mouseMove.bind(this, texts, i));
    }
    window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = (pathname, node) => {
    const timeline = new Timeline({ paused: true });
    let images = node.querySelectorAll('.container-images .container-images-single');
    let home = node.querySelector('.js-home');
    const h1 = node.querySelector('h1');
    let imageName = node.querySelector('.container-images .image-name');
    if (pathname === "/") {
        timeline.to(images, 1, { autoAlpha: 0, ease: Power1.easeOut }, 1)

    } else{
        timeline.to(images, 0.2, { autoAlpha: 0, ease: Power1.easeIn })
                .to(home, 0.4, { autoAlpha: 0})
                .to(imageName, 0.3, { y: 35, autoAlpha: 0, ease: Power3.easeOut })
                .to(h1, 0.3, {y: -35, autoAlpha: 0, ease: Power3.easeOut })
    }
    timeline.to(node, 0.5, {autoAlpha: 0, ease: Power1.easeOut}, 2)
    timeline.play();
};

const mouseMove = (texts, i, title) => {
    const timeline = new Timeline();
    timeline
        .to(texts, 0.1, {autoAlpha: 0})
        .to(texts, 0.2, {position: 'absolute'})
        .to(texts[i], 0.7, {position: 'absolute', autoAlpha: 1, display: "block", x: '-50%', left:'50%', ease: Power1.easeOut})
        .to(texts[i], 0.3, {x: '-50%', ease: Power3.easeIn })
}
