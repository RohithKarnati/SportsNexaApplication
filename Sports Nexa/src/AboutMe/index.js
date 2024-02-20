function changeBG() {
    var navbar = document.getElementById('navBarClass1');
    var scrollValue = window.scrollY;
    console.log(scrollValue)
    if(scrollValue<30){
        navbar.classList.remove('bgColor');
    }else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBG);