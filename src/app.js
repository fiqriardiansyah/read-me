import './public/scss/main.scss'

import {transitionGrid,setSvgToPage,animateSplash,memePage} from './script/global';
import {ReadMeLayout} from './script/main';
 
//url 
import {init} from './script/routes/urlParser';
import RoutesUrl from './script/routes/routes';
const route = new RoutesUrl();

//splash screen
setSvgToPage();

window.addEventListener('load',()=>init());

window.addEventListener('hashchange',()=> init());

window.addEventListener('resize',()=> memePage.buttonAgree());

const currentUrl = route.getUrlWindow();
const page = route.urlParse(currentUrl);

if(window.innerWidth > 800){
    transitionGrid.desktopLayout();
}else{
    transitionGrid.phoneLayout();
}

if(page === 'readme' || page === 'contact') transitionGrid.animate();
    


