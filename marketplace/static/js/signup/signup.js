$(document).ready(function(){

    var Signup = {
        Init: function(config){
            this.config	= config;
            this.BindeEvents();
        },
        BindeEvents: function(){
            var $this = this.config;

               
                Signup.OnLoadPage();
               
        },
        OnLoadPage(){
            var $self = Signup.config;
                console.log('Signup')

          
                Signup.Select2Initialize();              

        },
        Select2Initialize : function(){
            var $self = Signup.config;

                $self.select2.select2();
                $self.select2.select2({
                    theme: 'bootstrap4'                    
                });
        },
        CallAjax: function(url, data, route){
            var $self = Signup.config, timer, data_object = {},
                $base_host  = $.trim($self.content_wrapper.attr('data-host')),
                $url        =  $base_host + url;

            $.ajax({
                    type: 'POST',
                    url: $url,
                    data: data,
                    dataType:'json',
                    beforeSend: function(){
                        timer && clearTimeout(timer);
                        timer = setTimeout(function()
                        {
                            $("body").addClass("loading"); 
                        },
                        500);                    
                        //DISABLE BUTTON
                    },
                    complete: function(){
                        clearTimeout(timer);
                        $("body").removeClass("loading"); 
                        //ENABLE BUTTON
                    },                
                    success: function(evt){ 
                        if(evt){
                            switch(route){
                                // case 1: Signup.Navigation(2, evt); break; 

                            }    
                        }
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        console.log('error: ' + textStatus + ': ' + errorThrown);
                    }
                }); 
        }//end sa CAllAjax	        
    }
    
    Signup.Init({
         select2         : $('.select2')
    });


});


