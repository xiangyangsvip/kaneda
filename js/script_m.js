window.onload = function () {
    $("a").click(function () {
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 20 + "px" }, 500);
    });
    window.addEventListener("scroll", headerfixd);
    function headerfixd() {
        if ($(window).scrollTop() >= 5) {
            $('#m_header').css('background', '#0780A3');
            $('#m_header #m_icon').css('background', 'url(src/png/m/menu_m_w.png) no-repeat center');
        } else {
            $('#m_header').css('background', 'rgba(0, 0, 0, 0)');
            $('#m_header #m_icon').css('background', 'url(src/png/m/menu_m.png) no-repeat center');
        }
    }
}



