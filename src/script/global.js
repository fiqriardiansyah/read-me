import anime from 'animejs';
import Routes from './routes/routes';

import {homePage,animateBox,animateRoundText,animateText,animateHorizontalContainer} from './pages/home/index';
import {readme,animate as animateReadme} from './pages/readme/index';
import {contactme,animate as animateContact} from './pages/contact/index';
import { svgBig,svgSmall} from './components/svg';

const nav = document.querySelector('nav');
const mouseScrollIcon = document.querySelector('.mouse');
const menu = document.querySelector('.menu');
const transition = document.querySelector('.transition');
const cursor = document.querySelector('.cursor');
const body = document.querySelector('body');


const route = new Routes();


const navbar = {
    buttonMenuNav: null,
    render: ()=>{
        nav.innerHTML = `
        <img id="logo" src="/images/logo.png" alt="">
        <div class="action">
            <div class="action_color">
                <div class="action_color_1" data-color="1E142A"></div>
                <div class="action_color_2" data-color="BA336D"></div>
                <div class="action_color_3" data-color="F4DB5F"></div>
                <div class="action_color_4" data-color="33DCCC"></div>
                <div class="action_color_5" data-color="9DB0B2"></div>
            </div>
            <div class="action_button ">
                <div class="action_button_1"></div>
                <div class="action_button_2"></div>
                <div class="action_button_3"></div>
            </div>
        </div>
        `
    },
    animate: ()=>{
        anime({
            targets: nav,
            top: 0,
            duration: 1000,
            delay: 500,
        })
    },
    animateUp: ()=>{
        anime({
            targets: [nav.querySelector('#logo'),nav.querySelector('.action_color')],
            translateY: '-5rem',
            duration: 1000,
            delay: 500,
        })
    },
    animateDown: ()=>{
        anime({
            targets: [nav.querySelector('#logo'),nav.querySelector('.action_color')],
            translateY: 0,
            duration: 1000,
            delay: 500,
        })
    },
    changeColorButtonMenu: (isChange)=>{
        [...nav.querySelector('.action_button').children].forEach(button =>{
            if(isChange){
                button.style.backgroundColor = 'transparent';
                button.style.backdropFilter = 'invert(1)';
            }else{
                button.style.backgroundColor = 'white';
                button.style.backdropFilter = 'unset';
            }
        })
    },
    clickColor: (callback)=>{
        nav.querySelector('.action_color').addEventListener('click',(e)=>{
            const color = e.target.dataset.color;
            if(color){
                changeColor(color);
                callback(color);
            }
        })
    },
    navbarShowColor: (isShow)=>{
        const colors = nav.querySelector('.action_color');
        if(isShow){
            colors.style.display = 'flex';
        }else{
            colors.style.display = 'none';
        }
    },
    clickMenu: ()=>{
        const button = nav.querySelector('.action_button');
        console.log(button);

        button.addEventListener('click', async function(){

            const page = window.location.href.split('#')[1];

            if(menuBox.stateOpenMenu){
                this.classList.remove("active");
                menuBox.animateDown();
                navbar.animateDown();

                if(!page){
                    animateBox.animate();
                    animateText.animateName();
                }
            }else{
                this.classList.add("active");
                navbar.animateUp();

                if(!page){
                    animateText.animateNameDown();
    
                    if(window.innerWidth > 800){
                        await animateBox.animateUp();
                    }
                }
                
                menuBox.animateUp();
            }
            menuBox.stateOpenMenu = !menuBox.stateOpenMenu;
            
        })

    }
}

navbar.render();
navbar.clickMenu();
navbar.buttonMenuNav = nav.querySelector('.action_button');

