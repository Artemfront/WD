$(function () {

    // Smooth scroll

    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll')
        var blockOffset = $(blockId).offset().top;

        
        
        $('html, body').animate({
            scrollTop: blockOffset - 100
        }, 500);

    });

});
