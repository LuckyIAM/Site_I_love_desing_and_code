let countClick = 0;
const icon = document.querySelector('.icon__sun');
let WorkMenu = document.querySelector('.menu_works');
const ichMenuButton = [...document.querySelector('.menu').children];

const urlPage = ['../index.html', '../pages/works.html', '../pages/resume.html', '../pages/contact.html'];

icon.addEventListener('click', function(){
    countClick++;
    if(countClick % 2 === 1){
        document.body.style.background = '#1E1E1E';
        document.body.style.color = '#FFFCF5';
        [...document.querySelectorAll('a')].forEach(e => e.style.color = '#FFFCF540');
        [...document.querySelectorAll('.explain')].forEach(e => e.style.color = '#fffcf5bd');
        [...document.querySelectorAll('.explain span')].forEach(e => e.style.color = '#D3902A');
        [...document.querySelectorAll('.icon__sun img')].forEach(e => e.setAttribute('src','../images/icon/free_icon_2.svg'));
        if (document.title === 'Works'){
            WorkMenu.children[0].classList.add('shadow_light');
            animate('shadow_light');
        }
        ichMenuButton.forEach( e =>{
            if(document.title.toLocaleLowerCase() === e.getAttribute('class')){
                e.style.color='#FFFCF5';
                console.log(e.style.color);
            }
        })
        
        
    } else if(countClick % 2 === 0){
        document.body.style.background = '#F8F4F0';
        document.body.style.color = '#000201';
        [...document.querySelectorAll('a')].forEach(e => e.style.color = '#000201');
        [...document.querySelectorAll('.explain')].forEach(e => e.style.color = 'rgba(0, 2, 1, 0.6)');
        [...document.querySelectorAll('.explain span')].forEach(e => e.style.color = '#000201');
        [...document.querySelectorAll('.icon__sun img')].forEach(e => e.setAttribute('src','../images/icon/sun_image.png'));
        
        if (document.title === 'Works'){
            WorkMenu.children[0].classList.remove('shadow_light');
            animate('shadow');
        }
    }
       
})


// Color button menu in black if is on page 


ichMenuButton.forEach(menu =>{   
    if(document.title.toLocaleLowerCase() === menu.getAttribute('class')){
        menu.style.color='rgba(0, 0, 1, 0.7)';
        console.log(menu.style.color);

    }
})

const footer =document.querySelector('.icon__sun');
if (document.title !== 'About'){
    footer.style.left =  '-278px'
}