const mouse = {
    animateMouseScrollIcon: ()=>{
        anime({
            targets: mouseScrollIcon.querySelector('#mouse_animation_bullet'),
            translateY: 30,
            delay: 1000,
            duration: 500,
            direction: 'alternate',
            loop: true
        })
    },
    animateMouseScrollIconUp: ()=>{
        anime({
            targets: mouseScrollIcon,
            bottom: '2rem',
            duration: 1000,
            delay: 2000
        })
    },
    animateMouseScrollIconDown: ()=>{
        anime({
            targets: mouseScrollIcon,
            bottom: '-20rem',
            duration: 500,
            delay: 500,
        })
    },
    changeColor: (color)=>{
        mouseScrollIcon.querySelector('#mouse_text').style.color = color;
        mouseScrollIcon.querySelector('#mouse_animation').style.border = `.5rem solid ${color}`;
        mouseScrollIcon.querySelector('#mouse_animation_bullet').style.backgroundColor = color;
    },
    display: (isShow)=>{
        if(isShow){
            mouseScrollIcon.style.display = 'flex';
        }else{
            mouseScrollIcon.style.display = 'none';
        }
    }

}

const menuBox = {
    stateOpenMenu: false,
    render: ()=>{
        const menu = document.querySelector('.menu');
        menu.innerHTML = `
        <div class="menu_list">
            <a href="#" class="menu_item">Home</a>
            <a href="#readme" class="menu_item">Read me</a>
            <a href="#contact" class="menu_item">Contact me</a>
        </div>
        <img class="menu_image" src="/images/back_1.jpg" alt="image" />
        <img class="menu_image" src="/images/back_2.jpg" alt="image" />
        <img class="menu_image" src="/images/back_3.jpg" alt="image" />
        <p class="menu_text">Home</p>
        <p class="menu_text">Read me</p>
        <p class="menu_text">Contact me</p>
        `
    },
    animateUp: ()=>{
        anime({
            targets: menu,
            top: '0',
            duration: 1000
        })
    },
    animateDown: ()=>{
        anime({
            targets: menu,
            top: '-120%',
            duration: 1000
        })
    },
    hover: ()=>{
        const image = [...menu.querySelectorAll('.menu_image')];
        const text = [...menu.querySelectorAll('.menu_text')];

        menu.querySelectorAll('.menu_item').forEach((element,index) => {

            element.addEventListener("mouseover",()=>{
                image[index].classList.add('opacity_image');
                text[index].classList.add('animate_menu_text');
            })

            element.addEventListener("mouseleave",()=>{
                image[index].classList.remove('opacity_image');
                text[index].classList.remove('animate_menu_text');
            })
        })
    },
    clickLink: (callback)=>{
        const buttonMenuNav = nav.querySelector('.action_button');
        menu.querySelectorAll('.menu_item').forEach( buttonLink =>{
            buttonLink.addEventListener('click', async (e)=>{
                e.preventDefault();

                const url = route.getUrlWindow();
                const page = route.urlParse(url);

                if((page === undefined && !buttonLink.href.split("#")[1]) || page === buttonLink.href.split("#")[1]){ // home
                    callback();
                    
                    if(page === 'readme'){

                    }else if(page === undefined){   // home

                    }else if(page === 'contact'){

                    }

                }else{
                    await transitionGrid.animate();
                    callback();
                    route.location(buttonLink.href);

                }

            })
        })
    }
}

menuBox.render();

const transitionGrid = {
    animate: async ()=>{
        transition.style.height = '100vh';

        anime({
            targets: '.page_box',
            height: '100%',
            duration: 1500,
            delay: function(el,i,l){
                return i * 100
            },
            direction: 'alternate'
        }).finished.then(()=> transition.style.height = '0' );

        return new Promise((resolve,rejected)=>{
            setTimeout(()=>{
                resolve(true);
            },1000);
        })

    },
    desktopLayout: ()=>{
        transition.innerHTML = 
        `
        <div class="page_box"></div>
        <div class="page_box"></div>
        <div class="page_box"></div>
        <div class="page_box"></div>
        <div class="page_box"></div>
        <div class="page_box"></div>
        <div class="page_box"></div>
        <div class="page_box"></div>
        `
    },
    phoneLayout: ()=>{
        transition.innerHTML = 
        `
        <div class="page_box"></div>
        <div class="page_box"></div>
        <div class="page_box"></div>
        `
    }
}


