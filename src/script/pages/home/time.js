

class Clock extends HTMLElement{
    connectedCallback(){
        setInterval(()=>{
            this.render();
        },100);
    }

    render(){
        this.innerHTML = `
            <p class="clock">${this.setClock()}</p>
        `
    }

    setClock(){
        const hour = new Date().getHours();
        const minute = new Date().getMinutes();
        const second = new Date().getSeconds();
        return `${hour.toString().padStart(2,0)}.${minute.toString().padStart(2,0)}.${second.toString().padStart(2,0)}`
    }

    

}

class Month extends HTMLElement{
    connectedCallback(){
        setInterval(()=>{
            this.render();
        },2419200000);
    }

    render(){
        this.innerHTML = `<p class="month">${this.setMonth()}</p>`
    }
    setMonth(){
        const monthText = ["january","february","maret","april","mei","juni","juli","agustus","september","oktober","november","desember"];
        return `${monthText[new Date().getMonth()]}`
    }
}

customElements.define("clock-text",Clock);
customElements.define("month-text",Month);

