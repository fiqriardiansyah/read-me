import anime from 'animejs';
import readmeImg1 from '../../../public/assets/images/readme_1.jpg';
import readmeImg2 from '../../../public/assets/images/readme_2.jpg';
import readmeImg3 from '../../../public/assets/images/readme_3.jpg';

import imgWord1 from '../../../public/assets/images/img_word_1.jpg';
import imgWord2 from '../../../public/assets/images/img_word_2.jpg';
import imgWord3 from '../../../public/assets/images/img_word_3.jpg';
import imgWord4 from '../../../public/assets/images/img_word_4.jpg';

import {transitionGrid} from '../../global';
import Routes from '../../routes/routes';

const route = new Routes();

class ReadmePage extends HTMLElement{
    connectedCallback(){
        
    }

    render(isDesktop){
        this.desktop(isDesktop);
    }


    desktop(isDesktop){
        this.innerHTML = 
        `
        <div class="phone_readme">
            <div class="phone_images">
                <img class="phone_image img1" src="${readmeImg1}" alt="fiqri ardiansyah" />
                <img class="phone_image opacity-0-img img2" src="${readmeImg2}" alt="fiqri ardiansyah" />
                <img class="phone_image opacity-0-img img3" src="${readmeImg3}" alt="fiqri ardiansyah" />
                <img class="phone_image opacity-0-img img4" src="${imgWord2}" alt="fiqri ardiansyah" />
            </div>

            <div class="phone_content">
                <div class="content">
                    <p class="content_title">wellcome stranger</p>
                </div>

                <div class="fill">
                    <div class="text">
                        <div class="text_box">
                            <p class="text_title">Whatever you think, just read this. ok</p>
                            <p class="text_title_secondary">who the f*** am i?</p>
                            <p class="text_desc one">My names is fiqri ardiansyah , you can call me fiqri if you want. i am just a student who is gaining knowledge at a tertiary institution in Medan, Indonesia. and also I live in an extraordinary city or maybe not at all, well the Medan city where I live. don't google it! </p>
                            <button class="button_translate"><i class="fa fa-language" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <p class="content_title">fiqri ardiansyah</p>
                </div>

                <div class="fill">
                    <div class="text">
                        <div class="text_box">
                            <p class="text_title">What the h*** are you doing ?</p>
                            <p class="text_title_secondary">im a web developer or maybe not at all</p>
                            <p class="text_desc two">Yeah, I am a web developer, but why above I say "... or maybe not at all". the reason I say that is because I don't feel worthy to be called a web developer because the experience and knowledge I have is still lacking compared to the world of web development. therefore I learn and keep learning as a web developer</p>
                            <button class="button_translate"><i class="fa fa-language" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <p class="content_title">web.dev</p>
                </div>

                <div class="fill">
                    <div class="text">
                        <div class="text_box ">
                            <p class="text_title">thats all you have ?</p>
                            <p class="text_title_secondary">sssssst , as i said "just read this. ok"</p>
                            <p class="text_desc three">Not only that, sometimes I also like to design web UIs, learn new frontend and backend technologies, and I also learn Android development especially using Flutter. i'm a flutter enthusiast too :)</p>
                            <button class="button_translate"><i class="fa fa-language" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <p class="content_title">flutter enthusiast</p>
                </div>

                <div class="fill">
                    <div class="text">
                        <div class="text_box">
                            <p class="text_title">So, you have a question ?</p>
                            <p class="text_title_secondary"><a id="contact_link" href="#contact">contact</a> me here!</p>
                            <p class="text_desc">and one more thing don't forget to ...</p>
                            <img src="${imgWord4}" src="text_img_end" />
                        </div>
                    </div>
                </div>
            </div>
        </div>






        <div class="content_container">

            <div class="images_content">
                <img class="image" src="${readmeImg1}" alt="fiqri ardiansyah" />
                <img class="image image_opacity" src="${readmeImg2}" alt="fiqri ardiansyah" />
                <img class="image image_opacity" src="${readmeImg3}" alt="fiqri ardiansyah" />
            </div>

            <div class="text_content">

                <div class="text">
                    <img class="text_img" src="${imgWord1}" />
                    <div class="text_box text_animate_box">
                        <p class="text_title">Whatever you think, just read this. ok</p>
                        <p class="text_title_secondary">who the f*** am i?</p>
                        <p class="text_desc one">My names is fiqri ardiansyah , you can call me fiqri if you want. i am just a student who is gaining knowledge at a tertiary institution in Medan, Indonesia. and also I live in an extraordinary city or maybe not at all, well the Medan city where I live. don't google it! </p>
                        <button class="button_translate"><i class="fa fa-language" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div class="text">
                    <img class="text_img tr" src="${imgWord2}" />
                    <div class="text_box text_animate_box">
                        <p class="text_title">What the h*** are you doing ?</p>
                        <p class="text_title_secondary">im a web developer or maybe not at all</p>
                        <p class="text_desc two">Yeah, I am a web developer, but why above I say "... or maybe not at all". the reason I say that is because I don't feel worthy to be called a web developer because the experience and knowledge I have is still lacking compared to the world of web development. therefore I learn and keep learning as a web developer</p>
                        <button class="button_translate"><i class="fa fa-language" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div class="text">
                    <img class="text_img tr_2" src="${imgWord3}" />
                    <div class="text_box text_animate_box">
                        <p class="text_title">thats all you have ?</p>
                        <p class="text_title_secondary">sssssst , as i said "just read this. ok"</p>
                        <p class="text_desc three">Not only that, sometimes I also like to design web UIs, learn new frontend and backend technologies, and I also learn Android development especially using Flutter. i'm a flutter enthusiast too :)</p>
                        <button class="button_translate"><i class="fa fa-language" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div class="text">
                    <div class="text_box text_animate_box">
                        <p class="text_title">So, you have a question ?</p>
                        <p class="text_title_secondary"><span id="contact-link" >contact</span> me here!</p>
                        <p class="text_desc">and one more thing don't forget to ...</p>
                        <img src="${imgWord4}" src="text_img_end" />
                    </div>
                </div>

            </div>

        </div>


        <div class="grid_container">
            <div class="grid_parent">
                <div class="grid_child"></div>
                <div class="grid_child"></div>
                <div class="grid_child"></div>
                ${this.additionGrid(isDesktop)}
            </div>
            <p class="name">Fiqri <br> Ardiansyah</p>
        </div> 

        `

        this.scrolling();
        this.scrollingPhone();
        this.clickButtonTranslate();
        this.clickContact();
    }