const changeColor = color =>{
    const layout = document.querySelector('.layout');
    layout.style.backgroundColor = `#${color}`;
    
    const text = document.querySelector('.fiqri_ardiansyah');
    text.style.color = `#${color === '1E142A' || color === 'BA336D' ? 'F4DB5F' : 'FFFFFF'}`

    const menu = document.querySelector('.menu');
    menu.style.backgroundColor = `#${color}`;
}

const cursorElement ={
    animate: ()=>{

        if(!cursor){
            const div = document.createElement("div");
            const cur = document.createElement("div");
            cur.classList.add('cursor');
            cur.appendChild(div);
            document.body.appendChild(cur);
            cursor = document.querySelector('.cursor');
        }


        let actionButton,actionColor,logo,p,a,button;
    
        actionButton = document.querySelector('.action_button');
        actionColor = document.querySelector('.action_color');
        logo = document.querySelector('#logo');
        p = document.querySelectorAll('p');
        a = document.querySelectorAll('a');
        button = document.querySelectorAll('button');


        document.body.addEventListener('mouseenter',function(){
            cursor.classList.add('cursor-active');
        });

        document.body.addEventListener('mouseleave',function(e){
            cursor.classList.remove('cursor-active');
        })
        
        window.addEventListener('mousemove',function(e){
            cursor.classList.add('cursor-active');
            cursor.style.top = `${e.screenY - 100}px`;
            cursor.style.left = `${e.screenX}px`;
        });
    
        [...[...button],...[...a],...[...p],...[actionButton,logo,actionColor]].forEach(element => {
    
            if(element){
                element.addEventListener('mouseover',()=>{
                    cursor.classList.add('bigger-cursor');
                })
        
                element.addEventListener('mouseleave',()=>{
                    cursor.classList.remove('bigger-cursor');
                })
            }
    
        })
    
        window.addEventListener('click',function(e){
            cursor.classList.add('cursor_click');
            setTimeout(()=>{
                cursor.classList.remove('cursor_click');
            },500);
        });
    }
}

const bodyElement = {
    changeColor: (color)=>{
        body.style.backgroundColor = `#${color}`;
    }
}
    




const animateSplash = async () =>{
    anime({
        targets: '#fa_line_svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function(el, i) { return i * 1000 }
    })
    anime({
        targets: '#line_svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        opacity: 0.5,
        delay: function(el, i) { return i * 300 }
    })
    anime({
        targets: '#fa_line_svg,#line_svg',
        opacity: 1,
        delay: 100,
        duration: 100
    })
    
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            anime({
                targets: '#fa_line_svg,#line_svg',
                opacity: 0,
                duration: 1000
            })
            anime({
                targets: '#fa_fill_svg',
                opacity: 1,
                duration: 2000
            })
            setTimeout(()=>res(true),2000);
        },7000)
    })
    
}


const memePage = {
    render: ()=>{
        const meme = document.querySelector('.meme');
        meme.innerHTML = `
        <img src="/images/meme.jpg" alt="">
        <button>i promise ill look on desktop later</button>
        `
    },
    animateClose: ()=>{
        const meme = document.querySelector('.meme');
        meme.style.opacity = '0';

        setTimeout(()=>{
            meme.remove();
        },1000);
        
    },
    remove: ()=>{
        const meme = document.querySelector('.meme');
        if(meme){
            meme.remove();
        }
    },
    buttonAgree: async ()=>{
        const meme = document.querySelector('.meme');
        let button;
        if(meme){
            button = meme.querySelector('button');
        }
        
        if(button){
            return new Promise((res)=>{
                button.addEventListener('click',()=>{
                    memePage.animateClose();
                    res(true)
                });
            })
        }
        
    }
}

memePage.render();

const setSvgToPage =()=>{
    const splash = document.body.querySelector('#splash');

    if(splash){
        if(window.innerWidth > 600){
            splash.innerHTML = svgBig;
        }else{
            splash.innerHTML = svgSmall;
        }
    }
}


const removeSplashLive =()=>{
    const splash = document.querySelector('#splash');
    if(splash){
        splash.remove();
    }
}



export {
    navbar,
    mouse,
    menuBox,
    transitionGrid,
    changeColor,
    cursorElement,
    bodyElement,
    setSvgToPage,
    animateSplash,
    removeSplashLive,
    memePage
}