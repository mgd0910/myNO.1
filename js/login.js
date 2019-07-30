$(function () {
    $(".help_wrap").mouseover(function () {
        $(".help_ul").css("display", "block");
    });

    $(".help_wrap").mouseout(function () {
        $(".help_ul").css("display", "none");
    });

    $(".help_ul li a").mouseover(function () {
        $(this).css("color", "#ff4040");
    });

    $(".help_ul li a").mouseout(function () {
        $(this).css("color", "#000");
    });

    $("#simplefooter a").mouseover(function () {
        $(this).css("color", "#ff4040");
    });

    $("#simplefooter a").mouseout(function () {
        $(this).css("color", "#000");
    });
})



$(function () {
    let isDefualtAdd = 0; //0不选中，1选中
    $('input:radio').click(function () {
        var $radio = $(this);
        if ($radio.data('waschecked') == true) {
            $radio.prop('checked', false);
            $radio.data('waschecked', false);
            isDefualtAdd = 0;
            $("#agreement_tips").css({
                "display": "none"
            });
        } else {
            $radio.prop('checked', true);
            $radio.data('waschecked', true);
            isDefualtAdd = 1;
            $("#agreement_tips").css({
                "display": "block"
            });
        }
    });
})


$(".unfold").toggle(
    function () {
        $(".more_landing").css({"display":"block"});
    },
    function () {
        $(".more_landing").css({"display":"none"});
    }
);

$("#pwd").focus(function () { 
    $(this).css({"color":"#000","font-size":"18px"});
});

