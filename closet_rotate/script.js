
$(document).ready(function(){ 
    
    //Get name and quantity of of items (in production "items" will be server-side-constructed array) 
    var names=new Array('TopBrewer-Kabinet1.62','TopBrewer-Kabinet1.63');
    var items=new Array('DarkWood','lightWood');
    var url='http://netplayer.gr/demo22/'+names[0]+'/frames/'+items[0]+'.0.jpg';
    window.console.log(url);
    
    //initialize
    $('#main').attr('src',url);
    $('#main').fadeIn('slow');
    $('#color').val(names[0]);
    $('#type').val(items[0]);
    $('#frame').val(0);
    for(i=0;i<names.length;i++){  
        itemsName=names[i];        
        itemsName=new Array();
        for(x=0;x<25;x++){
            itemsName.push(items[i]+'.'+x+'.jpg');
            var img='<img id='+itemsName[x]+' src="http://netplayer.gr/demo22/'+names[i]+'/frames/'+itemsName[x]+'" />';
            $('#preload').append(img);            
            $('#frameNo').val(x);
        };         
    };    
    //Costruct configuration color buttons  
    for(i=0;i<items.length;i++){                      
                          
        $('#next').before("&nbsp;<a href='javascript:void(0);' class='option'  id="+names[i]+">"+items[i]+"</a>");
                  
    }; 

    //give functionality to buttons

    //1) color buttons
    $('.option').click(function(){
        var arr=new Array();
        var itemcolor=$(this).attr('id');
        for(i=0;i<names.length;i++){
            if(names[i]==itemcolor){
                var color=names[i]; 
                var type=items[i];
                var frame= parseInt($('#frame').val());          
            }        
        };    
        var txt=type+'.'+frame+'.jpg';   
        var isrc=document.getElementById(txt).src;
        $('#frame').val(frame);
        $('#main').attr('src',isrc);    
   
        $('#color').val(color);
        $('#type').val(type);    
    });
});


//Would be good to mousehold
$.fn.mousehold = function(timeout, f) {
    if (timeout && typeof timeout == 'function') {
        f = timeout;
        timeout = 100;
    }
    if (f && typeof f == 'function') {
        var timer = 0;
        var fireStep = 0;
        return this.each(function() {
            jQuery(this).mousedown(function() {
                fireStep = 1;
                var ctr = 0;
                var t = this;
                timer = setInterval(function() {
                    ctr++;
                    f.call(t, ctr);
                    fireStep = 2;
                }, timeout);
                
            })

            clearMousehold = function() {
                clearInterval(timer);
                if (fireStep == 1) f.call(this, 1);
                fireStep = 0;
            }
			
            $(this).mouseout(clearMousehold);
            $(this).mouseup(clearMousehold);
        })
    }
}

//2( arrow buttons
$('.arrows').mousehold(function(){//alert('ok');

    var color=$('#color').val();
    var type=$('#type').val()
    
      
    if($(this).attr('id')=='next'){
        var frame= parseInt($('#frame').val());
        var frameNo=$('#frameNo').val();
        if(frame==frameNo){
            frame=0; 
        }
        else{
            var frame= parseInt($('#frame').val())+1;
        }
        var txt=type+'.'+frame+'.jpg';
        
        var isrc=document.getElementById(txt).src;
        
        $('#frame').val(frame);
    
        $('#main').attr('src',isrc);
       
    }
    if($(this).attr('id')=='prev'){
        var frame= parseInt($('#frame').val());
        var frameNo=$('#frameNo').val();
        if(frame==0){
            frame=24; 
        }
        else{
      
            var frame= parseInt($('#frame').val())-1;
        }
        
        var txt=type+'.'+frame+'.jpg';
        var isrc=document.getElementById(txt).src;
        $('#frame').val(frame);
        $('#main').attr('src',isrc); 
       
    }
       
});