    clickContact(){
        this.querySelector("#contact-link").addEventListener('click',async ()=>{
            await transitionGrid.animate();
            route.location('#contact');
        })
    }

    additionGrid(isDesktop){
        if(isDesktop) return `
        <div class="grid_child"></div>
        <div class="grid_child"></div>
        <div class="grid_child"></div>
        <div class="grid_child"></div>
        <div class="grid_child"></div>
        `
        return ``
    }

    clickButtonTranslate(){
        const buttons = this.querySelectorAll('.button_translate');
    
        const texts = [
            {
                state: 'ind',
                ind: 'Nama saya fiqri ardiansyah, Anda bisa memanggil saya fiqri jika Anda mau. Saya hanyalah seorang pelajar yang sedang menimba ilmu di sebuah perguruan tinggi di Medan, Indonesia. dan juga saya tinggal di kota yang luar biasa atau mungkin tidak sama sekali, yah kota Medan tempat saya tinggal. jangan google itu!',
                en: 'My names is fiqri ardiansyah , you can call me fiqri if you want. i am just a student who is gaining knowledge at a tertiary institution in Medan, Indonesia. and also I live in an extraordinary city or maybe not at all, well the Medan city where I live. don\'t google it! '
            },
            {
                state: 'ind',
                ind: 'Ya, saya seorang web developer, tapi kenapa di atas saya katakan "... atau mungkin tidak sama sekali". alasan yang saya katakan adalah karena saya merasa kurang pantas disebut sebagai web developer karena pengalaman dan ilmu yang saya miliki masih kurang dibandingkan dengan dunia web development. oleh karena itu saya belajar dan terus belajar sebagai web developer',
                en: 'Yeah, I am a web developer, but why above I say "... or maybe not at all". the reason I say that is because I don\'t feel worthy to be called a web developer because the experience and knowledge I have is still lacking compared to the world of web development. therefore I learn and keep learning as a web developer'
            },
            {
                state: 'ind',
                ind: 'Tidak hanya itu, terkadang saya juga suka mendesain UI web, mempelajari teknologi frontend dan backend baru, dan saya juga mempelajari pengembangan Android khususnya menggunakan Flutter. Saya juga penggemar flutter :)',
                en: 'Not only that, sometimes I also like to design web UIs, learn new frontend and backend technologies, and I also learn Android development especially using Flutter. i\'m a flutter enthusiast too :)'
            },
            
        ]
    
        buttons.forEach(button => {
            button.addEventListener('click',(e)=>{
                let stateText;
                const text = button.previousElementSibling;
                const number = text.classList.item(1);
                const index = number === 'one' ? 0 : number === 'two' ? 1 : 2;
                
                stateText = texts[index].state;
                text.innerHTML = texts[index][stateText];
                texts[index].state = stateText === 'ind' ? 'en' : 'ind';
            })
        })
    }

