/* Carousel */
$('.carousel .carousel-item').each(function() {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


$('.carousel-responsive-col').on("click", function(){

    // Set preview to visible
    $('#overlay-home-gallery').css('width','100%');
    
    // Get item details
    var previewTitle = $(this).children('img').attr('alt');
    var previewImage = $(this).children('img').attr('src');
    
    // Populate preview section with item details
    $('#preview-title-home-gallery').text(previewTitle);
    $('#preview-img-home-gallery').attr('src',previewImage);

    // Show preview section
});

$('.overlay-close-button').on("click", function(){
    $('#overlay-home-gallery').css('width','0%');
});

$('#mobile-dropdown-link').on("click", function(){
    $('#overlay-nav').css('width','100%');
});

$('.overlay-close-button').on("click", function(){
    $('#overlay-nav').css('width','0%');
});