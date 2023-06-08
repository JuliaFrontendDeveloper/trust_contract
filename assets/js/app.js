$(document).ready(function () {
    JS.init();


});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var JS = {
    clickEvent: '',
    hoverEvent: '',

    init: function () {
        JS.clickEvent = isMobile.any() ? 'touchstart' : 'click';
        JS.hoverEvent = isMobile.any() ? 'touchstart' : 'hover';


    }


};
