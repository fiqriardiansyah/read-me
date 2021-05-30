import roundTextImage from '../../../public/assets/images/round_text.png';
import anime from 'animejs';
import './time';

import web1Img from '../../../public/assets/images/web_1.png';
import web2Img from '../../../public/assets/images/web_2.png';
import web3Img from '../../../public/assets/images/web_3.png';
import android1Img from '../../../public/assets/images/android_1.png';


class SlideBox extends HTMLElement {

    init(dt){
        this.render(dt)
    }

    render(data){
        this.innerHTML = `
        <div class="horizontal_image">
            <div class="horizontal_image_box">
                <p class="horizontal_image_number_project">${data.number}</p>
                <img class="horizontal_image_img" src="${data.img}" alt="image"/>
                <div class="horizontal_image_text">
                    <p class="horizontal_image_title">${data.title}</p>
                    <p class="horizontal_image_description">${data.desc}</p>

                    <div class="horizontal_image_button_container">
                        <a class="horizontal_image_button" target="_blank" rel="noopener noreferrer" ${data.isClickable && `href="${data.url}"`}  > 
                            <button>
                                <div></div>
                                <p>${data.status} <i class="fa fa-paper-plane link" aria-hidden="true"></i></p>
                            </button>
                        </a>
                        <button class="open_detail_button">
                            <div></div>
                            <p><i class="fa fa-search-plus link" aria-hidden="true"></i></p>
                        </button>
                    </div>

                </div> 
            </div>
        </div>       
        `

    }

    clickDetail(data){
        const backdrop = document.querySelector("#backdrop-project");
        const modal = backdrop.querySelector("#modal-project");
        const img = modal.querySelector("img");
        const buttonOpen = this.querySelector(".open_detail_button")

        buttonOpen.addEventListener('click',()=> {
            backdrop.classList.add('backdrop-project-animate')
            img.src = data.img
        })

        backdrop.addEventListener('click',()=>{
            backdrop.classList.remove('backdrop-project-animate')
        })
    }

}

customElements.define("slide-box",SlideBox);


class HomePage extends HTMLElement{

    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = 
        `
        <div id="backdrop-project">
            <div id="modal-project">
                <img src="" />
            </div>
        </div>

        <div>
            <p class="look_et_dis_bullshit">look et dis bullshit</p>
            <p class="fiqri_ardiansyah">fiqri.ardians</p>
            <p class="just_a">here some project i build on my own</p>

            <div class="round_text">
                <img src="${roundTextImage}" alt="web developer | reactjs | flutter" />
            </div>


            <div class="box_container">
                <div class="boxes">
                    <div class="boxes_1">
                        <div class="box_1 box"></div>
                    </div>
                    <div class="boxes_2">
                        <div class="box_2 box"></div>
                    </div>  
                    <div class="boxes_3">
                        <div class="box_3 box"></div>
                    </div>
                    <div class="boxes_4">
                        <div class="box_4 box"></div>
                    </div>
                    <div class="boxes_5">
                        <div class="box_5 box"></div>
                    </div>
                    <div class="boxes_6">
                        <div class="box_6 box"></div>
                    </div>
                    <div class="boxes_7">
                        <div class="box_7 box"></div>
                    </div>
                    <div class="boxes_8">
                        <div class="box_8 box"></div>
                    </div>
                    <div class="boxes_9">
                        <div class="box_9 box"></div>
                    </div>
                    <div class="boxes_10">
                        <div class="box_10 box"></div>
                    </div>
                    <div class="boxes_11">
                        <div class="box_11 box"></div>
                    </div>
                    <div class="boxes_12">
                        <div class="box_12 box"></div>
                    </div>
                </div>
            </div>

            <div class="horizontal_container">
                <div class="wrapper">
                    <div class="slide">
                    <div class="slide_1"></div>
                    <div class="slide_2"></div>
                    <div class="slide_3"></div>
                    <div class="slide_4"></div>
                    // <div class="slide_5"></div>
                    </div>
                </div>
            </div>


        </div>
        `

        const clock = document.createElement("clock-text");
        this.querySelector('.box_5').appendChild(clock);

        const month = document.createElement("month-text");
        this.querySelector('.box_6').appendChild(month);

        this.setHorizontalImage();

    }

    setHorizontalImage(){


        const slide2 = this.querySelector(".slide_2");
        const slide3 = this.querySelector(".slide_3");
        const slide4 = this.querySelector(".slide_4");
        const slide5 = this.querySelector(".slide_5");

        const data = [
            {status: 'progress... ',img: web1Img,title: 'JsGames',desc: 'mini games',number: 'web project 1',url: 'https://fir-codelab-medan.web.app/',isClickable: true},
            {status: 'progress... ',img: web2Img,title: 'Ghibah Room',desc: 'make your own room chat',number: ' web project 2',url: 'https://ghibah-room.web.app/',isClickable: true},
            {status: 'go! ',img: web3Img,title: 'Good Habits',desc: 'daily activity tracker',number: 'web project 3',url: 'https://good-habits-b76cd.web.app/',isClickable: true},
            {status: 'not release yet ',img: android1Img,title: 'My Note',desc: 'keeping your note',number: 'andrid project 1',url: '/#',isClickable: false},
        ];

        [slide2,slide3,slide4,slide5].forEach((slide,index)=>{

            const slideBox = document.createElement("slide-box");
            slideBox.init(data[index])
            slideBox.clickDetail(data[index])

            slide.appendChild(slideBox)

        });

    }

}

customElements.define("home-page",HomePage);
const homePage = document.createElement("home-page");




///box
const animateBox = {
        animate: ()=> {
            const color = localStorage.getItem('color') || '1E142A' ;

            const width = [35,33,40,38,45,43,40,45,40,35,30,30];
        
            for(let i = 1; i <= 12 ; i++){
                setTimeout(()=>{
                    anime({
                        targets: `.box_${i}`,
                        height: `${width[i-1]}%`,
                        backgroundColor: `#${color}`,
                        duration: 3000
                    })
                },100 * i);
            }
        },
        animateUp: async ()=> {
            await anime({
                targets: '.box',
                height: '100%',
                duration: 2000,
                delay: anime.stagger(50,{easing: 'easeOutQuad'}),
            }).finished
            return true;
        },
        animateColor: (color)=> {
            anime({
                targets: '.box',
                backgroundColor: `#${color}`,
                duration: 500,
                delay: function(el, i, l) {
                    return i * 100;
                }
            })
        }
}
//roundtext
const animateRoundText = {
    animate: ()=>{
        anime({
            targets: '.round_text',
            top: '35%',
            left: '35%' ,
            duration: 1000,
        })
    }
}
// text
const animateText = {
    animateName: ()=>{
        anime({
            targets: '.fiqri_ardiansyah',
            bottom: 0,
            duration: 500,
            delay: 500
        })
    },
    animateNameDown: ()=>{
        anime({
            targets: '.fiqri_ardiansyah',
            bottom: '-30rem',
            duration: 500,
            delay: 500
        })
    },
    animateLookEtDis: ()=>{
        anime({
            targets: '.look_et_dis_bullshit',
            opacity: '.1',
            duration: 500,
            delay: 700
        })
    },
    animateJustA: ()=>{
        anime({
            targets: '.just_a',
            left: '60%',
            duration: 500,
            delay: 1000
        })
    }
}
const animateHorizontalContainer = {
    animate: ()=>{
        anime({
            targets: '.horizontal_container',
            left: 0,
            delay: 2000,
            duration: 3000
        })
    }
}



export {
    homePage,
    animateBox,
    animateRoundText,
    animateText,
    animateHorizontalContainer
}