    scrollingPhone(){

        const img = [...this.querySelectorAll('.phone_image')];
        const phoneContentHeight = window.innerHeight;

        let zoom1 = 0;
        let zoom2 = 0;
        let zoom3 = 0;
        let zoom4 = 0;

        this.addEventListener("scroll",function(e){
            
            const top = this.scrollTop

            if(top >= 0 && top <= phoneContentHeight){
                zoom1 = top / 1000;
                execute(0)
                img[0].style.transform = `scale(${1 + zoom1})`
            }else if(top >= phoneContentHeight && top <= phoneContentHeight*2){
                execute(1)
            }else if(top >= phoneContentHeight*2 && top <= phoneContentHeight*3){
                zoom2 = (top - phoneContentHeight*2) / 1000;
                img[1].style.transform = `scale(${1 + zoom2})`
            }else if(top >= phoneContentHeight*3 && top <= phoneContentHeight*4){
                execute(2)
            }else if(top >= phoneContentHeight*4 && top <= phoneContentHeight*5){
                zoom3 = (top - phoneContentHeight*3) / 1000; 
                img[2].style.transform = `scale(${1 + zoom3})`
            }else if(top >= phoneContentHeight*5 && top <= phoneContentHeight*6){
                execute(3)
                zoom4 = (top - phoneContentHeight*4) / 1000;
                img[3].style.transform = `scale(${1 + zoom4})`
            }

        })


        const execute = index =>{
            if(index === 0){
                img[0].classList.remove('opacity-0-img');
                img[1].classList.add('opacity-0-img');
                img[2].classList.add('opacity-0-img');
                img[3].classList.add('opacity-0-img');
            }else if(index === 1){
                img[0].classList.add('opacity-0-img');
                img[1].classList.remove('opacity-0-img');
                img[2].classList.add('opacity-0-img');
                img[3].classList.add('opacity-0-img');
            }else if(index === 2){
                img[0].classList.add('opacity-0-img');
                img[1].classList.add('opacity-0-img');
                img[2].classList.remove('opacity-0-img');
                img[3].classList.add('opacity-0-img');
            }else if(index === 3){
                img[0].classList.add('opacity-0-img');
                img[1].classList.add('opacity-0-img');
                img[2].classList.add('opacity-0-img');
                img[3].classList.remove('opacity-0-img');
            }
        }

    }
    
    changeText(text){
        this.querySelector('.name').innerHTML = text;
    }

    scrolling(){
        let index = 0;
        const that = this;
        const textBox = [...this.querySelectorAll('.text_animate_box')];
        const images = [...this.querySelectorAll('.image')];
        const textImg = [...this.querySelectorAll('.text_img')];

        /// add animate class
        setTimeout(()=>{
            textBox[0].classList.add('text_animate');
            images.forEach(img => img.classList.add('image_animate'));
        },5000);

        that.addEventListener('scroll',function(e){

            const top = this.scrollTop;

            textImg.forEach( textimg => {
                textimg.style.top = `${top / 4}px`;
            });

            if(top >= 1400){
                index = 3;
            }else if(top >= 1000){
                index = 2;
                this.changeText('flutter <br> enthusiast');
            }else if(top >= 450){
                index = 1;
                this.changeText('web dev');
            }else{
                index = 0;
                this.changeText('Fiqri <br> Ardiansyah');
            }

            [...that.querySelectorAll('.image')].forEach((image,i) => {
                if(i !== index && index !== 3){
                    image.classList.add('image_opacity');
                }else{
                    image.classList.remove('image_opacity');
                }

                if(i !== index){
                    textBox[index].classList.add('text_animate');
                }
            });
        });
    }
}

customElements.define("readme-page",ReadmePage);
const readme = document.createElement("readme-page");


const animate = {

    animateImage: ()=>{
        anime({
            targets: '.images_content',
            height: '100%',
            delay: 500,
            duration: 1000
        })
    },
    animateTextBox: ()=>{

        anime({
            targets: '.text_box',
            opacity: 1,
            delay: 500,
            duration: 1000
        })
    },
    animateGridOpening: ()=>{

        const grid = readme.querySelector('.grid_parent');
        const opening = readme.querySelector('.grid_container');
        const name = readme.querySelector('.name');

    
        setTimeout(()=>{
            setTimeout(()=>{
                grid.classList.add('grid_gradient');
                opening.classList.add('animate_opening-custome');
                name.classList.add('name_opacity_0');
            },100);
    
            setTimeout(()=>{
                name.style.transform = `translate(-50%,-50%) rotate(-90deg)`;
                name.style.left = '10%';
            },1000);
    
            setTimeout(()=>{
                name.classList.add('name_opacity_1');
            },2000);
            
            if(name){
                animate.animationMovementName();
            }
    
        },4000)
    },
    removeClassGridOpening: ()=>{
        const grid = readme.querySelector('.grid_parent');
        const opening = readme.querySelector('.grid_container');
        const name = readme.querySelector('.name');

        grid.classList.remove('grid_gradient');
        opening.classList.remove('animate_opening-custome');
        name.classList.remove('name_opacity_1');
        name.classList.remove('name_opacity_0');
        name.classList.remove('name_animate');
    },

    animationMovementName: ()=>{
        const name = readme.querySelector('.name');
        window.addEventListener('mousemove',function(e){
            let x = e.screenX;
            let y = e.screenY;
            name.style.transform = `translate(${-50 - (x / 80)}%,${-50 - (y / 20)}%) rotate(-90deg)`;
        })
    },
    displayTextName: ()=>{
        if(window.innerWidth < 800){
            setTimeout(()=>{
                readme.querySelector('.name').style.display = `none`
            },4000);
        }else{
            readme.querySelector('.name').style.display = `block`
        }
    }
}






export {
    readme,
    animate
}