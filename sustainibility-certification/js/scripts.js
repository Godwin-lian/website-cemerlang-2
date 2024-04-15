/*const { Tabs } = require("../js/app");*/

$(function () {
    var isMobile = isMobileDevice();

    $(window).on('resize',function(){
        responsive_pagebanner();
        nav_affix();
    });

    responsive_pagebanner();
    nav_affix();

    function responsive_pagebanner(){
        var el = $(".page-banner-bg");

        if (!(isMobileDevice())) {
            var headerHeight = "-" + $('.navbar-laptop').outerHeight() + "px";
            el.css({
                'top': headerHeight,
                'margin-bottom': headerHeight
            });
        }else{
            el.css({
                'top': 0,
                'margin-bottom': 0
            });
        }
    }

    //Align row headers to the container
    var leftSpaceContainer = parseInt($('.container').css('padding-left')) + parseInt($('.container').css('margin-left')) + parseInt($('.col-md-12').css('padding-left')) - 2;
    if ($(window).width() > 1400) {
        $('.aligned-container-margin').width(leftSpaceContainer);
    }

    // Initiating the Parallax affect for History Page
    //new WOW().init();

    //Align to Container Class
    // containerLeftAttr = parseInt($('.container').css('padding-left')) + parseInt($('.container').css('margin-left'));
    //$('.left-align-container').css('left', containerLeftAttr + 'px')
    //Navbar Secondarymenu arrow toggle
    $(".mobile-navbar .dropdown-header .glyphicon.glyphicon-chevron-down").click(function () {
        $(this).toggleClass("open");
    });
    //Redirect to page link upon clicking icon
    $('body').on('click', '.dropdown_icons', function () {
        var headerMenu = $(this).parents('.main-links');
        window.location.href = $(".headerLinks", headerMenu).attr('href');
    });

    //Check if image has a dark background
    if ($("body").find(".bright-background").length > 0) {
        var el = $("#brand-underneath");
        if(el.length){
            var darkImageLink = el.attr('src').replace('header-brand-underneath', 'header-brand-underneath_dark');
            el.attr("src", darkImageLink);
        }
    }
    //Toggle icons for accordion
    //    function toggleIcon(e) {
    //        $(e.target)
    //            .prev('.panel-heading')
    //            .find(".more-less")
    //            .toggleClass('glyphicon-triangle-bottom glyphicon-triangle-top');
    //    }
    //    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    //    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    //Add Active class to the open Accordion
    $('.accordion-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active in show');
    });

    $('.accordion-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('show');
    });

    //custom form add arrow icon on select
    $('#Dropdown-1').parent().after($("<span class='bi bi-caret-down-fill form-control-feedback form-custom-dropdown'>"));

    //function: close another opened Tabs
    //By: Doddy
    //Date: 291123
    $(".accordion-button").on("click", function () {
        let class_accordion = $(this)[0].dataset.bsTarget.substring(2);
        class_accordion = '.content-' + class_accordion;
        let active = document.querySelectorAll(".accordion-collapse");
        for (let j = 0; j < active.length; j++) {
            active[j].classList.remove("show");
        }

        //$('html,body').animate({
        //    scrollTop: $(class_accordion).offset().top
        //}, 'slow');
    });

    //timeline function
    //function: close another opened Tabs
    //By: Doddy
    //Date: 291123
    $("#sidebar").on("click", function () {
        let active = document.querySelectorAll(".li");
        for (let j = 0; j < active.length; j++) {
            active[j].classList.remove("active");
        }
    });

    // .video Play/Stop Button
    if($('.video').length){
        $('.video').each(function(){
            attach_playpause_behaviour($(this));
        });
    }

    if($('video').length){
        var videos = $('video');
        videos.each(function(){
            var vid = $(this);

            if(!vid.hasClass('video')){
                vid.addClass('video');
                vid.wrap('<div class="video-wrapper"></div>');
                vid.after('<div class="playpause"></div>');
                vid.before('<div class="video-poster"></div>');
                vid.removeAttr('controls');
                attach_playpause_behaviour(vid);
            }
        });
    }

    function attach_playpause_behaviour(video_el){

        video_el.parent().on('click',function (e) {
            e.preventDefault();
            e.stopPropagation();

            play_visuals($(this).children('.video'));
            toggle_playpause($(this).children('.video'));
        });

        function toggle_playpause(vid){
            if (vid.get(0).paused) {
                vid.get(0).play();
            } else {
                vid.get(0).pause();
            }
        }

        function play_visuals(vid){
            var playpause = vid.siblings('.playpause');
            var poster = vid.siblings('.video-poster');

            if(!playpause.hasClass('deactived'))playpause.addClass('deactived');
            vid.attr('controls','control');

            if(poster.length)poster.hide();
        }
    }

});

