const navbar = document.querySelector('.head');
window.onscroll = () => {
    if (window.scrollY > 500) {
        navbar.classList.add('head-active');
    } 
    else {
        navbar.classList.remove('head-active');
    }
};