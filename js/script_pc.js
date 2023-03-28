window.onload = function () {
    $("a").click(function () {
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 20 + "px" }, 500);
    });

    window.addEventListener("scroll", headerfixd);
    function headerfixd() {
        if ($(window).scrollTop() >= 5) {
            $('#header_menu').css('background', '#0780A3');
            $('#header_menu a').css('color', 'white');
            $('#header_menu #right_border').css('border-right', '1px solid white');
            $('#header_menu #sns01').css('content', 'url(src/png/pc/fb_w.png)');
            $('#header_menu #sns02').css('content', 'url(src/png/pc/ins_w.png)');
            $('#header_menu #sns03').css('content', 'url(src/png/pc/tw_w.png)');
            $('#header_menu #sns04').css('content', 'url(src/png/pc/ytb_w.png)');
            $('#header_menu #sns05').css('content', 'url(src/png/pc/line_w.png)');
        } else {
            $('#header_menu').css('background', 'rgba(0, 0, 0, 0)');
            $('#header_menu a').css('color', '#0780A3');
            $('#header_menu #right_border').css('border-right', '1px solid #0780A3');
            $('#header_menu #sns01').css('content', 'url(src/png/pc/fb.png)');
            $('#header_menu #sns02').css('content', 'url(src/png/pc/ins.png)');
            $('#header_menu #sns03').css('content', 'url(src/png/pc/tw.png)');
            $('#header_menu #sns04').css('content', 'url(src/png/pc/ytb.png)');
            $('#header_menu #sns05').css('content', 'url(src/png/pc/line.png)');
        }
    }

}



