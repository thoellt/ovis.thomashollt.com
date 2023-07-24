$(document).ready(init);

$(window).resize(sizeContent);

$(window).scroll(scroller);

function init() {
	
	sizeContent();

	$("#nav-home").addClass("nav-active-indicator");
	//scroller();

	$('.bxslider').bxSlider();
	
    $('a.lightbox').nivoLightbox({
	    effect: 'fade',		// The effect to use when showing the lightbox
	    theme: 'default',	// The lightbox theme to use
	    afterShowLightbox: function(lightbox){sizeLightbox()},    // Callback after the lightbox is shown
	    errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
	});
}

function sizeContent() {
	
	var w = $('.main-wrapper').width() - 65;
	if( $( window ).width() > 641 ) w -= 35;
	$('.slide-img').width(w);
	
	sizeLightbox();
}

function sizeLightbox() {
	
	var w = $( window ).width();
	if( w > 1280 ) w = 1280;
	
	var h = w / 16 * 9;

	$('.nivo-lightbox-vimeo').width(w + 'px');
	$('.nivo-lightbox-vimeo').height(h + 'px');
}

$(function(){
	var navHeight = $(".nav-background").height();
    $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
				if(true) targetOffset -= navHeight;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});

function scroller() {
	
	var scrollPosition = $(window).scrollTop() + $(window).height() * 0.5;
	
	var p0 = 0;
	var p1 = $("#ovis").offset().top;
	var p2 = $("#publications").offset().top;
	var p3 = $("#get").offset().top;
	
	console.log(scrollPosition);
	console.log(p1);
	
	if( scrollPosition > p3 )
	{
		$("#nav-home").removeClass("nav-active-indicator");
		$("#nav-ovis").removeClass("nav-active-indicator");
		$("#nav-publications").removeClass("nav-active-indicator");
		$("#nav-download").addClass("nav-active-indicator");
		$("#nav-about").removeClass("nav-active-indicator");

		console.log("p3");
	}
	else if( scrollPosition > p2 )
	{
		$("#nav-home").removeClass("nav-active-indicator");
		$("#nav-ovis").removeClass("nav-active-indicator");
		$("#nav-publications").addClass("nav-active-indicator");
		$("#nav-download").removeClass("nav-active-indicator");
		$("#nav-about").removeClass("nav-active-indicator");

		console.log("p2");
	}
	else if( scrollPosition > p1 )
	{
		$("#nav-home").removeClass("nav-active-indicator");
		$("#nav-ovis").addClass("nav-active-indicator");
		$("#nav-publications").removeClass("nav-active-indicator");
		$("#nav-download").removeClass("nav-active-indicator");
		$("#nav-about").removeClass("nav-active-indicator");

		console.log("p1");
	}
	else
	{
		$("#nav-home").addClass("nav-active-indicator");
		$("#nav-ovis").removeClass("nav-active-indicator");
		$("#nav-publications").removeClass("nav-active-indicator");
		$("#nav-download").removeClass("nav-active-indicator");
		$("#nav-about").removeClass("nav-active-indicator");

		console.log("p0");
	}
}