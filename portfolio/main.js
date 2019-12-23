$(document).ready(function(){
         var sc_pg=parseInt($(window).height());
         $(window).on("mousewheel",function(e){
             if(e.originalEvent.wheelDelta<0){
                 $("html,body").not(":animated").animate({
                     scrollTop:"+="+sc_pg+"px"
                 },800);
             }else{$("html,body").not(":animated").animate({
                 scrollTop:"-="+sc_pg+"px"
             },800);
                 
             }
             return false;
         });
    $("a.menu1").addClass("select");
         $("a.menu_btn1").addClass("select2");
    $("html,body").animate({scrollTop:"0"});
         $("a.menu1").addClass("select");
         $("a.menu_btn1").addClass("select2");
         $("a.menu1, a.menu_btn1").on("click",function(){
             $("html,body").animate({scrollTop:"0"},1000);
             $("a").removeClass("select2");
             $("a.menu_btn1").addClass("select2");
             return false;
         });
         $("a.menu2, a.menu_btn2").on("click",function(){
             $("html,body").animate({scrollTop:$("#page2").offset().top},1000);
             $("a").removeClass("select2");
             $("a.menu_btn2").addClass("select2");
             return false;
         });
         $("a.menu3, a.menu_btn3").on("click",function(){
             $("html,body").animate({scrollTop:$("#page3").offset().top},1000);
             $("a").removeClass("select2");
             $("a.menu_btn3").addClass("select2");
             return false;
         });
         $("a.menu4, a.menu_btn4").on("click",function(){
             $("html,body").animate({scrollTop:$("#page4").offset().top},1000);
             $("a").removeClass("select2");
             $("a.menu_btn4").addClass("select2");
             return false;
         });
    
    //스킬 그그래프
        $(document).ready(function(){
       $('.gr_ps').delay(1000).animate({width: '95%'},2000);
       $('.gr_html').delay(1000).animate({width: '90%'},2000);
       $('.gr_ja').delay(1000).animate({width: '75%'},2000);
            $('.gr_jq').delay(1000).animate({width: '75%'},2000);
     });
     //포트폴리오
      $('#black,#big').hide();
         $(".list a").on('click',function(){
             $('#black').show();
             $('#big').show().html("<img src='"+$(this).attr('href')+"'>");//html메소드는 html내부 내용을 변경하거나 가져올 수 있다.
             return false;
         });
         $("#black,#big").on('click',function(){
               $('#black,#big').hide();
         });
     
        //패럴럭스 스크롤링
        var wh = $(window).height();
        var wd = $(window).width();
        $(".sc_data").each(function(index){
            $(this).attr("data-val", index*wh); //1920*0 = 0, 1920*1, 1920*2 .... 이런식으로 계산되어 값을 저장
        });
        $(".sc_data").on("mousewheel DOMMouseScroll", function(e){
            var secPos = parseInt($(this).attr("data-val"));
            if(e.originalEvent.wheelDelta >= 0){
                $("html, body").stop().animate({scrollTop:secPos - wh});// 0 100% 200% 
                return false;
            } else if(e.originalEvent.wheelDelta < 0) {
                $("html, body").stop().animate({scrollTop:secPos + wh});
                return false;
            }
        }); 
     
     
            
     });