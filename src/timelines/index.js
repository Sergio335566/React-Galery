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
            .from(imageName, 0.3, { y: 35, autoAlpha: 0, ease: Power3.easeOut });
    }
    return timeline;
};

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({ paused: true });
    const texts = node.querySelectorAll('h1');

    return timeline;
};

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 1;
    let timeline;
    if (pathname === '/') timeline = getHomeTimeline(node, delay);
    else timeline = getDefaultTimeline(node, delay);
    const texts = node.querySelectorAll('h3');
    for (var i = 0; i < texts.length; i++) {
        texts[i].addEventListener('click', mouseMove.bind(this, texts, i));
    }
    window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = node => {
    const timeline = new Timeline({ paused: true });
    let images = node.querySelectorAll('.container-images .container-images-single');
    timeline.to(images, 0.15, { autoAlpha: 0, ease: Power1.easeOut })
    timeline.play();
};

const mouseMove = (texts, i, title) => {
    const timeline = new Timeline();
    const width = texts[i].offsetLeft;
    timeline
        .to(texts, 0.4, {autoAlpha: 0, display: "none"})
        .to(texts[i], 0.7, {position: 'absolute', autoAlpha: 1, display: "block", x: '-50%', left:'50%', ease: Power1.easeOut})
        .to(texts[i], 0.3, {fontSize: '2rem', ease: Power1.easeOut})
        .to(texts[i], 0.3, {x: '-50%', ease: Power3.easeIn })
    // timeline.play();
}
