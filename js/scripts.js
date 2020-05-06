(function (global, $) {
    var PROJECT = {
        init: function () {
            $('body').addClass('show');

        	$(function(){
			  $(".phone-masks").mask("+7(999) 999-9999");
			});

            $('.hot-offers__slider .owl-carousel').owlCarousel({
                loop:true,
                margin:0,
                nav:true,
                dots: true,
                items:1,
                autoplay:true,
                autoplayTimeout:10000,
                smartSpeed: 1000,
                autoplayHoverPause:false,
            });

            $('[data-id]').hover(
                function(){
                    var this_id = $(this).data('id');
                    $('.game-detail-submenu').removeClass('active');
                    $('.game-detail-submenu[data-menu="'+this_id+'"]').addClass('active');
                },
                function(){

                }
            );

            $('.top-sale__slider .owl-carousel').owlCarousel({
                loop:true,
                nav:true,
                dots: true,
                dotsEach: 1,
                autoplay:true,
                autoplayTimeout:7000,
                smartSpeed: 1000,
                autoplayHoverPause:false,
                responsive:{
                    0:{
                        items:1,
                        margin:0,
                    },
                    600:{
                        items:2,
                        margin:0,
                    },
                    1000:{
                        margin:20,
                        items:3,
                    }
                }
            });

            $('.reviews-slider .owl-carousel').owlCarousel({
                loop:true,
                nav:true,
                dots: false,
                dotsEach: 1,
                responsive:{
                    0:{
                        items:1,
                        margin:0,
                    },
                    600:{
                        items:2,
                        margin:0,
                    },
                    1000:{
                        items:4,
                        margin:20,
                    }
                }
            });

            $('.button__go-up').click(function(){
                $("html, body").animate({scrollTop: "0px"});
                return false;
            });

            $(window).scroll(function() {
                var scroll = $(this).scrollTop();
                $('body').attr('data-scroll',scroll);
                if(scroll > 340){
                    $('body').addClass('scrolled');
                    $('.section-head_scroll').addClass('active');
                } else {
                    $('body').removeClass('scrolled');
                    $('.section-head_scroll').removeClass('active');
                }
            });

            $('.container-search input[type="text"]').on('input', function(){
                if($(this).val() != ''){
                    $(this).parent().parent().find('.search-result').addClass('active');
                } else {
                    $(this).parent().parent().find('.search-result').removeClass('active');
                }
            });

            $(document).on('click', '.basket__show-button', function(){
                $('.section_basket').toggleClass('active');

                if($(window).width() < 1120){
                    if($('.section_basket').hasClass('active') == true){
                        $('body').addClass('modal-open');
                        hideScroll();
                    } else {
                        $('body').removeClass('modal-open');
                        showScroll();
                    }
                }
            });

            $('.anim-block').viewportChecker({
                classToAdd: 'animated',
                offset: "25%"
            });

            $('.language-container a').click(function(){
                var lang = $(this).data('lang');
                $('.language-container li').removeClass('active');
                $('[data-lang="'+lang+'"]').parent('li').addClass('active');
                return false;
            });

            if($(window).width() <= 640){
                $('.footer-title').click(function(){
                    $(this).parent().parent().toggleClass('active');
                });
            }

            $('.menu-button').click(function(){
                $('.mobile-menu').toggleClass('active');
                $(this).toggleClass('active');

                if($('.mobile-menu').hasClass('active') == true){
                    $('.basket__show-button').css({'display':'none'});
                } else {
                    $('.basket__show-button').css({'display':'block'});
                }
            });

            $('.mobile-menu .detail').click(function(){
                $(this).parent().toggleClass('active');
                return false;
            });

            $('.close-basket').click(function(){
                $('.section_basket').removeClass('active');
                if($(window).width() < 1120){
                    $('body').removeClass('modal-open');
                    showScroll();
                }
                return false;
            });

            $('[href="#search"]').click(function(){
                $('.search-container__modal').toggleClass('active');
                    if($('.search-container__modal').hasClass('active') == true){
                        $('body').addClass('modal-open');
                        hideScroll();
                    } else {
                        $('body').removeClass('modal-open');
                        showScroll();
                    }
                return false;
            });

            $('.close-search').click(function(){
                $('.search-container__modal').removeClass('active');
                if($(window).width() < 1120){
                    $('body').removeClass('modal-open');
                    showScroll();
                }
                return false;
            });

            if(($(window).width() < 1120)&&($(window).width() > 700)){
                $('.games-container a').click(function(){
                    return false;
                });

                $('.game-detail__title i, .game-detail__title p').click(function(){
                    var href = $(this).closest('.games-container__detail').prev('.games-container').find('a').attr('href');
                    window.location.href = href;
                });
            }

            if($(window).width() < 1160){
                $('.games-container a').click(function(){
                    $('.games-container a').not($(this)).removeClass('active-game');
                    $('.games-container__detail').not($(this).parent().parent().next('.games-container__detail')).css({'display':'none'});

                    if($(this).parent().parent().next('.games-container__detail').hasClass('showen') == true){
                        $(this).removeClass('active-game');
                        $(this).parent().parent().next('.games-container__detail').removeClass('showen');
                        $(this).parent().parent().next('.games-container__detail').css({'display':'none'});
                    } else {
                        $(this).addClass('active-game');
                        $(this).parent().parent().next('.games-container__detail').addClass('showen');
                        $(this).parent().parent().next('.games-container__detail').css({'display':'block'});
                    }
                });
            }
        }
    };

	global.PROJECT = PROJECT;

    $(window).on("load", function () {
        PROJECT.init();
    });
})(window, jQuery);

function yes_scroll(){
    var scroll = $('body').css("top");
    scroll = parseInt(scroll) * (-1);
    //$("body").css({'top':'','position':'relative'});
    this._body.style.position = '';
    this._body.style.width = '';
    this._body.style.top = '';
    setTimeout(function(scroll){
        $("body").animate({scrollTop: scroll+"px"}, 1);
    }, 500);
    $('body').attr('data-scroll',scroll);
    console.log(scroll);
}

function no_scroll(){
    var scroll = $('body').data('scroll');
    //$("body").animate({scrollTop: scroll+"px"}, 1);
    $("body").css({'height':'100%','width':'100%','position':'fixed', 'top':'-'+scroll+"px"});
}

function getScrollbarSize() { // получение ширины скролла
    let outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

    document.body.appendChild(outer);

    let widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = 'scroll';

    // add innerdiv
    let inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    let widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

function hideScroll() {
    document.body.classList.add('no-scroll');

    document._scrollTop = window.pageYOffset; // запоминаем текущую прокрутку сверху
    document.body.style.position = 'fixed';
    if (document.body.scrollHeight > document.body.clientHeight) {
    // с учетом горизонтального скролла. Чтобы небыло рывка при открытии модального окна
        document.body.style.width = `calc(100% - ${getScrollbarSize()}px)`;
    } else {
        document.body.style.width = '100%';
    }
    document.body.style.top = -document._scrollTop + 'px';
}

function showScroll() {
    document.body.classList.remove('no-scroll');

    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scroll(0, document._scrollTop);
}



