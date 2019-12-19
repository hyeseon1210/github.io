$(function(){ 
    
    $('.contents').niceScroll({
        cursorcolor:"#F8771C",
        cursorwidth:5,
        scrollspeed:60,
        cursorborderradius:'0',
        mousescrollstep:40,
        cursoropacitymin:0,
        cursoropacitymax:1,
        background:"none",
        cursorborder:"none",
        autohidemode: true,
        boxzoom:false,
        zindex:9
    });

    $('dt span:first').addClass('mainall');
    $('dd:not(:first)').css('width','0px');
    $("dl dt").click(function(){ 
       if($('+dd',this).css('width')=='0px'){
              $('dt:has(.mainall)+dd').animate({width:'0%'});
              $('+dd',this).animate({width:'49%'});
              $('dt span').removeClass('mainall');//이전에 클릭했던 메뉴탭
              $('span',this).addClass('mainall');
             }
    });

   
});
