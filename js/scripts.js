$(document).ready(function () {
    $(".pic1").click(function () {
        $(".pic1").hide(100);
        $(".p1").show(100);
    })
    $(".p1").click(function () {
        $(".p1").hide(100);
        $(".pic1").show(100);
    });
});
$(document).ready(function () {
    $(".pic2").click(function () {
        $(".pic2").hide(100);
        $(".p2").show(100);
    })
    $(".p2").click(function () {
        $(".p2").hide(100);

        $(".pic2").show(100);
    });
});
$(document).ready(function () {
    $(".pic3").click(function () {
        $(".pic3").hide(100);
        $(".p3").toggle(100);
        $(".p3").show(100);
    })
    $(".p3").click(function () {
        $(".p3").hide(100);
        $(".pic3").show(100);
    });
});
$(document).ready(function () {
    $('.text').hover(function () {
            $(this).animate({
                opacity: '5'
            });
        },
        function () {
            $(this).animate({
                opacity: '0'
            });
        })
});
$(document).ready(function () {
    $('#submission').submit(function (event) {
        var display1 = $('input:first').val();
        var display2 = $('input#mail').val();
        if (display1 && display2 != '') {
            alert('Thank you ' + display1 + ' your subscription is well received');
        } else {
            alert('Invalid input');
        }
        event.preventDefault();
    })
});