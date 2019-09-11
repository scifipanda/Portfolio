function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobile()) {
    let mouse = { x: 0, y: 0 },
    textLetters,
    letterArray = [],
    spread = 0.01,
    position,
    textSize,
    centerPosX,
    centerPosY,
    textPos;


// Function to find position of text element with id of #test
function calcTextPos() {
    textLetters = $(".text-shadow")

    for (let i = 0; i < textArray.length; i++) {
        let temp = '#letter' + i;
        let letter = $(temp);

        position = letter.offset();
        textSize = { w: letter.width(), h: letter.height() };
        centerPosX = position.left + (textSize.w / 2);
        centerPosY = position.top + (textSize.h / 2);
        textPos = { x: centerPosX, y: centerPosY };


        letterArray.push(textPos)
    }
}
    // Calls text position function on load and on page resize and scroll
    calcTextPos()

    $(window).resize(function () { letterArray = []; calcTextPos() })

    // function to find position of mouse and calculate the shadow distance
    $(window).mousemove(function (event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;

        for (let i = 0; i < letterArray.length; i++) {
            let temp = '#letter' + i;
            let letter = $(temp);

            let distanceFrom = distance(letterArray[i].x, letterArray[i].y, mouse.x, mouse.y);

            let shadow = {
                x: -distanceFrom.x * spread + "px ",
                y: -distanceFrom.y * spread + "px ",
                df: distanceFrom.df * (spread / 1.75) + "px "
            };

            let textShadow = shadow.x + shadow.y + shadow.df + " #032535";
            let z = Math.floor(distanceFrom.df);
            letter.css({ "text-shadow": textShadow, "z-index": z });

        }
    })

    // function to find distance between mouse and text
    function distance(x1, y1, x2, y2) {
        var xDist = x2 - x1;
        var yDist = y2 - y1;

        return {
            x: xDist,
            y: yDist,
            df: Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
        };
    }

    // Just some more text interaction stuff. Might remove idk
    $(document).on("mouseenter", "span", function (event) {
        let $this = $(this)
        $this.css('color', '#ff0000')
    })

    $(document).on("mouseout", "span", function (event) {
        let $this = $(this)
        setTimeout(function () {
            $this.css('color', '#ff5858')
        }, 250);
    })


}

