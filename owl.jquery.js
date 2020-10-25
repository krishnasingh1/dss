$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoWidth:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1500:{
            items:4
        }
    }
})


$("#owl-example").owlCarousel({ 
    items:10,   
    itemsDesktop : [1199,10],
    itemsDesktopSmall : [980,9],
    itemsTablet: [768,5],
    itemsTabletSmall: false,
    itemsMobile : [479,4]
})
