$('#owl-carousel-1').owlCarousel({
    loop:true,
    margin:10,
    // nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        }
    }
})

$('#owl-carousel-2').owlCarousel({
    loop:true,
    margin:10,
    stagePadding:5,
    // nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        768 :{
            items:2
        },
        1024 :{
            items:3
        }
    }
})

AOS.init();