function AppManager($pagesContainer) {
    this.pagesContainer = $pagesContainer;
    this.homePage = '#page-home';
    this.currentPage = '#page-home';
    this.pages = [];
    this.models = {};
    this.initialize();
}
AppManager.prototype = {
    initialize: function(fs) {
        var manager = this;
        manager.deviceEvent('onDeviceReady');
    },
    deviceEvent: function(event) {
        var manager = this;
        if (event === 'onDeviceReady') {
            manager.loginCheck(null);
            manager.setEvents();
        }
        else if (event === 'backbutton') {
//            $.each(manager.pages, function(i, page){
//                if('#page_'+page.handler === manager.currentPage){
//                    page.msg('broadcast', {event: 'backbutton'});
//                }
//            });
        }
    },
    initComponents: function() {
        var manager = this;
        manager.loadModels(function() {
            manager.loadPages(function() {
                manager.changePage(manager.homePage);
            });
        });
    },
    exitApp: function() {
        if (navigator.app) {
            navigator.app.exitApp();
        } else if (navigator.device) {
            navigator.device.exitApp();
        }
    },
    addPage: function(pageObject) {
        this.pages.push(pageObject);
    },
    changePage: function(wantedPage) {
        var manager = this;
        manager.pagesContainer.children('div.page').hide();
        $(wantedPage).show();

        manager.currentPage = wantedPage;
    },
    setEvents: function() {
        var manager = this;

        $(document).on(window.eventClick, 'a.changePage', function() {
            var wantedPage = $(this).attr('href');
            manager.changePage(wantedPage);
            return false;
        });

        $('#loginView').on(window.eventClick, 'a#btnLogin', function() {
            var username = $('#loginView input#username').val();
            var password = $('#loginView input#password').val();
            var rememberme = 0;

            if ($('#loginView input[name="rememberme"]').is(':checked')) {
                rememberme = 1;
            }

            var btn = $('#btnLogin');
            btn.removeClass('btn-primary');
            btn.addClass('btn-danger');
            btn.text('Tarkistetaan...');
            btn.attr('disabled', 'disabled');

            manager.logIn(username, password, function(data) {
                if (data.success === 0) {
                    //notification('error', 'Käyttäjää ei löytynyt!');
                    setTimeout(function() {
                        btn.removeClass('btn-danger');
                        btn.addClass('btn-primary');
                        btn.text('Login');
                        btn.attr('disabled', false);
                    }, 1500);
                }
                if (data.success === 1) {
                    btn.removeClass('btn-danger');
                    btn.addClass('btn-success');
                    btn.text('Kirjaudutaan...');

                    if (rememberme !== 0) {
                        if ('localStorage' in window && window['localStorage'] !== null) {
                            //save username & password to local storage
                            localStorage.setItem("username", username);
                            localStorage.setItem("password", password);
                        } else {
                            //notification('error', 'Selaimesi ei tue toimintoa, tunnusta ja salasanaa ei tallennettu.');
                        }
                    }

                    manager.initialize();

                    setTimeout(function() {
                        manager.uID = data.uID;
                        manager.changePage(manager.homePage);
                        //notification('success', 'Kirjautuminen onnistui!');
                        btn.attr('disabled', false);
                    }, 1000);
                }
            });

            return false;
        });

        $('#menu-left').on(window.eventClick, 'a#btnLogOut', function() {
            console.warn('logout');
            manager.logOut();
            return false;
        });
    },
    loadModels: function(f) {
        var manager = this;
        //manager.models.projects = manager.load('model', 'projects', null);

        setTimeout(function() {
            if (typeof f === 'function')
                f();
        }, 100);
    },
    loadPages: function(f) {
        var manager = this;

        manager.addPage(manager.load('page', 'home', 0));
        manager.addPage(manager.load('page', 'groups', 0));
        manager.addPage(manager.load('page', 'group', 0));
        manager.addPage(manager.load('page', 'choosegroup', 0));
        manager.addPage(manager.load('page', 'choosechildren', 0));
        manager.addPage(manager.load('page', 'test1', 0));
        manager.addPage(manager.load('page', 'test2', 0));

        setTimeout(function() {
            if (typeof f === 'function')
                f();
        }, 100);
    },
    load: function(type, handler, f) {
        var manager = this;

        if (type === 'page') {
            var className = handler + 'Page';
            return new window[className](handler, manager);
        }
        else if (type === 'widget') {
            var className = handler + 'Widget';
            if (typeof (f) === 'function') {
                f(new window[className](handler, manager));
            }
        }
        else if (type === 'model') {
            var className = handler + 'Model';
            return new window[className](handler, manager);
        }
        else if (type === 'view') {
            //var handlerName = handler+'View';
            //loader.addTemplateToDOM(loader.viewPath+handlerName+'.js', handler);
        }
    },
    logIn: function(username, password, f) {
        var manager = this;
        var data = {
            uName: username,
            uPassword: password,
            submit: true,
            format: 'JSON'
        };
        $.ajax({
            url: window.serverURL + 'login/do_login/',
            data: data,
            type: "POST",
            dataType: 'jsonp',
            cache: false,
            crossDomain: true,
        }).done(function(data) {
            if (typeof f === 'function')
                f(data);
        });
        return false;
    },
    logOut: function() {
        var manager = this;

        $.ajax({
            url: window.serverURL + 'login/-/ajax_logout',
            type: "GET",
            cache: false,
            dataType: 'jsonp',
            crossDomain: true
        }).done(function() {
            manager.uID = 0;
            //manager.changePage('#page_login');
            $('#loginView').show();
            setTimeout(function() {
                window.location.reload();
            }, 500);
        });
    },
    loginCheck: function(state) {
        var manager = this;

        //if(state === 'init'){
        $.ajax({
            url: window.apiURL + 'check_login',
            type: "GET",
            dataType: 'jsonp',
            cache: false,
            crossDomain: true
        }).done(function(data) {
            if (data.loggedIn === 1) {
                manager.initComponents();
                $('#loginView').fadeOut('fast');
            } else {

            }
        });
        //}

//        manager.checkLoginInterval = setInterval(function(){
//            $.ajax({
//                url: window.apiURL + 'check_login',
//                type: "GET",
//                dataType: 'json',
//                cache: false,
//                crossDomain: true,
//                success: function(data) {
//                    if(data.loggedIn === 1){
//                        //console.info('Kirjautuneena sisään');
//                    }else{
//                        //console.warn('Ei kirjautuneena sisään');
//                    }
//                }
//            });
//        }, 30000);
    },
    setHeader: function(text) {
        var manager = this;
        $('#headerText').empty().html(text);
    },
    notify: function(text, type) {
        $.notify.defaults({
            autoHideDelay: 3000,
            showAnimation: 'fadeIn',
            showDuration: 100,
            hideAnimation: 'fadeOut',
            hideDuration: 400
        });

        $.notify(text, type);
    }
};
