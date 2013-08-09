(function ($) {
    $(function () {
        $('ul.nav').scrollspy();
        $('.nav li a, a.scroll').bind('click', function (e) {
            e.preventDefault();
            if($(this).attr('href') == "#home") {
                $('html, body').stop().animate({scrollTop: 0}, 300);
            }
            else {
                if($(this.hash).offset()) {
                    var offset = $(this.hash).offset().top - 65;
                    $('html, body').stop().animate({scrollTop: offset}, 400);
                }
            }
        });
        $('.back-to-top, .brand').bind('click', function (e) {
            e.preventDefault();
            $('html, body').stop().animate({scrollTop: 0}, 300);
        });
    });
})(jQuery);