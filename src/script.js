document.body.height = window.innerHeight;
$(".fullscreen").css('height', window.innerHeight);

// Text effects that I want to work on mobile
let currentlyShowing = false,
    text = $("#title-text"),
    textArray = text.html().split("");

text.html("") // Erases current html


for (i = 0; i < textArray.length; i++) {
    $(('<span id="letter' + i + '" class="text-shadow">' + textArray[i] + '</span>')).hide().appendTo('#text-container').fadeIn(150 * i)

}

document.addEventListener('scroll', () => {
    document.body.height = window.innerHeight;
    $(".fullscreen").css('height', window.innerHeight);
})
// Functions to show/hide sections

function hide(fullHide) {
    if (currentlyShowing) {
        currentlyShowing.css('bottom', '-100%');
        currentlyHiding = currentlyShowing;
        setTimeout(() => {
            currentlyHiding.addClass('offscreen');
        }, 500)

    }
    if (fullHide = 1) {
        currentlyShowing = false;
    }
}

function show(sectionId) {
    currentlyShowing = $(sectionId);

    currentlyShowing.css('bottom', '0');
    currentlyShowing.removeClass('offscreen');
}

$("#title-bg").click(() => {
    let fullHide = 1;
    hide(fullHide);
})

$("#skills-button").click(() => {
    if ($("#skills-section").hasClass('offscreen')) {
        hide();
        show("#skills-section")
    }
})

$("#contact-button").click(() => {
    if ($("#contact-section").hasClass('offscreen')) {
        hide();
        show("#contact-section")
    }
})

$("#about-button").click(() => {

    if ($("#about-section").hasClass('offscreen')) {
        hide();

        currentlyShowing = $("#about-section");

        currentlyShowing.css({ 'bottom': '50%', 'transform': 'translateY(50%)' });
        currentlyShowing.removeClass('offscreen');
    }

})
