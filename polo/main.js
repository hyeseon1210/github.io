$(document).ready(function () {
    
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.imgscroll .img1').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1','top':'8%'},1500);
                    
            }
            
        }); 
        $('.imgscroll .img2').each( function(i){
            
            var bottom_of_object2 = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window2 = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window2 > bottom_of_object2 ){
                
                $(this).animate({'opacity':'1','top':'13%'},1500);
                    
            }
            
        }); 
        $('.imgscroll .img3').each( function(i){
            
            var bottom_of_object3 = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window3 = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window3 > bottom_of_object3 ){
                
                $(this).animate({'opacity':'1','bottom':'13%'},2000);
                    
            }
            
        }); 
        $('.imgscroll .img4').each( function(i){
            
            var bottom_of_object4 = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window4 = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window4 > bottom_of_object4 ){
                
                $(this).animate({'opacity':'1','bottom':'8%'},2000);
                    
            }
            
        }); 
    
    });
    
    var intv = setInterval(function () {
        nextAni();
    }, 3000);

    function nextAni() {
        $(".slide").not(":animated").animate({
            "margin-left": "-100%"
        }, 0, function () {
            $(".slide li").eq(0).appendTo($(".slide"));
            $(".slide").css("margin-left", "0");
        });
         $(".small_slide").not(":animated").animate({
            "margin-left": "-100%"
        }, 0, function () {
            $(".small_slide li").eq(0).appendTo($(".small_slide"));
            $(".small_slide").css("margin-left", "0");
        });
    }
    function prevAni() {
        $(".slideli").eq(2).prependTo($(".slideul"));
        $(".slide").css("margin-left", "-100%");
        $(".slide").not(":animated").animate({"margin-left": "0"}, 0);
        $(".small_slideli").eq(2).prependTo($(".small_slide"));
        $(".small_slide").css("margin-left", "-100%");
        $(".small_slide").not(":animated").animate({"margin-left": "0"}, 0);
    }
});