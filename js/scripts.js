$(function() {
    // see note below for why these are commented out.
    //$("li.autoreadlevel.even.last ul").addClass('absolute');
    //$("li.autoreadlevel.odd ul").addClass('absolute');
    //$("li.autoreadlevel.even.last ul").addClass('absolute');
    // Autoread menu lists hidden, show and hide on user clicks:
    $("ul.linkslist").hide();
    $("#links").on({
        click: function() {
            $("ul.linkslist").slideToggle(300);
        }
    });
    $("li.autoreadlevel.even.first ul").hide();
    $("li.autoreadlevel.even.first a").on({
        click: function() {
            //event.preventDefault(); <-- don't need this if the position:fixed feature
            // is disabled, since the user is at the top of the screen anyways when they click
            // on links
            $("li.autoreadlevel.even.first ul").slideToggle(300);
             $("li.autoreadlevel.odd ul").fadeOut(300);
             $("li.autoreadlevel.even.last ul").fadeOut(300);
        }
    })
    $("li.autoreadlevel.odd ul").hide();
    $("li.autoreadlevel.odd a").on({
        click: function() {
            $("li.autoreadlevel.odd ul").slideToggle(300);
            $("li.autoreadlevel.even.first ul").fadeOut(300);
            $("li.autoreadlevel.even.last ul").fadeOut(300);
        }
    })
    $("li.autoreadlevel.even.last ul").hide();
    $("li.autoreadlevel.even.last a").on({
        click: function() {
            $("li.autoreadlevel.even.last ul").slideToggle(300);
            $("li.autoreadlevel.even.first ul").fadeOut(300);
            $("li.autoreadlevel.odd ul").fadeOut(300);
        }
    })
    // trying to keep the autoread levels at position: fixed after user scrolls, but doesn't
    // work on mobile safari due to weird window height() problems, apparently. so it's not
    // fixed to the top of the screen for now. The switch between absolute and fixed positioning
    // for the autoread lists themselves is also disabled for now because it's not needed if the
    // links don't need to stay on top of the screen as the user scrolls.
    // $(window).scroll(function() {
    //     if (($(this)).scrollTop() > (($('#logo')).height() + ($('#links')).height()) + 15) {
    //         $("div#autoread").addClass('fixed-to-top');
    //          $("li.autoreadlevel.even.last ul").addClass('fixed-to-nav');
    //          $("li.autoreadlevel.even.first ul").addClass('fixed-to-nav');
    //          $("li.autoreadlevel.odd ul").addClass('fixed-to-nav');
    //     } else {
    //         $("div#autoread").removeClass('fixed-to-top');
    //         $("li.autoreadlevel.even.last ul").removeClass('fixed-to-nav');
    //         $("li.autoreadlevel.even.last ul").addClass('absolute');
    //         $("li.autoreadlevel.even.first ul").removeClass('fixed-to-nav');
    //         $("li.autoreadlevel.even.first ul").addClass('absolute');
    //         $("li.autoreadlevel.odd ul").removeClass('fixed-to-nav');
    //         $("li.autoreadlevel.odd ul").addClass('absolute');
    //     }
    // })
    // Unread count:
    var count_lvl1 = $("li.autoreadlevel.even.first ul li").length;
    $("#set_autoreadlev1").append('<span class="unread-count">' + ' (' + count_lvl1 + ') ' + '</span>');
    var count_lvl2 = $("li.autoreadlevel.odd ul li").length;
    $("#set_autoreadlev2").append('<span class="unread-count">' + ' (' + count_lvl2 + ') ' + '</span>');
    var count_lvl3 = $("li.autoreadlevel.even.last ul li").length;
    $("#set_autoreadlev3").append('<span class="unread-count">' + ' (' + count_lvl3 + ') ' + '</span>');
});