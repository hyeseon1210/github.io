$(document).ready(function () {

var intv = setInterval(function () {
        nextAni();
    }, 4500);

    function nextAni() {
        $(".subvisual1").not(":animated").animate({
            "margin-top": "-15.5%"
        }, 1500, function () {
            $(".subvisual1 li").eq(0).appendTo($(".subvisual1"));
            $(".subvisual1").css("margin-top", "0");
        });
    }
    function prevAni() {
        $(".subvisual1 li").eq(2).prependTo($(".slideul"));
        $(".subvisual1").css("margin-top", "-15.5%");
        $(".subvisual1").not(":animated").animate({"margin-top": "0"}, 1500);
    }
    
});