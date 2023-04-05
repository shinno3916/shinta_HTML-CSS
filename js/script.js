// メイン画像スライド
$(function() {
    $('.carousel').slick({
        autoplay: true, //自動再生
        infinite: true, //スライドループ
        dots: true, //ドット表示
        fade: true, //フェードイン設定
        pauseOnHover: true, //マウスオーバーで自動再生停止
        responsive: [{
            breakpoint: 768, //ブレークポイント
        }]
    }, 3000); //スライド時間設定

    // メインナビ　アニメーション
    $('.nav_animation').mouseover(function() {
        $(this).fadeTo('slow', 0.3);
    });
    $('.nav_animation').mouseout(function() {
        $(this).fadeTo('slow', 1);
    });

    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();

    // 100pxスクロールで表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    
    // ふわっとスクロール
    $('a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top + adjust;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });
    
    // フェードイン プロフィール
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.fadeup-profile').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight) {
                $(this).addClass("is-fadein");
            }
        });
        $('.fadeup-hobby').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight +100 ) {
                $(this).addClass("is-fadein");
            }
        });
    });

    // モーダルで画像拡大
    $('.course-item a').click(function() {
        var imgSrc = $(this).children().attr('src');
        $('.bigimg').attr('src', imgSrc);
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        pagetop.hide();
        return false
    });
    $('.close-btn').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        pagetop.fadeIn();
        return false
    });
});


