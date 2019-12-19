$(document).ready(function () {
    
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
    
    var intv = setInterval(function () {
        nextAni();
    }, 4500);

    function nextAni() {
        $(".slideul").not(":animated").animate({
            "margin-left": "-100%"
        }, 1500, function () {
            $(".slideli").eq(0).appendTo($(".slideul"));
            $(".slideul").css("margin-left", "0");
        });
    }
    function prevAni() {
        $(".slideli").eq(2).prependTo($(".slideul"));
        $(".slideul").css("margin-left", "-100%");
        $(".slideul").not(":animated").animate({"margin-left": "0"}, 1500);
    }
    $(".prevBtn").click(function(){
       clearInterval(intv);
        prevAni();
        intv = setInterval(function () {nextAni();}, 4500);
    });
    $(".nextBtn").click(function(){
       clearInterval(intv);
        nextAni();
        intv = setInterval(function () {nextAni();}, 4500);
    });
    
        var intv2 = setInterval(function () {
        nextAni2();
    }, 3000);

    function nextAni2() {
        $(".hot_imgul").not(":animated").animate({
            "margin-left": "-250px"
        }, 800, function () {
            $(".hot_imgul li").eq(0).appendTo($(".hot_imgul"));
            $(".hot_imgul").css("margin-left", "0px");
        });
    }
    function prevAni2() {
        $(".hot_imgul li").eq(2).prependTo($(".hot_imgul"));
        $(".hot_imgul").css("margin-left", "-250px");
        $(".hot_imgul").not(":animated").animate({"margin-left": "0px"}, 800);
    }
    
var intv3 = setInterval(function () {
        nextAni3();
    }, 3000);
    function nextAni3() {
        $(".hot_imgul2").not(":animated").animate({
            "margin-left": "-250px"
        }, 800, function () {
            $(".hot_imgul2 li").eq(0).appendTo($(".hot_imgul2"));
            $(".hot_imgul2").css("margin-left", "0px");
        });
    }
    function prevAni3() {
        $(".hot_imgul2 li").eq(2).prependTo($(".hot_imgul2"));
        $(".hot_imgul2").css("margin-left", "-250px");
        $(".hot_imgul2").not(":animated").animate({"margin-left": "0px"}, 800);
    }
    
    
    var intv4 = setInterval(function () {
        nextAni4();
    }, 3000);
    function nextAni4() {
        $(".hot_imgul3").not(":animated").animate({
            "margin-left": "-250px"
        }, 800, function () {
            $(".hot_imgul3 li").eq(0).appendTo($(".hot_imgul3"));
            $(".hot_imgul3").css("margin-left", "0px");
        });
    }
    function prevAni4() {
        $(".hot_imgul3 li").eq(2).prependTo($(".hot_imgul3"));
        $(".hot_imgul3").css("margin-left", "-250px");
        $(".hot_imgul3").not(":animated").animate({"margin-left": "0px"}, 800);
    }
    
    
    var intv5 = setInterval(function () {
        nextAni5();
    }, 3000);
    function nextAni5() {
        $(".hot_imgul4").not(":animated").animate({
            "margin-left": "-250px"
        }, 800, function () {
            $(".hot_imgul4 li").eq(0).appendTo($(".hot_imgul4"));
            $(".hot_imgul4").css("margin-left", "0px");
        });
    }
    function prevAni5() {
        $(".hot_imgul4 li").eq(2).prependTo($(".hot_imgul4"));
        $(".hot_imgul4").css("margin-left", "-250px");
        $(".hot_imgul4").not(":animated").animate({"margin-left": "0px"}, 800);
    }
    
    
    var intv6 = setInterval(function () {
        nextAni6();
    }, 3000);
    function nextAni6() {
        $(".hot_imgul5").not(":animated").animate({
            "margin-left": "-250px"
        }, 800, function () {
            $(".hot_imgul5 li").eq(0).appendTo($(".hot_imgul5"));
            $(".hot_imgul5").css("margin-left", "0px");
        });
    }
    function prevAni6() {
        $(".hot_imgul5 li").eq(2).prependTo($(".hot_imgul5"));
        $(".hot_imgul5").css("margin-left", "-250px");
        $(".hot_imgul5").not(":animated").animate({"margin-left": "0px"}, 800);
    }
    
    var intv7 = setInterval(function () {
        nextAni7();
    }, 3000);
    function nextAni7() {
        $(".hot_imgul6").not(":animated").animate({
            "margin-left": "-250px"
        }, 800, function () {
            $(".hot_imgul6 li").eq(0).appendTo($(".hot_imgul6"));
            $(".hot_imgul6").css("margin-left", "0px");
        });
    }
    function prevAni7() {
        $(".hot_imgul6 li").eq(2).prependTo($(".hot_imgul6"));
        $(".hot_imgul6").css("margin-left", "-250px");
        $(".hot_imgul6").not(":animated").animate({"margin-left": "0px"}, 800);
    }
    
    $(".opener").click(function(){
        $("#menu").fadeIn();
    });
    $(".closeBtn").click(function(){
        $("#menu").fadeOut();
    });
    
    $(".search_opener").click(function(){
        $("#search").fadeIn();
    });
    $(".back").click(function(){
        $("#search").fadeOut();
    });
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.brand_bi').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','top':'0%'},1500);
                    
            }
            
        }); 
    
    });
});
