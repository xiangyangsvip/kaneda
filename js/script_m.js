window.onload = function () {

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
    $('#m_icon').click(function () {
        if ($('#m_menu').css('display') == 'none') {
            window.removeEventListener("scroll", headerfixd);
            $('#m_menu').css('display', 'block');
            $('#m_icon').css('background', 'url(src/png/m/close_m.png) no-repeat center');
            if ($(window).scrollTop() < 5) {
                $('#m_header').css('background', '#0780A3');
            }

        }
        else {
            window.addEventListener("scroll", headerfixd);
            $('#m_menu').css('display', 'none');
            $('#m_icon').css('background', 'url(src/png/m/menu_m_w.png) no-repeat center');
            if ($(window).scrollTop() < 5) {
                $('#m_header').css('background', 'rgba(0, 0, 0, 0)');
                $('#m_icon').css('background', 'url(src/png/m/menu_m.png) no-repeat center');
            }
        }

    });

    $('#m_menu  a').click(function () {
        if ($('#m_menu').css('display') == 'block') {
            $('#m_menu').css('display', 'none');
            window.addEventListener("scroll", headerfixd);

            }
        } 
    );
}



