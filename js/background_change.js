let countClick = 0;
let itemMenu = [...document.querySelectorAll('.menu a')]
const icon = document.querySelector('.icon__sun');
let WorkMenu = document.querySelector('.menu_works');
const ichMenuButton = [...document.querySelector('.menu').children];
const lable = [...document.querySelectorAll('label')]

const urlPage = ['../index.html', '../pages/works.html', '../pages/resume.html', '../pages/contact.html'];
changeMenuColor('#000201','#00020140');
icon.addEventListener('click', function(){
    countClick++;
    if(countClick % 2 === 1){
        changeMenuColor('#FFFCF5','#fffcf52d');
        document.body.style.background = '#1E1E1E';
        document.body.style.color = '#FFFCF5';
        [...document.querySelectorAll('h1')].forEach(a => a.style.color = '#FFFCF5');
        [...document.querySelectorAll('.explain')].forEach(e => e.style.color = '#fffcf5bd');
        [...document.querySelectorAll('.explain span')].forEach(e => e.style.color = '#D3902A');
        [...document.querySelectorAll('.icon__sun img')].forEach(e => e.setAttribute('src','../images/icon/free_icon_2.svg'));
        if (document.title === 'Works'){
            [...document.querySelectorAll('.menu_works a')].forEach(a => a.style.color = '#FFFCF5');
            WorkMenu.children[0].classList.add('shadow_light');
            shadowDrow('shadow_light', 'shadow');
        }
        else if(document.title === 'Resume'){
            [...document.querySelectorAll('h2, .expiriance_work')].forEach(item => item.style.color = '#FFFCF5');
            [...document.querySelectorAll('li')].forEach(li => li.style.color = 'rgba(255, 252, 245, 0.7)');
        }
        else if (document.title === 'Contact'){
            document.querySelectorAll('.years h2, .expiriance_work h2, .expiriance_work li').forEach(item => item.style.color = '#FFFCF5');
            document.querySelector('.contact_form button').style.background = '#FFFCF5';
            document.querySelector('.contact_form button').style.color = '#000201';
            lable.forEach(l => l.style.color = '#FFFCF5');
        }
        
    } else if(countClick % 2 === 0){
        changeMenuColor('#000201','#00020140');
        document.body.style.background = '#F8F4F0';
        document.body.style.color = '#000201';
        [...document.querySelectorAll('h1')].forEach(a => a.style.color = '#000201');
        // [...document.querySelectorAll('a')].forEach(e => e.style.color = '#000201');
        [...document.querySelectorAll('.explain')].forEach(e => e.style.color = 'rgba(0, 2, 1, 0.6)');
        [...document.querySelectorAll('.explain span')].forEach(e => e.style.color = '#000201');
        [...document.querySelectorAll('.icon__sun img')].forEach(e => e.setAttribute('src','../images/icon/sun_image.png'));
        if (document.title === 'Works'){
            WorkMenu.children[0].classList.add('shadow');
            [...document.querySelectorAll('.menu_works a')].forEach(a => a.style.color = 'rgba(0, 2, 1, 0.6)');
            shadowDrow('shadow', 'shadow_light');
        }
        else if(document.title === 'Resume'){
            [...document.querySelectorAll('h2, .expiriance_work')].forEach(item => item.style.color = '#000201');
            [...document.querySelectorAll('li')].forEach(li => li.style.color = 'rgba(0, 2, 1, 0.6)');
        }
        else if (document.title === 'Contact'){
            document.querySelector('.contact_form button').style.background = '#000201';
            document.querySelector('.contact_form button').style.color = '#F8F4F0';
            lable.forEach(l => l.style.color = '#000201');
        }
    }
       
})


// Color button menu in black if is on page 

function changeMenuColor(color1, color2){
    itemMenu.forEach(a =>{   
        if(document.title.toLocaleLowerCase() === a.getAttribute('class')){
            a.style.color= color1;
        }else{
            a.style.color= color2;
        }
    })
}

// Change color menu work on page work

function shadowDrow(class_add, clas_remove){
    [...WorkMenu.children].forEach(item => {
        item.addEventListener('click', () => {   
            for(let i= 0; i<WorkMenu.children.length; i++){
                WorkMenu.children[i].classList.remove(class_add)
                WorkMenu.children[i].classList.remove(clas_remove)
            } 
            item.classList.add(class_add);   
        })
        
    })
}



