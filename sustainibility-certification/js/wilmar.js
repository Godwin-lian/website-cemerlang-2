/*! npm.im/object-fit-images 3.2.3 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!m&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=l.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);p.call(e,"src")!==n&&b.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[a];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&g&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=p.call(t,"data-ofi-srcset")||t.srcset,o.img.src=p.call(t,"data-ofi-src")||t.src,b.call(t,"data-ofi-src",t.src),t.srcset&&b.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[a].img[e||"src"]},set:function(e,i){return t[a].img[i||"src"]=e,b.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(t,e){var i=!h&&!t;if(e=e||{},t=t||"img",f&&!e.skipTest||!d)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][a]=t[r][a]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&o(t.target,{skipTest:e.skipTest})},!0),h=!0,t="img"),e.watchMQ&&window.addEventListener("resize",o.bind(null,t,{skipTest:e.skipTest}))}var a="bfred-it:object-fit-images",l=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,u="undefined"==typeof Image?{style:{"object-position":1}}:new Image,g="object-fit"in u.style,f="object-position"in u.style,d="background-size"in u.style,m="string"==typeof u.currentSrc,p=u.getAttribute,b=u.setAttribute,h=!1;return o.supportsObjectFit=g,o.supportsObjectPosition=f,function(){function t(t,e){return t[a]&&t[a].img&&("src"===e||"srcset"===e)?t[a].img:t}f||(HTMLImageElement.prototype.getAttribute=function(e){return p.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return b.call(t(this,e),e,String(i))})}(),o}();

//function: to add sticky menu
// When the user scrolls the page, execute sticky_menu
window.onscroll = function () { sticky_menu() };

// Get the navbar
var navbar = document.getElementsByClassName("navbar");
var isMobile = isMobileDevice();
if (isMobile) {
    navbar = navbar[1];
}
else {
    navbar = navbar[0];
}

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function sticky_menu() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
//end function to add sticky menu

$(document).ready(function () {
    var wilmar_app = {};
    if(typeof objectFitImages === 'function')objectFitImages();

    $('body').css('opacity', 1);

    /* ======================================*/
    /* 
        Header affix behaviour
    */
    /* ======================================*/
    var main_nav = $('.header-bar .navbar-default');
    main_nav .on('affix.bs.affix',function(){
        $('.main').addClass('main-bs-affix');
    });

    main_nav .on('affix-top.bs.affix',function(){
        $('.main').removeClass('main-bs-affix');
    });

    /* ======================================*/
    /* 
        Mobile menu
    */
    /* ======================================*/
    var nav_mobile_items = $('.mobile-navbar .navbar-collapse .dropdown-toggle > .glyphicon');
    if(nav_mobile_items.length){
        nav_mobile_items.off().on('click',function(evt){
            evt.preventDefault();
            var item = $(this).parent('.dropdown-toggle').siblings('.collapse');
            var parent = item.parent('li');
            var others = parent.siblings('li').find('.collapse');

            others.collapse('hide').siblings('.dropdown-toggle').removeClass('active');
            item.collapse('toggle').siblings('.dropdown-toggle').toggleClass('active');
        });
    }

    //Level 2
    var nav_mobile_items2 = $('.mobile-navbar .navbar-collapse .dropdown-header > .glyphicon');
    if(nav_mobile_items2.length){
        nav_mobile_items2.off().on('click',function(evt){
            evt.preventDefault();
            var item = $(this).parent('.dropdown-header').siblings('.collapse');
            var parent = item.closest('.dropdownSection');
            var others = parent.siblings('.dropdownSection').find('.collapse');

            others.collapse('hide').siblings('.dropdown-header').children('.glyphicon').removeClass('open');
            item.collapse('toggle').siblings('.dropdown-header').children('.glyphicon').toggleClass('open');
        });

    }

    /* ======================================*/
    /* 
        Links-tab
    */
    /* ======================================*/
    if ($(window).innerWidth() < 1024) {

        var nav = $('.centeredCustomWidth');

	    $(".centeredCustomWidth li").each(function(index){

	    	var item = $(this);
	    	item.attr('data-scroll-left', item.offset().left - 100);

	    	if(index == 0){
	    		item.attr('data-scroll-left', '0');
	    	}
	    	if(index == ($('.centeredCustomWidth li').length - 1)){
	    		item.attr('data-scroll-left', item.offset().left + 200);
	    	}
	    });

        var target = $('.centeredCustomWidth li.active');
        var nav_scroll = nav.scrollLeft();
        var target_left = target.attr('data-scroll-left');

        nav.scrollLeft(nav_scroll + target_left);

    }

    /* ======================================*/
    /* 
        Zoomable images
    */
    /* ======================================*/
    if ($(window).innerWidth() >= 1024) {

        var zoomables = $('a.zoomable-image');
        if(zoomables.length){

            zoomables.each(function(){
                var zoomable = $(this);

                zoomable.off().on('click',function(e){
                    e.preventDefault();
                });
            });
        }
    }

    if ($(window).innerWidth() < 1024) {
        var zoomables = $('a.zoomable-image');

        if(zoomables.length){
            zoomables.each(function(){
                var zoomable = $(this);

                zoomable.attr("href", zoomable.find('img').attr('src'));
                zoomable.magnifik();

                zoomable.on('magnifik:open', function(){
                    var target = $(this);
                    var magni_close = $('.magni-close');
                    if(!magni_close.length){
                        magni_close = $('<div class="magni-close">X</div>');
                        $('body').prepend(magni_close);
                    }

                    magni_close.off().on('click',function(){
                        target.magnifik('close');
                    });
                });
            });
        }
    }

    /* ======================================*/
    /* 
        History-cards
    */
    /* ======================================*/
    var history_cards = $('.history-cards');
    if(history_cards.length){
        history_cards.each(function(){
            var el = $(this);
            var container = el.find('.history-cards-body');
            var timeline = el.find('.timeline');
            var dots_list = el.find('.dots-list');
            var custom_offset = -20;
            el.bounds = {};
            el.timer = false;

            el.calculate_bounds = function(){
                el.bounds = {
                    container:{
                        top:container.offset().top
                        ,bot:container.offset().top + container.height()
                    }
                    ,win:{
                        top:$(window).scrollTop() + $('.header-bar').height()
                    }
                    ,timeline:{
                        top:timeline.offset().top
                        ,bot:timeline.offset().top + timeline.height()
                    }
                    ,header:{
                        height:$('.header-bar').height()
                    }
                };

                return this;
            }

            el.render = function(){

                el.dotslist_move((el.bounds.win.top - el.bounds.container.top + custom_offset));

                if(!el.timer){
                    el.timer = setTimeout(function(){
                        el.dotslist_move((el.bounds.win.top - el.bounds.container.top + custom_offset));

                        clearTimeout(el.timer);
                        el.timer = false;
                    }, 500);
                }

                timeline.css('top', '0');
                if(el.bounds.win.top >= el.bounds.container.bot - timeline.height() - timeline.css('margin-top').replace('px','')  - custom_offset){
                    var move_amt = -(timeline.height()-((el.bounds.container.bot - el.bounds.win.top) - timeline.css('margin-top').replace('px','') - custom_offset));
                    el.timeline_move(move_amt);
                }

                return this;
            }

            el.dotslist_move = function(amt){
                var computed_amt = 0;
                if(el.bounds.win.top >= el.bounds.container.top 
                    && el.bounds.win.top < el.bounds.container.bot){
                    computed_amt = amt  + custom_offset;
                }

                dots_list.css('top', computed_amt);
                dots_list.attr('highest-amt', computed_amt);
            }

            el.timeline_move = function(amt){
                if(el.bounds.win.top >= el.bounds.container.top 
                    && el.bounds.win.top < el.bounds.container.bot){
                    timeline.css('top', amt);
                    timeline.attr('highest-amt', amt);
                }
            }

            $(window).on('scroll', function(){
                timeline.find('li a').blur();
                el.calculate_bounds().render();
            });
        });
    }

    /* ======================================*/
    /* 
        Accordions
    */
    /* ======================================*/
    var accordions = $('.accordion .panel-title > a');
    if(accordions.length){
        accordions.each(function(index){
            $(this).on('click',function(){
                var accordion = $(this);

                setTimeout(function(){
                    if(accordion.hasClass('collapsed'))return false;
                    $('body,html').animate({
                        scrollTop : accordion.offset().top - (accordion.height() * 4)
                    },300);
                },500); 
            });
        });

        $(window).on('load', function(){
            var hash = window.location.hash || '';
            var target = $(hash);
            if(target.length){
                target.find('a').trigger('click')[0].click();
            }
        });

    }

    var cm_tables = $('.sfRichText table');
    if(cm_tables.length){
        var active_class = 'active';

        cm_tables.each(function(){
            var table = $(this);
            var th = table.find('th');
            var tbody = table.find('tbody');

            if(th.length > 2){
                tbody.find('tr td:nth-child(n+2)').each(function(){
                    var td = $(this);
                    td.prepend('<div class="mobile-th">'+th.eq(td.index()).html()+'</div>');
                });
            }

            table.find('tbody tr td:nth-child(1)').on('click', function(){
                var tr =  $(this).closest('tr');
                if (tr.hasClass(active_class)){
                    tr.removeClass(active_class);
                }else{
                    tbody.find('tr').removeClass('active');
                    tr.addClass(active_class);
                }
            });
        });
    }

    /* ======================================*/
    /* 
        iFrames
    */
    /* ======================================*/
    iframes_reload($('.sfRichText iframe'));
   
    function iframes_reload(iframes){
        if(iframes.length){
            iframes.each(function(){
                var iframe = $(this);
                iframe.attr('src', iframe.attr('src'));
            });
        }
    } 

    /* ======================================*/
    /* 
        Tab-navigation
    */
    /* ======================================*/
    var tab_navs = $('.tab-navigation');
    
    if(tab_navs.length){
        var heighest = 0;

        setTimeout(function(){
            tab_navs.each(function(){
                var tab_nav = $(this);

                tab_nav.css('height', tab_nav.height() + 0.4);

                tab_nav.find('li').each(function(){
                    var li = $(this);
                    var href = li.find('a');

                    href.css('height', li.height() + 0.4);

                    heighest = li.height() > heighest ? li.height() + 0.4 : heighest;

                    href.on('mouseover',function(){
                        activate_tab($(this));
                    });
                    href.on('mouseout',function(){
                        deactivate_tab($(this));
                    });
                });

            });

            activate_tab(tab_navs.find('li.active a'));
        },100);

        function activate_tab(el){
            el.css('height', (heighest + 20) + 'px');
        }

        function deactivate_tab(el){
            if(el.parent('li').hasClass('active'))return false;
            el.css('height', (heighest) + 'px');
        }
    }


    /* ======================================*/
    /* 
        Content-tabs
    */
    /* ======================================*/
    var nav_tabs_section = $('.nav-tabs-section');
    if(nav_tabs_section.length){
        nav_tabs_section.each(function(){
            var nav = $(this);
            var header = nav.closest('.tabs-panel-heading');
            var content = header.siblings('.tab-content');
            var first_child_width = $(nav.children('li')[0]).outerWidth();

            wait_for_element(nav, 300, function() {
              tab_enable_arrows(nav);

              setTimeout(function(){
                init();
              },100);
            });

            init();

            function init(){

                nav.children('li').each(function(index){
                    var item = $(this);
                    var nav = item.closest('.nav-tabs-section');
                    var nav_max_width = nav.width();
                    var scroll_left = item.offset().left - ((nav_max_width - item.width()) * 0.5);

                    if(header.hasClass('enable-arrows'))scroll_left -= 40;
                    if(index == 0)scroll_left =  0;
                    if(index >= $('.nav.nav-tabs-section li').length -1)scroll_left = item.offset().left + nav_max_width;

                    item.attr('data-scroll-left', scroll_left);
                    item.css('max-width', nav_max_width);

                    item.on('click', function(){
                        tab_scrollleft(nav,$(this));
                        iframes_reload(content.find('iframe'));
                    });

                    item.on('set_active', function(){
                        tab_scrollleft(nav,$(this));
                        iframes_reload(content.find('iframe'));
                    });
                });

                var current_active = $(nav.children('li.active'));
                if(current_active.length)tab_scrollleft(nav,$(current_active[0]));
            }
        });
    }

    function tab_enable_arrows(nav){
        if(nav[0].scrollWidth > nav.width()){
            nav.parent('.tabs-panel-heading').addClass('enable-arrows');

            var next_el = nav.siblings('.nav-tab-next');
            var prev_el = nav.siblings('.nav-tab-prev');
            var items = nav.find('li');
            var target_item = $(items[0]);

            next_el.on('click',function(){
                if($(this).hasClass('disabled'))return false;

                items.each(function(){
                    var item = $(this);

                    if(item.offset().left + item.width() >= nav.offset().left + nav.width()){
                        target_item = item;
                        return false;
                    }
                });

                tab_scrollleft(nav,target_item);
            });

            prev_el.on('click',function(){
                if($(this).hasClass('disabled'))return false;

                items.each(function(){
                    var item = $(this);
                    if(Math.ceil(item.offset().left) >= nav.offset().left){
                        target_item = item.prev();
                        return false;
                    }
                });

                tab_scrollleft(nav,target_item);
            });
        }
    }

    function tab_toggle_arrows(nav){

        nav.siblings('.nav-tab-next').removeClass('disabled');
        nav.siblings('.nav-tab-prev').removeClass('disabled');
        if(nav.scrollLeft() <= 0)nav.siblings('.nav-tab-prev').addClass('disabled');
        if(nav.scrollLeft() + nav.outerWidth() >= nav[0].scrollWidth)nav.siblings('.nav-tab-next').addClass('disabled');
    }

    function tab_scrollleft(container, item){
        var target = item;
        var target_left = target.attr('data-scroll-left');

        container.animate({
            scrollLeft: target_left
        }, 100).promise().always(function(){
            tab_toggle_arrows(container);
        });
    }


    /* ======================================*/
    /* 
        Carousel
    */
    /* ======================================*/
    var carousel_indicators = $('.carousel-indicators');
    if(carousel_indicators.length){
        carousel_indicators.each(function(){
            var indicator = $(this);
            var items = indicator.find('li');
            if(items.length && items.length <= 1){
                indicator.hide();

                var control = indicator.siblings('.carousel-control');
                if(control.length)control.hide();
            }
        });
    }
    

    /* ======================================*/
    /* 
        Maps
    */
    /* ======================================*/
    var map_filter_group = $('.map-filters .filter-group');
    if(map_filter_group.length){
        map_filter_group.each(function(){
            var filter_group = $(this);
            filter_group.slick({
                slidesToShow: 3
                ,arrows:true
                ,infinite:false
                ,mobileFirst:true
                ,responsive: [                
                    /*{
                      breakpoint: 1600,
                      settings: {
                        slidesToShow: 12
                        ,arrows:true
                        ,slidesToScroll: 1
                        ,infinite:false
                      }
                    },*/
                    {
                      breakpoint: 1499,
                      settings: {
                        slidesToShow: 12
                        ,arrows:true
                        ,slidesToScroll: 1
                        ,infinite:false
                      }
                    },
                    {
                      breakpoint: 1199,
                      settings: {
                        slidesToShow: 10
                        ,arrows:true
                        ,slidesToScroll: 1
                        ,infinite:false
                      }
                    },
                    {
                      breakpoint: 969,
                      settings: {
                        slidesToShow: 8
                        ,arrows:true
                        ,slidesToScroll: 1
                        ,infinite:false
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 6
                        ,arrows:true
                        ,slidesToScroll: 1
                        ,infinite:false
                      }
                    }, 
                   {
                      breakpoint: 575,
                      settings: {
                        slidesToShow: 5
                        ,arrows:true
                        ,slidesToScroll: 1
                        ,infinite:false
                      }
                    },                    
                    {
                      breakpoint: 374,
                      settings: {
                        slidesToShow: 3
                        ,arrows:true
                        ,slidesToScroll: 1
                        ,infinite:false
                      }
                    }
                ]
            });
        });
    }

    /* ======================================*/
    /* 
        Signpost
    */
    /* ======================================*/
    $(window).on('resize',function(){
        window.adjust_signpost.reset();

        if($(window).innerWidth() < 768) { return;}

        window.adjust_signpost.title();
        window.adjust_signpost.block();
    });

    $(window).on('load', function(){
        wait_for_element('.sign-posts', 300, function() {
            if($(window).innerWidth() >= 768) {
                window.adjust_signpost.reset();

                setTimeout(function(){
                    window.adjust_signpost.title();

                    setTimeout(function(){
                        window.adjust_signpost.block();
                    }, 30);
                }, 30);
            }
        });
    });



    /* ======================================*/
    /* 
        URL Hashtag activation
    */
    /* ======================================*/
    //$(function() {
    //    //Content tabs (all types of tabs except quote boxes)
    //    if ($('.tab-pane').length > 0) {

    //        if (!$('.tab-pane').eq(0).hasClass('card-quote-description')){
    //            $('.tab-pane').eq(0).addClass('active');

    //            if (!$('.nav-tabs-section li.active').length)
    //                $('.nav-tabs-section li').eq(0).addClass('active').trigger('set_active');
    //        }

    //        if (window.location.hash) {
    //            //Highlight tab based on anchor value
    //            var hash = window.location.hash.substring(1);

    //            if (hash.indexOf('?') > 0)
    //                hash = hash.substr(0, hash.indexOf('?'));

    //            if ($('.' + hash + '.tab-pane').length > 0 && !$('.' + hash + '.tab-pane').hasClass('card-quote-description')) {
    //                $('.nav-tabs-section li').removeClass('active');
    //                $('.nav-tabs-section').find('a[aria-controls=' + hash + ']').parent().addClass('active');
    //                $('.' + hash + '.tab-pane').siblings().removeClass('active')
    //                $('.' + hash + '.tab-pane').addClass('active');
    //                $('.nav-tabs-section').find('a[aria-controls=' + hash + ']').parent().trigger('set_active');
    //            }
    //        }
    //    }
    //});

    function hash_activation(hash) {
        //Content tabs (all types of tabs except quote boxes)
        if ($('.tab-pane').length > 0) {

            if (!$('.tab-pane').eq(0).hasClass('card-quote-description')) {
                $('.tab-pane').eq(0).addClass('active');

                if (!$('.nav-tabs-section li.active').length)
                    $('.nav-tabs-section li').eq(0).addClass('active').trigger('set_active');
            }

            if (window.location.hash || hash) {
                //Highlight tab based on anchor value
                if (!hash) {
                    hash = window.location.hash.substring(1);

                    if (hash.indexOf('?') > 0)
                        hash = hash.substr(0, hash.indexOf('?'));
                }

                if ($('.' + hash + '.tab-pane').length > 0 && !$('.' + hash + '.tab-pane').hasClass('card-quote-description')) {
                    
                    var nav_section = $('.nav-tabs-section');
                    var tab_pane = $('.' + hash + '.tab-pane');
                    var nav_section_triggered = nav_section.find('a[aria-controls=' + hash + ']');

                    nav_section.find('li').removeClass('active');
                    nav_section_triggered.parent().addClass('active');
                    nav_section_triggered.parent().trigger('set_active');
                    tab_pane.siblings().removeClass('active')
                    tab_pane.addClass('active');

                    $('html,body').animate({
                        scrollTop: nav_section_triggered.offset().top - ($('.header-bar').height() + $('.navbar-default').height()) //Stan to advice
                    }, 300);
                }
            }
        }
    }

    hash_activation();

    $("a[href*='#']").click(function () {
        var a_tag = $(this);
        var target = a_tag.attr('target') ? a_tag.attr('target') : false;
        if(!target || target == '_blank')return;

        hash_activation(a_tag.attr('href').substring(a_tag.attr('href').indexOf('#') + 1));
    });
});

