function groupPage(parent, manager){
    this.handler = 'group'; 
    this.manager = manager; 
    this.parent = parent;
    this.currentGroup = {};
    this.currentChildren = {};
    this.widgets = {};
    this.initialize();
}
groupPage.prototype = {
    initialize: function(){
        var page = this;
        page.element = $('#page-'+page.handler+'');
        
        page.setEvents();
    },
    setEvents: function(){
        var page = this;
        
        var $modalGroup = $('#modalAddGroup');
        var $modalChildren = $('#modalChildren');
        
        $(document).on("openGroup", function(e){
            page.load(e.ID_group);
            page.loadChildren(e.ID_group);
        });
        
        page.element.on('click', 'a.btnEditGroup', function(){
            var ID_group = $(this).attr('data-ID_group');
            
            $modalGroup.find('h4.modal-title').text('Päivitä ryhmän tietoja');
            $modalGroup.find('input').val('');
            $modalGroup.find('input[type="hidden"][name="action"]').val('update');
            $modalGroup.find('input[type="hidden"][name="ID_group"]').val(page.currentGroup.ID_group);
            $modalGroup.find('input[name="name"]').val(page.currentGroup.name);
            $modalGroup.find('input[name="postnumber"]').val(page.currentGroup.postnumber);
            $modalGroup.find('input[name="country"]').val(page.currentGroup.country);
            
            $modalGroup.modal('show');
        });
        
        page.element.on('click', 'a.btnAddChild', function(){
            $modalChildren.find('h4.modal-title').text('Lisää lapsi ryhmään');
            $modalChildren.find('input').val('');
            $modalChildren.find('input[type="hidden"][name="action"]').val('add');
            $modalChildren.find('input[type="hidden"][name="ID_group"]').val(page.currentGroup.ID_group);
            $modalChildren.find('input[type="hidden"][name="ID_child"]').val('');
            $modalChildren.modal('show');
        });
        
        page.element.on('click', 'a.btnUpdateChild', function(){
            var ID_child = $(this).attr('data-ID_child');
            var child = page.currentChildren[ID_child];
            
            $modalChildren.find('h4.modal-title').text('Muokkaa lapsen tietoja');
            $modalChildren.find('input').val('');
            $modalChildren.find('input[type="hidden"][name="action"]').val('update');
            $modalChildren.find('input[type="hidden"][name="ID_group"]').val(page.currentGroup.ID_group);
            $modalChildren.find('input[type="hidden"][name="ID_child"]').val(ID_child);
            $modalChildren.find('input[name="firstname"]').val(child.firstname);
            $modalChildren.find('input[name="lastname"]').val(child.lastname);
            $modalChildren.find('input[name="yearofbirth"]').val(child.yearofbirth);
            $modalChildren.find('input[name="custodian_name"]').val(child.custodian_name);
            $modalChildren.find('input[name="custodian_phone"]').val(child.custodian_phone);
            $modalChildren.find('input[name="custodian_email"]').val(child.custodian_email);
            $modalChildren.modal('show');
        });
        
        $modalGroup.on('click', '#btnModalAddGroupSubmit', function(){
            var action = $modalGroup.find('input[type="hidden"][name="action"]').val();
            
            if(action === 'update'){
                var data = $modalGroup.find('form').serializeArray();

                ajax('POST', window.apiURL+'groups/update', data, function(a){
                    if(a.errors === 0){
                        $modalGroup.modal('hide');
                        page.manager.notify("Ryhmän tiedot tallennettu", "success");
                        page.load(page.currentGroup.ID_group);
                    }else{
                        alert(a.errors_txt);
                    }
                }, null);
            }
        });
        
        $modalChildren.on('click', '#btnModalChildrenSubmit', function(){
            var action = $modalChildren.find('input[type="hidden"][name="action"]').val();
            
            if(action === 'add' || action === 'update'){
                var data = $modalChildren.find('form').serializeArray();

                ajax('POST', window.apiURL+'children/'+action, data, function(a){
                    if(a.errors === 0){
                        $modalChildren.modal('hide');
                        page.manager.notify((action==='add' ? 'Lapsi lisätty' : 'Lapsen tiedot tallennettu'), "success");
                        page.loadChildren(page.currentGroup.ID_group);
                    }else{
                        alert(a.errors_txt);
                    }
                }, null);
            }
        });
        
    },
    load: function(ID_group){
        var page = this;
        
        var html = '';
        ajax('GET', window.apiURL+'groups/get_by_id', {
            ID_group: ID_group
        }, function(a){
            html += '<b>Nimi: </b> '+a.group.name+'<br />';
            html += '<b>Postinumero: </b> '+a.group.postnumber+'<br />';
            html += '<b>Maa: </b> '+a.group.country+'<br /><br />';
            html += '<a href="#" class="btn btn-primary btnEditGroup" data-ID_group="'+a.group.ID_group+'"><span class="glyphicon glyphicon-pencil"></span> Muokkaa</a> ';
            
            page.currentGroup = a.group;
            
            page.element.find('div.container-group-data').empty().html(html);
        }, null);
    },
    loadChildren: function(ID_group){
        var page = this;
        
        var html = '';
        ajax('GET', window.apiURL+'children/get_by_group', {
            ID_group: ID_group
        }, function(a){
            $.each(a.children, function(i, item){
                html += '<tr data-ID_child="'+item.ID_child+'"><td>'+item.lastname+' '+item.firstname+' (synt. '+item.yearofbirth+')</td>'+
                        '<td>'+item.custodian_name+'</td>'+
                        '<td>'+(item.custodian_phone === '' ? 'Ei määritetty' : item.custodian_phone)+'</td>'+
                        '<td>'+(item.custodian_email === '' ? 'Ei määritetty' : item.custodian_email)+'</td>'+
                        '<td><a href="#" class="btn btn-primary btnUpdateChild" data-ID_child="'+item.ID_child+'"><span class="glyphicon glyphicon-pencil"></span> Muokkaa</a></td>'+
                    '</tr>';
                page.currentChildren[item.ID_child] = item;
            });
            
            setTimeout(function(){
                page.element.find('tbody.container-children').empty().html(html);
            },1000);
            
        }, null);
    }
};
