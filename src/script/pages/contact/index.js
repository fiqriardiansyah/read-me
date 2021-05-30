import anime from 'animejs';

import {linkedinSvg,whatsappSvg,emailSvg,instagramSvg } from '../../components/svg';
import waContactImg from '../../../public/assets/images/contact_wa.jpg';
import igContactImg from '../../../public/assets/images/contact_ig.jpg';
import emailContactImg from '../../../public/assets/images/contact_email.jpg';
import linkedinContactImg from '../../../public/assets/images/contact_linkedin.jpg';


class ContactmePage extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `

        <div id="backdrop"></div>

        <div class="contact-container">
        <div class="grid-contact">
            <div class="grid-box linkedin">
                <div class="grid-border"></div>
                <div class="grid-logo">${linkedinSvg}</div>
                <p class="grid-name">linkedin</p>
            </div>
            <div class="grid-box whatsapp">
                <div class="grid-border"></div> 
                <div class="grid-logo">${whatsappSvg}</div>
                <p class="grid-name">whatsapp</p>
            </div>
            <div class="grid-box instagram">
                <div class="grid-border"></div>
                <div class="grid-logo">${instagramSvg}</div>
                <p class="grid-name">instagram</p>
            </div>
            <div class="grid-box email">
                <div class="grid-border"></div>
                <div class="grid-logo">${emailSvg}</div>
                <p class="grid-name">email</p>
            </div>
        </div>
        </div>
        `

        this.clickBox();
        if(window.innerWidth >= 600){
            this.hoverEffect();
        }
    }

    clickBox(){
        const gridBox = this.querySelectorAll('.grid-box');
        const backdropModal = document.querySelector('form-modal');

        console.log(backdropModal);

        const links = [
        {
            name: "whatsapp",
            link: "https://api.whatsapp.com/send?phone=6285273580367/"
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/fiqri-ardiansyah-a48651190/"
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/fiqriardians/"
        },
        {
            name: "email",
            link: "mailto:fiqriardian92@gmail.com"
        }];


        gridBox.forEach(gridbox => {
            const name = gridbox.classList.item(1);
            let link = links.find( link => link.name === name).link;

            gridbox.addEventListener('click',(e)=>{

                if(name !== 'email'){
                    window.open(link,"_blank");
                }else{
                    backdropModal.style.display = 'block';
                    setTimeout(()=>{
                        backdropModal.querySelector('.modal').classList.add('modal-animate');
                    },500);
                }

            })
        })

    }


    hoverEffect(){
        const that = this;
        const gridBoxes = this.querySelectorAll('.grid-box');
        const backdrop = this.querySelector('#backdrop');

        let coordinateY = 0;
        let coordinateX = 0;

        const gridBorders = [...this.querySelectorAll('.grid-border')];
        const gridLogos = [...this.querySelectorAll('.grid-logo')];
        const gridNames = [...this.querySelectorAll('.grid-name')];

        const className = ['linkedin','whatsapp','instagram','email'];
        const image = [linkedinContactImg,waContactImg,igContactImg,emailContactImg];

        gridBoxes.forEach((gridbox,index) => {
            let logoName = gridbox.classList.item(1);
            const { left , right,top,bottom } = gridbox.getBoundingClientRect();

            gridbox.addEventListener('mouseover',function(e){
                animate.animateLogo(logoName);
                gridbox.classList.remove('grid-box-restart');
                gridbox.classList.add('grid-box-animate');

                that.addEventListener('mousemove',mousemoveFunction);
                that.indexElementBox = index;
                that.coordinateGridBox = {left,right,top,bottom};

                gridLogos[index].querySelector('svg').classList.add(`${logoName}-color`);
                gridBorders[index].classList.add(`${logoName}-color-border`);

                const name = gridbox.querySelector('.grid-name');
                name.classList.add(className[index]);

                backdrop.classList.add("backdrop-animate");

                gridbox.querySelector('.grid-border').style.backgroundImage = `url('${image[index]}')`;

            });

            gridbox.addEventListener('mouseleave',(e)=>{
                gridbox.classList.add('grid-box-restart');
                gridbox.classList.remove('grid-box-animate');
                gridLogos[index].querySelector('svg').classList.remove(`${logoName}-color`);
                gridBorders[index].classList.remove(`${logoName}-color-border`);
                const name = gridbox.querySelector('.grid-name');
                name.classList.remove(className[index]);
                
                backdrop.classList.remove("backdrop-animate");
            })

        });

        const mousemoveFunction =(e)=>{
            const x = e.screenX;
            const y = e.screenY;

            let index = e.currentTarget.indexElementBox;

            const {left,right,top,bottom} = e.currentTarget.coordinateGridBox;

            const coordinateXCenterPoint = left + ((right - left) / 2);
            const coordinateYCenterPoint = top + ((bottom - top) / 2);

            coordinateX = coordinateXCenterPoint - x;
            coordinateY = coordinateYCenterPoint - y;

            gridBorders[index].style.top = `${50 + (coordinateY /100)}%`;
            gridLogos[index].style.top = `${50 + (coordinateY / 30)}%`;
            gridNames[index].style.top = `${80 + (coordinateY / 20)}%`;

            gridBorders[index].style.left = `${50 + (coordinateX /100)}%`;
            gridLogos[index].style.left = `${50 + (coordinateX / 30)}%`;
            gridNames[index].style.left = `${50 + (coordinateX / 20)}%`;

        }
    }
}

customElements.define("contactme-page",ContactmePage);
const contactme = document.createElement("contactme-page");

// contactme.style.backgroundImage = `url(${backContactImg})`

const animate = {
    animateLogo: (logoName)=>{
        setTimeout(() => {
            anime({
                targets: `#${logoName}-svg path`,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 1500,
                delay: function(el, i) { return i * 250 },
            })
        },1000);
    } 
    
}


export {
    contactme,
    animate
}