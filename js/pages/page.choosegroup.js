function choosegroupPage(parent, manager){
    this.handler = 'choosegroup'; 
    this.manager = manager; 
    this.parent = parent;
    this.widgets = {};
    this.initialize();
}
choosegroupPage.prototype = {
    initialize: function(){
        var page = this;
        page.element = $('#page-'+page.handler+'');
        page.load();
        page.setEvents();
    },
    setEvents: function(){
        var page = this;
        
        page.element.on('click', 'a.btnRefreshGroups', function(){
            page.load();
        });
        
        page.element.on('click', 'a.btnGroup', function(){
            var ID_group = $(this).attr('data-ID_group');
            $.event.trigger({type: "groupChosen", ID_group: ID_group});
            page.manager.changePage('#page-choosechildren');
        });
    },
    load: function(){
        var page = this;
        
        var html = '';
        ajax('GET', window.apiURL+'groups/get_all', {}, function(a){
            $.each(a.groups, function(i, item){
                html += '<a href="#" class="list-group-item btnGroup" data-ID_group="'+item.ID_group+'">'+
                    '<h4 class="list-group-item-heading">'+item.name+'</h4>'+
                    '<p class="list-group-item-text">'+item.postnumber+'<span class="glyphicon glyphicon-chevron-right pull-right" style="margin-top: -10px;"></span></p>'+
                '</a>';
            });
            page.element.find('div.list-group').empty().html(html);
        }, null);
        
    }
};
