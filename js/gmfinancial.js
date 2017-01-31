
// wrap the secondary nav links in a span tag for
// full width border styling

jQuery('nav.secondary a').wrap('<span></span>');

// ad a span to the video thumbnails to hold the
// play button

jQuery('.video').prepend('<span></span>');

// if the window resizes and the secondary nav
// menu is still closed, open it

jQuery(window).on('load', function () {
    if (window.innerWidth < 991) {
        $('#secondary').collapse('hide');
    }
});

// if the window resizes and the secondary nav
// menu is still closed, open it

jQuery(window).on('resize', function () {
    if (window.innerWidth > 991) {
        $('#secondary').collapse('show');
    }
    else {
        $('#secondary').collapse('hide');
    }
});


// toggle menu slide horizontally
// instead if the verticle default

jQuery(function ($) {
    jQuery('.navbar-toggle').click(function () {
        jQuery('.navbar-collapse').toggleClass('slide-in');
        jQuery('.navbar-toggle').toggleClass('slide-out');
    });
});

// create a search element that is only shown when
// the mobile menu is visible

jQuery('<a/>', {
    class: "js search-link",
    href: jQuery('#navbar .search-link').attr('href'),
    title: 'Search',
    text: 'Search'
}).appendTo('body');

// affix the secondary nav to the top on scroll past

jQuery(function ($) {
    if (window.innerWidth < 991) {
        $('.secondary').affix({
            offset: {
                top: $('#header').outerHeight(true)
            }
        });
    }
});