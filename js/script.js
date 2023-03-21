/*global $, alert, console*/
$(function () {
    "use strict";
    var active = $('.navbar-inverse .navbar-nav li'),
        content = $('header .header-content');
    active.click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
    content.each(function () {
        content.css("paddingTop", ($(window).height() - content.height()) / 2);
    });
    $(window).on('scroll', function () {
        var scrolling = $(window).scrollTop();
        if (scrolling >= 2) {
            $('.navbar').css("backgroundColor", "#00aeda");
            $('.navbar').css("paddingTop", "7px");
            $('.navbar').css("paddingTop", "7px");
        } else {
            $('.navbar').css("backgroundColor", "transparent");
            $('.navbar').css("paddingTop", "20px");
        }
    });
    $('.sub-gym .gym-content').each(function () {
        $('.sub-gym .gym-content').css("paddingTop", ($('.sub-gym').height() - $('.sub-gym .gym-content').height()) / 2);
    });
    $('.newsletter .newsletter-content').each(function () {
        $('.newsletter .newsletter-content').css("paddingTop", ($('.newsletter').height() - $('.newsletter .newsletter-content').height()) / 2);
    });

    $(window).on('scroll', function () {
        var scrolling = $(window).scrollTop();
        if (scrolling >= 850) {
            $('.up').fadeIn(500);
        } else {
            $('.up').fadeOut(500);
        }
    });
    $('.up').on('click', function () {
        $('body, html').animate({
            scrollTop: 0
        }, 1500);
        return false;
    });


});