//Apply Same Height Function for Tab Navigations
/*$(document).ready(function () {
    var maxHeight = -1;

    $('.tab-navigation ul li a').each(function () {
        maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });
    $('.tab-navigation ul li a').each(function () {
        $(this).height(maxHeight);
    });
    $('.tab-navigation ul li.active a').height(maxHeight + 15);
    $(".tab-navigation ul li a").on({
        mouseenter: function () {
            var hoveredSize = maxHeight + 35 + "px";
            //            alert(hoveredSize);
            $(this).animate({
                height: hoveredSize
            });
        },
        mouseleave: function () {
            if (!$(this).parent().hasClass("active")) {
                $(this).animate({
                    height: maxHeight + 20
                });
            }
        }
    });
});*/

$(".card-quote").click(function () {

    $(".tab-pane.active.in:visible").each(function (e, v) {
        $(this).removeClass("active");
        $(this).removeClass("in");
		$(this).removeClass("show");
    });

	$(".tab-pane.card-quote-description.active").each(function (e, v) {
        $(this).removeClass("active");
        $(this).removeClass("in");
    });

    $("li.card-quote.active").each(function (e, v) {
        $(this).removeClass("active");
    });
});
// back to top button
$(document).ready(function () {
    //Intialize all the Select Bootstrap's

    //tooltip
    $(".tooltip").css("dislpay", "none");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});


//Navigation Bar

$(".dropdownSection").on({
    mouseenter: function () {
        $($(this).find('img')).attr("src", $(this).find('img').attr('onHover'));
        $($(this).find('.dropdown-header')).css("color", "#FAA434");
    },
    mouseleave: function () {
        if (!$(this).hasClass("active")) {
            $($(this).find('img')).attr("src", $(this).find('img').attr('mouseOut'));
            $($(this).find('.dropdown-header')).css("color", "#2A8A8E");
        }
    }
});

if(isMobileDevice()){
	$(function () {
		$('.dropdown').click(function (a) {
			a.stopPropagation();
			var $ell = $('.dropdown-toggle', this);
			$('.dropdown > .dropdown-toggle').not($ell).slideUp();
			$ell.stop(true, true).slideToggle(400);

		});
		$('.dropdown > .dropdown-toggle').click(function (a) {
			a.stopImmediatePropagation();

		});
	});

	$(function () {
		$('.dropdownSection > .dropdown-menu-title').click(function (e) {
			e.stopPropagation();
			var $el = $('.dropdown-menu', this);
			$('.dropdownSection > .dropdown-menu-title > .dropdown-menu').not($el).slideUp();
			$el.stop(true, true).slideToggle(400);

		});
		$('.dropdownSection > .dropdown-menu-title > .dropdown-menu').click(function (e) {
			e.stopImmediatePropagation();

		});
	});
}

