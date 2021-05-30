import RoutesUrl from './routes';
import {HomeLayout,ReadMeLayout,ContactMeLayout} from '../main';

const route = new RoutesUrl();

const urls = {
    readme: ReadMeLayout,
    contact: ContactMeLayout
}

const loadPage = (page)=>{
    if(!page) return HomeLayout();
    return urls[page]();
}

const init =()=>{
    const url = route.getUrlWindow();
    const page = route.urlParse(url);
    loadPage(page);
}

export {
    init
}