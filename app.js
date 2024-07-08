
function splitScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '180%',
        triggerElement: '.navbar',
        triggerHook: 0
    })
    .addIndicators()
    .setPin('.navbar')
    .addTo(controller);
}

function projectsScroll(){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '80%',
        triggerElement: '.projects-title',
        triggerHook: 0
    })
    .addIndicators()
    .setPin('.projects-title')
    .addTo(controller);

}
projectsScroll();
splitScroll();