//this is for the white icon in navigation menubar on desktop
$(".dropdown-toggle.about-us").hover(function () {
	var screenWidth = $(window).width();
    const element = document.querySelector(".dropdown-toggle");

    if (this.pathname == '/about-us') {
		if(screenWidth >= 1250 && screenWidth <= 1280 ){
			element.style.setProperty("--check-secondary", "23%");
			$(".bi-caret-down-fill.about-us").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1300 && screenWidth <= 1367){
			element.style.setProperty("--check-secondary", "25%");
			$(".bi-caret-down-fill.about-us").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1400 && screenWidth <= 1441){
			element.style.setProperty("--check-secondary", "23%");
			$(".bi-caret-down-fill.about-us").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1500 && screenWidth <= 1600){
			element.style.setProperty("--check-secondary", "26%");
			$(".bi-caret-down-fill.about-us").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1800 && screenWidth <= 1921){
			element.style.setProperty("--check-secondary", "30%");
			$(".bi-caret-down-fill.about-us").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth > 2000){
			element.style.setProperty("--check-secondary", "35%");
			$(".bi-caret-down-fill.about-us").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
    }
}, function () {
    $(".bi-caret-up-fill").removeClass("bi-caret-up-fill").addClass('bi-caret-down-fill');
	$(".bi-caret-down-fill.top-text").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
});
$(".dropdown-toggle.our-businesses").hover(function () {
	var screenWidth = $(window).width();
    const element = document.querySelector(".dropdown-toggle");

    if (this.pathname == '/our-businesses') {
		if(screenWidth >= 1250 && screenWidth <= 1280 ){
			$(".dropdown-toggle.our-businesses").css("--check-secondary", "36%");
			$(".bi-caret-down-fill.our-businesses").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');	
		}
		if(screenWidth >= 1300 && screenWidth <= 1367){
			$(".dropdown-toggle.our-businesses").css("--check-secondary", "36%");
			$(".bi-caret-down-fill.our-businesses").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');	
		}
		if(screenWidth >= 1400 && screenWidth <= 1441){
			$(".dropdown-toggle.our-businesses").css("--check-secondary", "36%");
			$(".bi-caret-down-fill.our-businesses").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');	
		}
		if(screenWidth >= 1500 && screenWidth <= 1600){
			$(".dropdown-toggle.our-businesses").css("--check-secondary", "36%");
			$(".bi-caret-down-fill.our-businesses").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1800 && screenWidth <= 1921){
			$(".dropdown-toggle.our-businesses").css("--check-secondary", "39%");
			$(".bi-caret-down-fill.our-businesses").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth > 2000){
			$(".dropdown-toggle.our-businesses").css("--check-secondary", "42%");
			$(".bi-caret-down-fill.our-businesses").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
    }
}, function () {
    $(".bi-caret-up-fill").removeClass("bi-caret-up-fill").addClass('bi-caret-down-fill');
	$(".bi-caret-down-fill.top-text").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
});
$(".dropdown-toggle.sustainability").hover(function () {
	var screenWidth = $(window).width();
    const element = document.querySelector(".dropdown-toggle");
    
    if (this.pathname == '/sustainability') {
		if(screenWidth >= 1250 && screenWidth <= 1280 ){
			$(".dropdown-toggle.sustainability").css("--check-secondary", "51%");
			$(".bi-caret-down-fill.sustainability").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1300 && screenWidth <= 1367){
			$(".dropdown-toggle.sustainability").css("--check-secondary", "51%");
			$(".bi-caret-down-fill.sustainability").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1400 && screenWidth <= 1441){
			$(".dropdown-toggle.sustainability").css("--check-secondary", "49%");
			$(".bi-caret-down-fill.sustainability").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1500 && screenWidth <= 1600){
			$(".dropdown-toggle.sustainability").css("--check-secondary", "49%");
			$(".bi-caret-down-fill.sustainability").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1800 && screenWidth <= 1921){
			$(".dropdown-toggle.sustainability").css("--check-secondary", "49%");
			$(".bi-caret-down-fill.sustainability").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth > 2000){
			$(".dropdown-toggle.sustainability").css("--check-secondary", "49%");
			$(".bi-caret-down-fill.sustainability").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
    }
}, function () {
    $(".bi-caret-up-fill").removeClass("bi-caret-up-fill").addClass('bi-caret-down-fill');
	$(".bi-caret-down-fill.top-text").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
});
$(".dropdown-toggle.investors-media").hover(function () {
	var screenWidth = $(window).width();
    const element = document.querySelector(".dropdown-toggle");

    if (this.pathname == '/') {
		if(screenWidth >= 1250 && screenWidth <= 1280 ){
			$(".dropdown-toggle.investors-media").css("--check-secondary", "67%");
			$(".bi-caret-down-fill.investors-media").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1300 && screenWidth <= 1367){
			$(".dropdown-toggle.investors-media").css("--check-secondary", "67%");
			$(".bi-caret-down-fill.investors-media").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1400 && screenWidth <= 1441){
			$(".dropdown-toggle.investors-media").css("--check-secondary", "62%");
			$(".bi-caret-down-fill.investors-media").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1500 && screenWidth <= 1600){
			$(".dropdown-toggle.investors-media").css("--check-secondary", "62%");
			$(".bi-caret-down-fill.investors-media").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth >= 1800 && screenWidth <= 1921){
			$(".dropdown-toggle.investors-media").css("--check-secondary", "60%");
			$(".bi-caret-down-fill.investors-media").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
		if(screenWidth > 2000){
			$(".dropdown-toggle.investors-media").css("--check-secondary", "57%");
			$(".bi-caret-down-fill.investors-media").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
		}
    }
}, function () {
    $(".bi-caret-up-fill").removeClass("bi-caret-up-fill").addClass('bi-caret-down-fill');
	$(".bi-caret-down-fill.top-text").removeClass("bi-caret-down-fill").addClass('bi-caret-up-fill');
});
//end for the white icon in navigation menubar on desktop

//this is for the navigation menu in mobile
$(".bi-caret-down-fill").click(function (a){
	//1st sub menu
	$('.mega-dropdown-menu').on('shown.bs.collapse', function (a) {
		let dropdown_id = a.currentTarget.parentNode.children[0].id;
		let caret_id = a.currentTarget.parentNode.children[0].children[1].id;
		// let fill_icon = $("#" + dropdown_id)[0].children[1].className;
	    // let icon = a.currentTarget.parentNode.getElementsByClassName("dropdown-toggle");
	   // let name_class = a.currentTarget.parentNode.children[0].className;
	   // let icon_1 = a.currentTarget.parentNode.children[0].className == 'dropdown-toggle about-us';
	   
	   // let div_id = document.getElementById('dropdown-about-us');
	   if(dropdown_id == 'dropdown-about-us'){
		   $("#" + dropdown_id).addClass("active");
		   $("#" + caret_id).attr('class','bi bi-caret-up-fill');
		   // $("." + fill_icon).addClass("bi bi-caret-up-fill").remove("bi bi-caret-down-fill");
		   // $("." + fill_icon).attr("bi bi-caret-down-fill","bi bi-caret-up-fill");
	    }
		if(dropdown_id == 'dropdown-our-businesses'){
		   $("#" + dropdown_id).addClass("active");
		   $("#" + caret_id).attr('class','bi bi-caret-up-fill');
	    }
		if(dropdown_id == 'dropdown-sustainability'){
		   $("#" + dropdown_id).addClass("active");
		   $("#" + caret_id).attr('class','bi bi-caret-up-fill');
	    }
		if(dropdown_id == 'dropdown-investors-media'){
		   $("#" + dropdown_id).addClass("active");
		   $("#" + caret_id).attr('class','bi bi-caret-up-fill');
	    }
	});
	$('.mega-dropdown-menu').on('hide.bs.collapse', function (a) {
		let dropdown_id = a.currentTarget.parentNode.children[0].id;
		let caret_id = a.currentTarget.parentNode.children[0].children[1].id;
		if(dropdown_id == 'dropdown-about-us'){
		   $("#" + dropdown_id).removeClass("active");
		   $("#" + caret_id).attr('class','bi bi-caret-down-fill');
	    }
		if(dropdown_id == 'dropdown-our-businesses'){
		   $("#" + dropdown_id).removeClass("active");
		   $("#" + caret_id).attr('class','bi bi-caret-down-fill');
	    }
		if(dropdown_id == 'dropdown-sustainability'){
		   $("#" + dropdown_id).removeClass("active");
		   $("#" + caret_id).attr('class','bi bi-caret-down-fill');
	    }
		if(dropdown_id == 'dropdown-investors-media'){
		   $("#" + dropdown_id).removeClass("active");
		   $("#" + caret_id).attr('class','bi bi-caret-down-fill');
	    }
	   // a.currentTarget.parentNode.getElementsByClassName("dropdown-toggle")[0].remove("active");
	});
	// end 1st sub menu
	
});

// 2nd sub menu
function second_node(data){
	// console.log(data);
	let name_class = data.className;
	let caret_id = data.id;
	if(name_class == "bi bi-caret-down-fill"){
		$("#" + caret_id).attr('class','bi bi-caret-down-fill');
	}
	else{
		$("#" + caret_id).attr('class','bi bi-caret-up-fill');
	}
}
// end 2nd sub menu

$('.bi-caret-down-fill').on('shown.bs.collapse', function () {
   alert("Opened");
});

$('.bi-caret-down-fill').on('hidden.bs.collapse', function () {
   alert("Closed");
});
//end for the navigation menu in mobile


if ($(".dropdownSection").hasClass("active")) {
    $(".dropdownSection.active").trigger('mouseenter');
}

function nav_affix(){
    if(!isMobileDevice()){
        //$('.navbar-laptop').affix({
        //    offset: {
        //        top: $('.container-fluid').height()
        //    }
        //});
    }
}

$(".searchIconHeader").on("click", function () {
    var $this = $(this);
    var input = $this.find('input');
    if($this.hasClass('active')){
        $this.removeClass("active");
        input.val('').blur();
        return;
    }
    $this.addClass("active");
});


// Detect Mobile Devices

function isMobileDevice() {

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true
    if(window.innerWidth < 1024) isMobile = true;
    return isMobile;
}

//Added by: Doddy
//Function: handle onchange on history and milestone
//Date: 281123
function scroll_select() {
    var selected_value = document.getElementById("select_mobile").value;
    $(window).scrollTop($(selected_value).offset().top);
}

var isMobile = isMobileDevice();
if (isMobile) {
    $(".navbar-toggle.collapsed.left").on("click", function () {
        //document.getElementById("menu").classList.toggle("show");

        if ($('#menu').attr("onclick") == undefined) {
            if ($('.navbar-toggle.collapsed.left').attr("onclick") != undefined) {
                //document.getElementById("menu").classList.toggle("show");
            }
            else {
                if ($('#menu').hasClass('show') == false) {
                    $('#menu').addClass("show");
                }
                else {
                    $('#menu').removeClass("show");
                }
            }
        }  
    });
}

$(document).ready(function () {
    var isMobile = isMobileDevice();
    if (isMobile) {
        $('#tablist_section').attr("class", "nav nav-tabs-section nav-justified");
        $(".nav-link").on("click", function (e) {
            $('#tablist_section li.active').removeClass('active');
        })

        $('#row_footer').attr("class", "row");
		$('.navbar > .container').css('display','inline');

        $("#mobileSearchButton span").attr('class', 'bi bi-search');
        $("#mobileSearchButton").on("click", function () {
            myFunction2();
            if ($('#search22').css('display') == 'none') {
                $('#search22').css('display', 'block');
            }
            else {
                $('#search22').css('display', 'none');
            }
        });
    }

    //set row_desktop on header menu
    $(".header-bar.hidden-for-mobile .container-fluid .row").addClass("row_desktop");
    $(".header-bar.hidden-for-mobile .navbar.navbar-default.navbar-laptop").addClass("navbar-expand-lg navbar-dark");
    
    $("ul li a").on("click", function (e) {
        if ($(this).attr("aria-selected") === "true") {
            $(this).parent().addClass('active').siblings().removeClass('active');
        } else {
            $(this).parent().removeClass('active')

        }
    });

    $('.card-quote').click(function () {
        let card_id = this.id;
        //console.log(this.id);
        if (this.classList.contains('card-quote')) {
            // $('.card-quote').toggleClass('active').siblings().removeClass('active');
			$(".tab-pane.card-quote-description.active").each(function (e, v) {
				$(this).removeClass("active");
				$(this).removeClass("in");
			});

            $('#' + card_id).addClass('active');
        }
        // $('.card-quote-description').toggleClass('active').siblings().removeClass('show').removeClass('active');
        $('#content-' + card_id).addClass('active in show');
    });
    
    $(".form-control").change(function () {

        //        var target = this.value;
        //        $('html,body').animate({
        //            scrollTop: target.offset().top - 50
        //        }, 1000);

        $(this.value).tab('show')

        //        $('body').scrollspy({ target: '#sec1' })
        var target = $(this.value);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            console.log(target);
            $('html,body').animate({
                scrollTop: target.offset().top - ($('.mobile-navbar').height() + 30)
            }, 1000);
            return false;
        }

    });

})