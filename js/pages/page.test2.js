function test2Page(parent, manager){
    this.handler = 'test2';
    this.parent = parent;
    this.manager = manager;
    this.widgets = {};
    this.initialize();
}
test2Page.prototype = {
    initialize: function(){
        var page = this;
        page.element = $('#page-'+page.handler+'');
        page.setEvents();
    },
    setEvents: function(){
        var page = this;

        $(document).on('testNextPage', function(e){
            page.clearFields();
        });

        /* 1 Itsensä tunnistaminen */
        page.element.on('click', 'a.btnChoice_13_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_13_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[13].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_13_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_13_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[13].value_2 = choice;
        });
        page.element.on('click', 'a.btnChoice_13_3', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_13_3').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[13].value_3 = choice;
        });
        page.element.on('click', 'a.btnChoice_13_4', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_13_4').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[13].value_4 = choice;
        });
        page.element.on('click', 'a.btnChoice_13_5', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_13_5').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[13].value_5 = choice;
        });
        page.element.on('click', 'a.btnChoice_13_6', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_13_6').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[13].value_6 = choice;
        });
        
        /* 2. Kehonosien tunnistaminen ja paikallistaminen */
        page.element.on('click', 'a.btnChoice_14_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_2 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_3', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_3').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_3 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_4', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_4').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_4 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_5', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_5').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_5 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_6', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_6').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_6 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_7', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_7').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_7 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_8', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_8').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_8 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_9', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_9').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_9 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_10', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_10').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_10 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_11', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_11').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_11 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_12', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_12').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_12 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_13', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_13').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_13 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_14', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_14').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_14 = choice;
        });
        page.element.on('click', 'a.btnChoice_14_15', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_14_15').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[14].value_15 = choice;
        });
        
        /* 3. Vartalon eri puolten erottaminen */
        page.element.on('click', 'a.btnChoice_15_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_15_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[15].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_15_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_15_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[15].value_2 = choice;
        });
        page.element.on('click', 'a.btnChoice_15_3', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_15_3').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[15].value_3 = choice;
        });
        page.element.on('click', 'a.btnChoice_15_4', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_15_4').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[15].value_4 = choice;
        });
        
        /* 4. Vartalon eri puolten erottaminen */
        page.element.on('click', 'a.btnChoice_16_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_16_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[16].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_16_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_16_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[16].value_2 = choice;
        });
        
        /* 5. Liikkeen ja käsitteen yhdistäminen */
        page.element.on('click', 'a.btnChoice_17_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_17_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[17].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_17_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_17_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[17].value_2 = choice;
        });
        page.element.on('click', 'a.btnChoice_17_3', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_17_3').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[17].value_3 = choice;
        });
        page.element.on('click', 'a.btnChoice_17_4', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_17_4').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[17].value_4 = choice;
        });
        page.element.on('click', 'a.btnChoice_17_5', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_17_5').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[17].value_5 = choice;
        });
        
        /* 6. Vartalon osien liikkeiden matkiminen */
        page.element.on('click', 'a.btnChoice_18_1', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_18_1').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[18].value_1 = choice;
        });
        page.element.on('click', 'a.btnChoice_18_2', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_18_2').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[18].value_2 = choice;
        });
        page.element.on('click', 'a.btnChoice_18_3', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_18_3').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[18].value_3 = choice;
        });
        page.element.on('click', 'a.btnChoice_18_4', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_18_4').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[18].value_4 = choice;
        });
        page.element.on('click', 'a.btnChoice_18_5', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_18_5').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[18].value_5 = choice;
        });
        page.element.on('click', 'a.btnChoice_18_6', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_18_6').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[18].value_6 = choice;
        });
        page.element.on('click', 'a.btnChoice_18_7', function(){
            var choice = $(this).attr('data-id');
            page.element.find('a.btnChoice_18_7').removeClass('btn-primary').addClass('btn-default');
            $(this).removeClass('btn-default').addClass('btn-primary');
            window.dataPack[18].value_7 = choice;
        });
        
        page.element.on('click', 'a.btnSave', function(){
            ajax('POST', window.apiURL+'test/save', window.dataPack, function(a){
                if(a.errors === 0){
                    $.notify("Tiedot tallennettu", "success");
                    $.event.trigger({type: "backToStart"});
                }else{
                    page.manager.notify(a.errors_txt, "error");
                }
            }, null);
        });
    },
    clearFields: function(){
        var page = this;
        
        $('a.btnChoice_13_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_13_2').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_13_3').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_13_4').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_13_5').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_13_6').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_14_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_2').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_3').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_4').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_5').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_6').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_7').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_8').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_9').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_10').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_11').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_12').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_13').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_14').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_14_15').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_15_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_15_2').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_15_3').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_15_4').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_16_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_16_2').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_17_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_17_2').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_17_3').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_17_4').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_17_5').removeClass('btn-primary').addClass('btn-default');
        
        $('a.btnChoice_18_1').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_18_2').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_18_3').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_18_4').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_18_5').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_18_6').removeClass('btn-primary').addClass('btn-default');
        $('a.btnChoice_18_7').removeClass('btn-primary').addClass('btn-default');
    }
};
