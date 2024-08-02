
function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.navbar',
        triggerHook: 0
    })
    .addIndicators()
    .setPin('.navbar')
    .addTo(controller);
    data-scrollmagic-pin-spacer.setAttribute('width', '11vw');
}

function projectsScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '80%',
        triggerElement: '.projects-title',
        triggerHook: 0.05
    })
    .addIndicators()
    .setPin('.projects-title')
    .addTo(controller);

}
projectsScroll();
splitScroll();