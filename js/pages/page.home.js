function homePage(parent){
    this.handler = 'home';
    this.parent = parent;
    this.widgets = {};
    this.initialize();
}
homePage.prototype = {
    initialize: function(){
        var page = this;
        page.element = $('#page-'+page.handler+'');
        page.setEvents();
    },
    setEvents: function(){
        var page = this;

    }
};
