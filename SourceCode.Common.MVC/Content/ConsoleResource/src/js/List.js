$(".remove").live("click", function (e) {
    if (confirm("确认该操作吗？"))
    {
        var thisE = $(e.currentTarget).parent();
        var ID = $(e.currentTarget).children("a").attr("data");
        var url = $(e.currentTarget).children("a").attr("operatingtype");
        var fadeout = $(e.currentTarget).children("a").attr("fadeout");
        var action = url == undefined ? "" : url;
    
        var data = { 'id': ID };
        console.log("clicking!" + ID + ";url:" + action);

        var beforesend = function () {
            console.log("before sending!");
        };
        var alerttips = function (data) {
            $("#tips").css({ "display": "block", "opacity": "1" });
            $("#tips").animate({ opacity: 0 });
            $("#tips").html(data);
        };
        var success = function (e) {
            if (e == "success") {
                if (fadeout=="false") {
                    console.log(fadeout);
                } else {
                    console.log(fadeout);
                    thisE.fadeOut();
                }
            } else {
                alerttips("未知错误！");
            }
        };
        AJAX(data, action, beforesend, success);
    }
});

AJAX = function (data, url, beforesendfn, onsuccessfn, onerrorfn, oncomplete) {
    if (url == undefined || url == "") {
        $.ajax({
            type: "POST",
            cache: false,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: beforesendfn,
            success: onsuccessfn,
            error: onerrorfn,
            complete: oncomplete
        });
    } else {
        $.ajax({
            type: "POST",
            url: url,
            cache: false,
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: beforesendfn,
            success: onsuccessfn,
            error: onerrorfn,
            complete: oncomplete
        });
    }
};
