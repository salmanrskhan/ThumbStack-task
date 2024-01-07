
function HideAside() {
    let clsBtn = document.getElementById('clsBtn');
    let asideId = document.getElementById('asideId');
    asideId.style.display = 'none'
}

function toggleHide() {
    let btn = document.getElementById('btn');
    let asideId = document.getElementById('asideId');

    if (asideId.style.display != 'block') {
        asideId.style.display = 'block'
    }
    else {
        asideId.style.display = 'none'
    }
}


$(".review_slider_area").owlCarousel({
    autoplay: false,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    margin: 30,
    dots: true,
    responsive: {
        120: {
            items: 1
        },
        320: {
            items: 1
        },
        767: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});





// Scroller to to btn
let scrlBtn = document.getElementById("scrlTpBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrlTpBtn.style.display = "block";
    }
    else {
        scrlTpBtn.style.display = "none";
    }
}

function topFun() {
    document.body.scrollTo = 0;
    document.documentElement.scrollTop = 0;
}