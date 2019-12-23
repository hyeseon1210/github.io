$(document).ready(function(){
    
    var intv = setInterval(function () {
        nextAni();
    }, 4000);

    function nextAni() {
        $(".main ul").not(":animated").animate({
            "margin-left": "-100%"
        }, 0, function () {
            $(".main ul li").eq(0).appendTo($(".main ul"));
            $(".main ul").css("margin-left", "0");
        });
    }
    function prevAni() {
        $(".main ul li").eq(2).prependTo($(".main ul"));
        $(".main ul").css("margin-left", "-100%");
        $(".main ul").not(":animated").animate({"margin-left": "0"}, 0);
    }
    
    
     var intv2 = setInterval(function () {
        nextAni2();
    }, 4000);

    function nextAni2() {
        $(".reveiw_img ul").not(":animated").animate({
            "margin-left": "-100%"
        }, 0, function () {
            $(".reveiw_img li").eq(0).appendTo($(".reveiw_img ul"));
            $(".reveiw_img ul").css("margin-left", "0");
        });
        $(".review_txt ul").not(":animated").animate({
            "margin-left": "-100%"
        }, 0, function () {
            $(".review_txt li").eq(0).appendTo($(".review_txt ul"));
            $(".review_txt ul").css("margin-left", "0");
        });
    }
    function prevAni2() {
        $(".reveiw_img li").eq(2).prependTo($(".reveiw_img ul"));
        $(".reveiw_img ul").css("margin-left", "-100%");
        $(".reveiw_img ul").not(":animated").animate({"margin-left": "0"}, 0);
        $(".review_txt li").eq(2).prependTo($(".review_txt ul"));
        $(".review_txt ul").css("margin-left", "-100%");
        $(".review_txt ul").not(":animated").animate({"margin-left": "0"}, 0);
    }
    $(".prev_btn").click(function(){
       clearInterval(intv2);
        prevAni2();
        intv2 = setInterval(function () {nextAni();}, 5000);
    });
    $(".next_btn").click(function(){
       clearInterval(intv2);
        nextAni2();
        intv2 = setInterval(function () {nextAni();}, 5000);
    });
    
});