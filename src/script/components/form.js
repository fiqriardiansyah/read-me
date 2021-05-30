

import laptopImg from '../../public/assets/images/laptop.png';
import envelope1 from '../../public/assets/images/envelope1.png';
import envelope2 from '../../public/assets/images/envelope2.png';
import envelope3 from '../../public/assets/images/envelope3.png';

class FormModal extends HTMLElement{


    connectedCallback(){
        this.render();
        this.isSending = false;
    }

    render(){
        this.innerHTML =
        `
        <div class="error-message"><p><p></div>
        <div class="modal">
            

            <div class="modal-image">
                <img class="modal-image-laptop" src="${laptopImg}" />
                <img class="modal-image-envelope-1" src="${envelope1}" />
                <img class="modal-image-envelope-2" src="${envelope2}" />
                <img class="modal-image-envelope-3" src="${envelope3}" />
            </div>

            <div class="form-box">
                ${this.formBox()}
            </div>

        </div>
        `
        this.submitForm();
        this.clickBackdrop();
    }

    formBox(){
        return `<p class="form-title">send me your suggestions and <br> criticisms</p>
        <form action="#">
            ${this.customInput("name","name","Your Name","text","input")}
            ${this.customInput("email","email","Your Email","email","input")}
            ${this.customInput("message","message","Your Message","text","textarea")}
            <button id="button-send"><p>send </p><i class="fa fa-fighter-jet"></i></button>
        </form>`
    }

    resetModal(){
        this.render();
    }

    clickBackdrop(){
        const modal = this.querySelector('.modal');
        
        this.addEventListener('click',(e)=>{

            if(e.target === this && !this.isSending){
                modal.classList.remove('modal-animate');
                setTimeout(()=>{
                    this.style.display = 'none';
                    this.resetModal();
                },1000);
            }
            
        })
    }

    sendingMailSuccess(){
        const formBox = document.querySelector('.form-box');
        formBox.innerHTML = `<p class="text-success">your message has arrived safely! <span>thank you</span></p>`
    }

    sendingMailFailed(){
        const formBox = document.querySelector('.form-box');
        formBox.innerHTML = 
        `
            <div class="box-failed">
                <p class="text-failed">oops, something went wrong! <span>failed to send</span></p>
                <button class="button-failed">try again!</button>
            </div>
        `

        document.querySelector('.button-failed').addEventListener('click',()=>{
            formBox.innerHTML = this.formBox();
            this.submitForm();
        })
    }

    setErrorValidation(errorMessage,active){
        const errorElement = document.querySelector('.error-message');
        const p = errorElement.querySelector('p');
        p.innerHTML = errorMessage;
        if(active) return errorElement.classList.add('error-active');
        return errorElement.classList.remove('error-active');
    }

    submitForm(){
        const form = this.querySelector('form');
        const button = form.querySelector('#button-send');
        const buttonText = button.querySelector('p');

        form.addEventListener('submit',async (e)=>{
            e.preventDefault();

            const data = new FormData(form);
            const name = data.get('name');
            const email = data.get('email');
            const message = data.get('message');
            
            if( name.trim().length <= 5 || !this.validateText(name)){
                const text = name.trim().length <= 5 ? 'name length must be more than 5 !' : 'name cannot contain numbers or symbol !'
                this.setErrorValidation(text,true);
            }else if( email.trim().length <= 0 || !this.validateEmail(email) ){
                const text = email.trim().length <= 5 ? 'email cannot empty !' : 'not valid email !'
                this.setErrorValidation(text,true);
            }else if( message.trim().length <= 10 ){
                this.setErrorValidation('message length must be more than 10 !',true);
            }else{
                this.setErrorValidation('',false);
                this.isSending = true;
                
                button.classList.add('button-animate');
                buttonText.innerText = 'sending...'
                buttonText.classList.add('button-loading');

                form.reset();

                try{

                    const req = await fetch('https://formspree.io/xknpnyel',{
                        method: 'POST',
                        body: JSON.stringify({name,email,message}),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })

                    const res = await req.json(); 

                    this.isSending = false;

                    if(res.ok) return this.sendingMailSuccess();
                    return this.sendingMailFailed();

                }catch(e){     
                    this.isSending = false; 
                    this.sendingMailFailed();
                }

            }

        })
        
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validateText(text){
        const re = /^[A-Za-z ]+$/ 
        return re.test(String(text).toLowerCase());
    }

    customInput(id,name,label,type,element){
        const input = element === 'input' ?
        `<input name="${name}" type="${type}" id="${id}" placeholder="${label}" />` :
        `<textarea name="${name}" id="${id}" cols="5" rows="10" placeholder="${label}"></textarea>`

        return input;
    }

    
}

customElements.define("form-modal",FormModal);
const formModal = document.createElement("form-modal");

export {
    formModal
}
