function groupsPage(parent, manager){
    this.handler = 'groups'; 
    this.manager = manager; 
    this.parent = parent;
    this.widgets = {};
    this.initialize();
}
groupsPage.prototype = {
    initialize: function(){
        var page = this;
        page.element = $('#page-'+page.handler+'');
        page.load();
        page.setEvents();
    },
    setEvents: function(){
        var page = this;
        
        var $modalAddGroup = $('#modalAddGroup');
        
        page.element.on(window.eventClick, 'a.btnRefreshGroups', function(){
            page.load();
        });
        
        page.element.on(window.eventClick, 'a.btnAddGroup', function(){
            $modalAddGroup.find('h4.modal-title').text('Lisää ryhmä');
            $modalAddGroup.find('input').val('');
            $modalAddGroup.find('input[type="hidden"][name="action"]').val('add');
            $modalAddGroup.find('input[type="hidden"][name="ID_group"]').val('');
            $modalAddGroup.modal('show');
        });
        
        page.element.on(window.eventClick, 'a.btnGroup', function(){
            var ID_group = $(this).attr('data-ID_group');
            $.event.trigger({type: "openGroup", ID_group: ID_group});
            page.manager.changePage('#page-group');
        });
        
        $modalAddGroup.on(window.eventClick, '#btnModalAddGroupSubmit', function(){
            var action = $modalAddGroup.find('input[type="hidden"][name="action"]').val();
            
            if(action === 'add'){
                var data = $modalAddGroup.find('form').serializeArray();

                ajax('POST', window.apiURL+'groups/add', data, function(a){
                    if(a.errors === 0){
                        $modalAddGroup.modal('hide');
                        page.manager.notify("Ryhmä lisätty", "success");
                        page.load();
                    }else{
                        alert(a.errors_txt);
                    }
                }, null);
            }
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
