
const aroow = document.querySelector('.aroow')
const Url = ['html-i-css.jpg','js for junior.png', 'js part 2.png', 'js_1.png', 'js_2.png', 'js_3.png', 'js_4.png'];
const arrowRight = document.querySelector('.icon__right')
const arrowLeft = document.querySelector('.icon__left')
const cards = document.querySelector('.cards');


let i = 0, lenarr = Url.length;
let count = 0;


//add cards on page
while(i < lenarr){
    let element = document.createElement('div')
    element.className = 'card';
    element.style.background = `url('images/${Url[i]}') no-repeat center / cover`
    cards.append(element);
    i++;
}
const images =[...cards.children]
const stepSize = images[0].clientWidth + 12;

cards.style.transform = `translateX(${-stepSize * count}px)`;

arrowRight.addEventListener('click', function(){
    if(count<=images.length && count!==images.length-2){
        count++;
        cards.classList.add('animation-cards')
        cards.style.transform = `translateX(${-stepSize * count}px)`; 
    } else if(count===images.length-2){
        cards.classList.remove('animation-cards');
    }
})

arrowLeft.addEventListener('click', function(){
    if(count >= 1)
    count--;
    cards.classList.add('animation-cards');
    cards.style.transform = `translateX(${-stepSize * count}px)`
})