window.adjust_signpost = {
    reset:function(){
        var sign_posts = $('.sign-posts');
        if(sign_posts.length){
            sign_posts.find('.card-title').css('height', 'auto');
            sign_posts.find('.card-block').css('height', 'auto');
        }
    }
    ,title:function(){
        var sign_posts = $('.sign-posts');
        if(sign_posts.length){
            sign_posts.each(function(){
                var sign_post = $(this);
                var card_titles = sign_post.find('.card-title');
                var set_height = 30;


                card_titles.css('height', 'auto');

                setTimeout(function(){
                    card_titles.each(function(){
                        var title = $(this);
                        if(title.height() > set_height)set_height = title.height();
                    });

                    setTimeout(function(){
                        card_titles.css('height', set_height);
                    },10);
                },10);
            });
        }
    }
    ,block:function(){
        var sign_posts = $('.sign-posts');
        if(sign_posts.length){
            sign_posts.each(function(){
                var sign_post = $(this);
                var card_blocks = sign_post.find('.card-block');
                var set_height_block = 30;


                card_blocks.css('height', 'auto');

                setTimeout(function(){
                    card_blocks.each(function(){
                        var block = $(this);
                        if(block.height() > set_height_block)set_height_block = block.height();
                    });

                    setTimeout(function(){
                        card_blocks.css('height', set_height_block);
                    },10);
                },10);

            });
        }
    }
}

function wait_for_element(selector, interval, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      wait_for_element(selector, callback);
    }, interval);
  }
}
/*
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}*/