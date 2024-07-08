const navbar = document.querySelector('.navbar');
navbar.classList.remove('navbar-transition');
const observer = new IntersectionObserver ((entries) =>{
    entries.forEach(entries => {

        if(entry.isIntersecting){
            navbar.classList.add('navbar-transition');
            return
        } 
            navbar.classList.remove('navbar-transition');
        
    });
});

observer.observe(document.querySelector('.navbar-wrapper'));
