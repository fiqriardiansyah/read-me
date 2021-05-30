///global
import {navbar,
    mouse,menuBox,changeColor,
    cursorElement ,bodyElement,
    animateSplash,removeSplashLive,
    memePage
} from './global';

/// pages
import {homePage,animateBox,animateRoundText,animateText,animateHorizontalContainer} from './pages/home/index';
import {readme,animate as animateReadme} from './pages/readme/index';
import {contactme,animate as animateContact} from './pages/contact/index';

//component
import {formModal} from './components/form';

import anime from 'animejs';

////////////////////////////////  layout

const HomeLayout = async ()=>{

    const layout = document.querySelector('.layout');
    layout.innerHTML = '';

    layout.appendChild(homePage);

    const splash = document.querySelector("#splash");
    if(splash){
        await animateSplash();
        removeSplashLive();
    }
    //cursor
    cursorElement.animate();

    // scroll effect
    const horizontalContainer = document.querySelector('.horizontal_container');
    const roundTextImg = document.querySelector('.round_text');
    const nameText = document.querySelector('.fiqri_ardiansyah');
    const roundTextWheel =(delta)=> roundTextImg.style.transform = `translate(-50%,-50%) rotate(${delta}deg)`;
    const nameTextWheel =(delta)=> nameText.style.bottom =  `${delta}%`;
    horizontalContainer.addEventListener('scroll',function(e){
        roundTextWheel(this.scrollTop / 5);
        nameTextWheel(this.scrollTop / 20);
    });

    /////////////navbar event
    navbar.navbarShowColor(true);
    navbar.changeColorButtonMenu(false);

    navbar.clickColor((color)=>{
        localStorage.setItem('color',color);
        animateBox.animateColor(color);
    });

    //menu
    menuBox.hover();
    menuBox.clickLink(()=>{
        console.log(navbar.buttonMenuNav)
        navbar.buttonMenuNav.classList.remove("active");
        menuBox.animateDown();
        navbar.animateDown();
        animateBox.animate();
        animateText.animateName();
        menuBox.stateOpenMenu = false;
    })

    //change color
    changeColor(localStorage.getItem('color') || '1E142A');
    bodyElement.changeColor(localStorage.getItem('color') || '1E142A');

    //mouse icon scroll
    mouse.display(true);
    mouse.changeColor('white');

    //memePage
    const meme = document.querySelector('.meme');
    if(meme){
        if(window.innerWidth < 800){
            await memePage.buttonAgree();
        }
    }

    //animation
    setTimeout(()=>{
        animateBox.animate();
        animateRoundText.animate();
        animateText.animateJustA();
        animateText.animateLookEtDis();
        animateText.animateName();
        animateHorizontalContainer.animate();
        navbar.animate();
        mouse.animateMouseScrollIcon();
        mouse.animateMouseScrollIconUp();
    },1000);
    
}

const ReadMeLayout =()=>{
    removeSplashLive();
    memePage.remove();

    const layout = document.querySelector('.layout');
    layout.innerHTML = '';

    readme.render(window.innerWidth > 800 ? true : false);
    layout.style.backgroundColor = 'white';
    layout.appendChild(readme);
    animateReadme.displayTextName();

    //cursor
    cursorElement.animate();

    // navbar
    navbar.navbarShowColor(false);
    navbar.changeColorButtonMenu(true);


    //mouse icon scroll
    mouse.display(true);
    mouse.changeColor('black');

    //menu
    menuBox.hover();
    menuBox.clickLink(()=>{
        navbar.buttonMenuNav.classList.remove("active");
        menuBox.animateDown();
        navbar.animateDown();
        menuBox.stateOpenMenu = false;
    });

    ///change color
    layout.style.backgroundColor = '#fff';
    bodyElement.changeColor('fff');

    ///////animation
    animateReadme.animateImage();
    animateReadme.animateTextBox();
    //opening
    animateReadme.removeClassGridOpening();
    animateReadme.animateGridOpening();
   
    setTimeout(()=>{
        mouse.animateMouseScrollIcon();
        mouse.animateMouseScrollIconUp();
        navbar.animate();
    },1000);

}

const ContactMeLayout =()=>{
    removeSplashLive();
    memePage.remove();

    const layout = document.querySelector('.layout');
    layout.innerHTML = '';

    layout.appendChild(formModal);
    layout.appendChild(contactme);

    //cursor
    cursorElement.animate();

    // navbar
    navbar.navbarShowColor(false);
    navbar.changeColorButtonMenu(true);

    ///change color
    layout.style.backgroundColor = '#fff';
    bodyElement.changeColor('fff');

    //menu
    menuBox.hover();
    menuBox.clickLink(()=>{
        navbar.buttonMenuNav.classList.remove("active");
        menuBox.animateDown();
        navbar.animateDown();
        menuBox.stateOpenMenu = !menuBox.stateOpenMenu;
    });

    //mouse animation
    mouse.display(false);   

    setTimeout(()=>{
        navbar.animate();
    },1000);
    
}

export {
    HomeLayout,ReadMeLayout,ContactMeLayout
}