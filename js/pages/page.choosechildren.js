function choosechildrenPage(parent, manager){
    this.handler = 'choosechildren'; 
    this.manager = manager; 
    this.parent = parent;
    this.widgets = {};
    this.currentChildren = {};
    this.initialize();
}
choosechildrenPage.prototype = {
    initialize: function(){
        var page = this;
        page.element = $('#page-'+page.handler+'');
        page.setEvents();
    },
    setEvents: function(){
        var page = this;
        
        $(document).on('groupChosen', function(e){
            page.load(e.ID_group);
        });
        
        page.element.on('click', 'a.btnRefreshChildrenList', function(){
            page.load();
        });
        
        page.element.on('click', 'a.btnStartTest', function(){
            var ID_group = $(this).attr('data-ID_group');
            
            var chosenChildren = {};
            var count = -1;
            page.element.find('input[type="checkbox"]:checked').each(function(index){
                var ID_child_selected = $(this).val();
                $.each(page.currentChildren, function(i, item){
                    if(ID_child_selected === item.ID_child){
                        chosenChildren[++count] = item;
                    }
                });
            });
            
            $.event.trigger({type: "startTest", ID_group: ID_group, chosenChildren: chosenChildren, chosenChildrenCount: count+1});
            page.manager.changePage('#page-test1');
        });
    },
    load: function(ID_group){
        var page = this;
        
        var html = '';
        ajax('GET', window.apiURL+'children/get_by_group', {
            ID_group: ID_group
        }, function(a){
            $.each(a.children, function(i, item){
                html += '<a href="#" class="list-group-item btnChild" data-ID_child="'+item.ID_child+'">'+
                    //'<h4 class="list-group-item-heading">'+item.lastname+' '+item.firstname+'</h4>'+
                    '<p class="list-group-item-text">'+
                        '<label class="checkbox-inline">'+
                            '<input type="checkbox" value="'+item.ID_child+'"> '+item.lastname+' '+item.firstname+''+
                        '</label>'+
                        '<span class="glyphicon glyphicon-chevron-right pull-right"></span></p>'+
                '</a>';
                page.currentChildren[i] = item;
            });
            
            html += '<br /><a href="#" class="btn btn-success btn-block btn-lg btnStartTest" data-ID_group="'+ID_group+'">ALOITA TESTI</a><br />';
            
            page.element.find('div.list-children').empty().html(html);
        }, null);
        
    }
};
