//page works
const container = document.querySelector('.wraper-container');
const wraper_works = document.querySelector('.wraper_works');
let itemWorkMenu = [...document.querySelector('.menu_works').children];
let MenuItem = ['All','Product Design','UX Research','Logo','Desk Design', 'Webflow','Social Media','Video Effect','Non Profit'];
const url = ['https://luckyiam.github.io/stopPropagation_preventDefault_InputDataCard/', 'https://luckyiam.github.io/green-corp-landing/green-corp-landing/', 
'https://luckyiam.github.io/stopPropagation_preventDefault_InputDataCard/','https://luckyiam.github.io/stopPropagation_preventDefault_InputDataCard/']
let height_of_page = 0;

for(let j = 0; j<10; j++){
    let image = document.createElement('div');
    image.classList.add('card_works');
    image.style.background = `url('../images/works/${j+1}.png') no-repeat center / cover`;
    image.setAttribute('href', url[j]);
    wraper_works.append(image);
}

// classifycation
const childrenWrapwrWords = [...wraper_works.children];
childrenWrapwrWords[0].setAttribute('data-name', MenuItem[1]);
childrenWrapwrWords[2].setAttribute('data-name', MenuItem[2]);
childrenWrapwrWords[3].setAttribute('data-name', MenuItem[1]);
childrenWrapwrWords[4].setAttribute('data-name', MenuItem[5]);
childrenWrapwrWords[5].setAttribute('data-name', MenuItem[6]);
childrenWrapwrWords[6].setAttribute('data-name', MenuItem[6]);
childrenWrapwrWords[7].setAttribute('data-name', MenuItem[6]);
childrenWrapwrWords[8].setAttribute('data-name', MenuItem[6]);

let canvas = document.getElementById('canvas_line');

canvas.style.width = wraper_works.clientWidth  +'px';
canvas.style.height = '100vh';

let context = canvas.getContext('2d');
function drow(clr){
    context.strokeStyle = clr;
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(canvas.getBoundingClientRect().right,0);
    context.stroke();
}

function animate(clss) {
    drow('rgba(0, 2, 1, 0.3)')
    for (let menu = 0;  menu<itemWorkMenu.length; menu++){
       itemWorkMenu[menu].addEventListener('click', function(){
            for (let c = 0; c< itemWorkMenu.length; c++){
                if (itemWorkMenu[c].classList.contains(clss)){
                    itemWorkMenu[c].classList.remove(clss);
                }   
            }
            this.classList.add(clss);        
       })

    }
}
itemWorkMenu[0].classList.add('shadow')
animate('shadow')

function getScroll(){
    if(wraper_works.children.length>=9){
        wraper_works.classList.add('add_scroll');
    }else{
        wraper_works.classList.remove('add_scroll');
    }
}
//open the page width work to click to image card
function openPage(){
    for(let i = 0; i<wraper_works.children.length; i++){
        wraper_works.children[i].addEventListener('click',function(){
            window.open(this.getAttribute('href'));
    })
    }    
}

getScroll();
openPage()

//show element witch classifycation
for(let z = 0; z<itemWorkMenu.length;z++){
    itemWorkMenu[z].addEventListener('click',event => {
        event.preventDefault();
        if (itemWorkMenu[z].innerText === 'All'){
            childrenWrapwrWords.forEach(image =>{
                wraper_works.append(image);
            })
        }else if (itemWorkMenu[z].innerText !== 'All'){
            childrenWrapwrWords.forEach((e,i) =>{
                if(e.dataset.name === itemWorkMenu[z].innerText && i!==0){
                    wraper_works.append(e);
                }else{
                    e.remove();
                }
            }) 
        }
        getScroll();
        openPage();
    })

}

// function pageHeight(){
//     let body = [...document.body.children]
//     console.log(body, body.length);
//     body.forEach(elem =>{
//         height_of_page += elem.clientHeight;
//     })
//     return height_of_page;
// }

// console.log(pageHeight())
// const footer =document.querySelector('.icon__sun');
// footer.style.left =  '-256px'