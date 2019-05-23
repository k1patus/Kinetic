function test1Page(parent, manager){
    this.handler = 'test1';
    this.manager = manager;
    this.parent = parent;
    this.widgets = {};
    this.currentChildren = {};
    this.chosenChildrenCount = {};
    this.currentGroup = null;
    this.round = 0; // lasketaan montako kierrosta (lasta) ollaan jo testattu
    this.initialize();
}
test1Page.prototype = {
    initialize: function(){
        var page = this;
        page.element = $('#page-'+page.handler+'');
        page.setEvents();
    },
    setEvents: function(){
        var page = this;

        $(document).on('startTest', function(e){
            page.currentChildren = e.chosenChildren;
            page.currentGroup = e.ID_group;
            page.chosenChildrenCount = e.chosenChildrenCount;
            page.round = 0;
            page.initTestRound();
        });
        
        $(document).on('backToStart', function(e){
            page.round++;
            
            if(page.round < page.chosenChildrenCount){
                page.manager.changePage('#page-test1');
                page.initTestRound();
            }else{
                page.manager.notify("Testit suoritettu. Palataan etusivulle.", "info");
                setTimeout(function(){
                    page.manager.setHeader('');
                    page.manager.changePage('#page-home');
                },1000);
            }
        });
        
        /* 1. 10m kävely */
        page.element.on('click', 'a.btnChoice_1', function(){
            var choice = $(this).attr('data-id');
            var choiceText = $(this).text();
            page.element.find('a.choice_1').empty().html(choiceText+' <span class="caret"></span>');
            window.dataPack[1].value_2 = choice;
        });
        
        /* 2. 10m juoksu */
        page.element.on('click', 'a.btnChoice_2', function(){
            var choice = $(this).attr('data-id');
            var choiceText = $(this).text();
            page.element.find('a.choice_2').empty().html(choiceText+' <span class="caret"></span>');
            window.dataPack[2].value_2 = choice;
        });
        
        /* 6. Tarkkuusheitto */
        page.element.on('click', 'a.btnChoice_6', function(){
            var choice = $(this).attr('data-id');
            var choiceText = $(this).text();
            page.element.find('a.choice_6').empty().html(choiceText+' <span class="caret"></span>');
            window.dataPack[6].value_4 = choice;
        });
        
        /* 8. Taputusrytmissä käveleminen */
        page.element.on('click', 'a.btnChoice_8', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_8').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[8].value_1 = choice;
        });
        
        /* 9. Laukkaaminen eteenpäin */
        page.element.on('click', 'a.btnChoice_9', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_9').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[9].value_1 = choice;
        });
        
        /* 10. Laukkaaminen sivuttain */
        page.element.on('click', 'a.btnChoice_10_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_10_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[10].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_10_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_10_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[10].value_2 = choice;
        });
        
        /* 11. Kuperkeikka */
        page.element.on('click', 'a.btnChoice_11_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_11_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[11].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_11_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_11_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[11].value_2 = choice;
        });
        page.element.on('click', 'a.btnChoice_11_3', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_11_3').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[11].value_3 = choice;
        });
        
        /* 12. Pallon potkaiseminen kohteeseen */
        page.element.on('click', 'a.btnChoice_12_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_12_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[12].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_12_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_12_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[12].value_2 = choice;
        });
        page.element.on('click', 'a.btnChoice_12_3', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_12_3').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[12].value_3 = choice;
        });
        page.element.on('click', 'a.btnChoice_12', function(){
            var choice = $(this).attr('data-id');
            var choiceText = $(this).text();
            page.element.find('a.choice_12').empty().html(choiceText+' <span class="caret"></span>');
            window.dataPack[12].value_4 = choice;
        });
        
        
        
        /* SEURAAVALLE SIVULLE */
        page.element.on('click', 'a.btnTestNext', function(){
            window.dataPack[1].value_1 = $('#inputTest_1').val();
            window.dataPack[2].value_1 = $('#inputTest_2').val();
            window.dataPack[3].value_1 = $('#inputTest_3').val();
            window.dataPack[4].value_1 = $('#inputTest_4').val();
            window.dataPack[5].value_1 = $('#inputTest_5').val();
            window.dataPack[6].value_1 = $('#inputTest_6_1').val();
            window.dataPack[6].value_2 = $('#inputTest_6_2').val();
            window.dataPack[6].value_3 = $('#inputTest_6_3').val();
            window.dataPack[7].value_1 = $('#inputTest_7_1').val();
            window.dataPack[7].value_2 = $('#inputTest_7_2').val();
            
            $.event.trigger({type: "testNextPage"});
        });
    },
    initTestRound: function(){
        var page = this;
        
        page.clearFields();
        page.manager.setHeader(page.currentChildren[page.round].lastname+' '+page.currentChildren[page.round].firstname);

        window.dataPack.ID_child = page.currentChildren[page.round].ID_child;
        window.dataPack.ID_group = page.currentGroup;
        
        window.dataPack[1] = {};
        window.dataPack[2] = {};
        window.dataPack[3] = {};
        window.dataPack[4] = {};
        window.dataPack[5] = {};
        window.dataPack[6] = {};
        window.dataPack[7] = {};
        window.dataPack[8] = {};
        window.dataPack[9] = {};
        window.dataPack[10] = {};
        window.dataPack[11] = {};
        window.dataPack[12] = {};
        window.dataPack[13] = {};
        window.dataPack[14] = {};
        window.dataPack[15] = {};
        window.dataPack[16] = {};
        window.dataPack[17] = {};
        window.dataPack[18] = {};
    },
    clearFields: function(){
        var page = this;
        $('#inputTest_1').val('');
        page.element.find('a.choice_1').empty().html('Jalkaterien suunta <span class="caret"></span>');
        
        $('#inputTest_2').val('');
        page.element.find('a.choice_2').empty().html('Jalkaterien suunta <span class="caret"></span>');
        
        $('#inputTest_3').val('');
        
        $('#inputTest_4').val('');
        
        $('#inputTest_5').val('');
        
        $('#inputTest_6_1').val('');
        $('#inputTest_6_2').val('');
        $('#inputTest_6_3').val('');
        page.element.find('a.choice_6').empty().html('Heittokäsi <span class="caret"></span>');
        
        $('#inputTest_7_1').val('');
        $('#inputTest_7_2').val('');
        
        $('a.btnChoice_8').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_9').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_10_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_10_2').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_11_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_11_2').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_11_3').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_12_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_12_2').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_12_3').removeClass('btn-primary').addClass('btn-default');
        page.element.find('a.choice_12').empty().html('Potkaiseva jalka <span class="caret"></span>');
        
    }
};
