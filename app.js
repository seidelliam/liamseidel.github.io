window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar(){
    const htmlElement = document.documentElement 
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    console.log( Math.min(percentOfScreenHeightScrolled* 100, 100))
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled* 100, 100))
    if(percentOfScreenHeightScrolled > 0.15){
        document.getElementById("header").style.zIndex = "-10";
    }
    else{
        document.getElementById("header").style.zIndex = "1";
    }
}

function splitScroll(){

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '270.3%',
        triggerElement: '.navbar',
        triggerHook: 0
    })
    .setPin('.navbar')
    .addTo(controller);
    

}

function scrollWindow(){
    window.scrollTo(0,0);
}

function projectScroll(x){
    if(x.matches){
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '80%',
        triggerElement: '.projects-title',
        triggerHook: 0.05
    })
    .setPin('.projects-title')
    .addTo(controller);
    }
}

var x = window.matchMedia("(min-width: 768px)")

// Call listener function at run time
projectScroll(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
  projectScroll(x);
});

setScrollVar();
splitScroll();
scrollWindow();