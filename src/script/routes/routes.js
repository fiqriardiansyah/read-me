
class RoutesUrl {

    getUrlWindow(){
        return window.location.href;
    }

    urlParse(url){
        return url.split('#')[1];
    }

    location(url){
        window.location = url
    }
}

export default RoutesUrl;
