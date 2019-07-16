export const init = (node) => {
    window.loadPromise.then(() => requestAnimationFrame(() => console.log("coucou")));
};
