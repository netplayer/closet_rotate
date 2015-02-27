


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