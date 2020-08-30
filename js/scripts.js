$(document).ready(function () {
    $(".1").hover(function () {
        alert("work1");
    });
    $(".2").hover(function () {
        alert("work2");
    });
    $(".3").hover(function () {
        alert("work3");
    });
    $(".4").hover(function () {
        alert("work4");
    });
    $(".5").hover(function () {
        alert("work5");
    });
    $(".6").hover(function () {
        alert("work6");
    });
    $(".7").hover(function () {
        alert("work7");
    });
    $(".8").hover(function () {
        alert("work8");
    });
    $(".display-11").click(function () {
        alert("Our design practice offers a full range of services including brand strategy,interaction and visual design and user experience testing.Throughout your project,our designers create and implement visual design and workflows,solicit user feedback and work with you to make sure what gets built is what is needed.");
    });
    $(".display-13").click(function () {
        alert("All engineers are fluent in the latest enterprise,mobile and web development technologies.They collaborate with your team to write and improve code a daily basis,using proven practices such as self driven development and pair programming.");
    });
    $(".display-14").click(function () {
        alert("Planning and development is interative because we are constantly coding and testing ,the products we build are always ready to go live.The iterative process allows for changes as business requirements evolve.");
    });
});
$(document).ready(function () {
    $(".pic1").click(function () {
        $(".pic1").hide(1200);
        $(".p1").toggle(1200);
        $(".p1").show(1200);
    })
    $(".pic1").click(function () {
        $(".p1").hide(1200);
        $(".pic1").toggle(1200);
        $(".pic1").show(1200);
    });
});
$(document).ready(function () {
    $(".pic2").click(function () {
        $(".pic2").hide(1200);
        $(".p2").toggle(1200);
        $(".p2").show(1200);
    })
    $(".p2").click(function () {
        $(".p2").hide(1200);
        $(".pic2").toggle(1200);
        $(".pic2").show(1200);
    });
});
$(document).ready(function () {
    $(".pic3").click(function () {
        $(".pic3").hide(1200);
        $(".p3").toggle(1200);
        $(".p3").show(1200);
    })
    $(".p3").click(function () {
        $(".p3").hide(1200);
        $(".pic3").toggle(1200);
        $(".pic3").show(1200);
    });
});
$(document).ready(function () {
    $('.text').hover(function () {
            $(this).animate({
                opacity: '1'
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