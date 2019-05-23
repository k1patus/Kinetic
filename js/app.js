// make console.log safe to use
window.console || (console = {log: function() {
    }});

//window.loader = new Loader();
//window.startPage = '#page_login';
window.siteUrl = 'http://apm-testisto.fi/'
window.serverURL = window.siteUrl+'index.php/';
window.apiURL = window.siteUrl+'index.php/tools/';
window.appManager = new AppManager($('div#container'));

window.dataPack = {};

$(document).ready(function() {
    
    $('div#loginView').find('input#username').val(window.localStorage.getItem("username"));
    $('div#loginView').find('input#password').val(window.localStorage.getItem("password"));

});

function ajax(type, url, data, callback_success, callback_error){
    $.ajax({
        type: 'GET',
        url: url,
        data: data,
        dataType: 'jsonp',
        crossDomain: true,
        cache: false
    }).done(function(a) {
        if(typeof callback_success === 'function'){
            callback_success(a);
        }
    }).error(function(b){
        if(typeof callback_error === 'function'){
            callback_error(b);
        }
    });
}
