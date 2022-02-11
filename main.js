console.log(document.querySelector('.starbucks'));

function imgSlider(anything){
    document.querySelector('.starbucks').src = "./assets/img/"+anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.backgroundColor = color;
}

function toggleMenu(){
    const toggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
}