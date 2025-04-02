window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

document.addEventListener("DOMContentLoaded", () => {
    setScrollVar();
    splitScroll();
    scrollWindow();
});

function setScrollVar() {
    const htmlElement = document.documentElement;
    const scrollPercent = Math.min((htmlElement.scrollTop / htmlElement.clientHeight) * 100, 100);
    htmlElement.style.setProperty("--scroll", scrollPercent);
    document.getElementById("header").style.zIndex = scrollPercent > 15 ? "-10" : "1";
}

function splitScroll() {
    new ScrollMagic.Controller()
        .addScene(new ScrollMagic.Scene({
            duration: '270.3%',
            triggerElement: '.navbar',
            triggerHook: 0
        }).setPin('.navbar'));
}

function scrollWindow() {
    window.scrollTo(0, 0);
}

function projectScroll(x) {
    if (x.matches) {
        new ScrollMagic.Controller()
            .addScene(new ScrollMagic.Scene({
                duration: '80%',
                triggerElement: '.projects-title',
                triggerHook: 0.05
            }).setPin('.projects-title'));
    }
}

const mediaQuery = window.matchMedia("(min-width: 768px)");
projectScroll(mediaQuery);
mediaQuery.addEventListener("change", () => projectScroll(mediaQuery));
