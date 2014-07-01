//浏览器判断
if (!document.getSelection) {
    window.location = "/oldBrowser.html";
}

//判断浏览器版本
var Sys = {};
var ua = navigator.userAgent.toLowerCase();
if (window.ActiveXObject) {
    Sys.ie = ua.match(/msie ([\d.]+)/)[1]
    if (Sys.ie == "6.0" || Sys.ie == "7.0" || Sys.ie == "8.0" || Sys.ie == "9.0") {
        window.location = "/oldBrowser.html";
    }
}


var isposting = false;
function validateForm() {
    return $("#form1").validate({
        rules: {
            //username: { required: true, maxlength: 10 },
            //password: { required: true, maxlength: 10 }
        },
        messages: {
            //username: { required: "*", maxlength: jQuery.format("不能超过{0}个字符") },
            //password: { required: "*", maxlength: jQuery.format("不能超过{0}个字符") }
        }
    }).form();
};

var successfn = function (data) {
    var logininfo = $("#loginInfor");
    if (data == "Success") {
        window.location.replace("/Admin/Console/main");
    }
    else if (data.length == 0) {
        logininfo.css({ "display": "block", "opacity": "1" });
        logininfo.animate({ opacity: 0 }, 2000);
        logininfo.html("链接超时");
    }
    else {                    
        var m = document.getElementById("loginArea");
        function SKclass(obj, Rate, speed) {
            var oL = obj.offsetLeft + 190;
            var oT = obj.offsetTop + 100;
            this.stop = null;
            this.oTime = null;
            var om = this;
            this.start = function () {
                if (parseInt(obj.style.left) == oL - 2) {
                    obj.style.top = oT + 2 + "px";
                    setTimeout(function () { obj.style.left = oL + 2 + "px" }, Rate)
                }
                else {
                    obj.style.top = oT - 2 + "px";
                    setTimeout(function () { obj.style.left = oL - 2 + "px" }, Rate);
                }
                this.oTime = setTimeout(function () { om.start(); }, speed);
            }
            this.stop = function () {
                clearTimeout(this.oTime);
            }
        }
        var nn = new SKclass(m, 20, 110);

        nn.start();
        setTimeout(function () { nn.stop()}, 400);
        logininfo.css({ "display": "block", "opacity": "1" });
        logininfo.animate({ opacity: 0 }, 2000);
        logininfo.html("用户名密码错误");
    }
}
var errorfn = function (data) {
    var logininfo = $("#loginInfor");
    logininfo.css({ "display": "block", "opacity": "1" });
    logininfo.animate({ opacity: 0 }, 2000);
    logininfo.html("貌似服务器出问题了");

}
var beforesend = function () {
    isposting = true;
    var submitbutton = $("#loginButton");
    var submitInterval = 6;

    var timer = setInterval(function () {
        submitInterval--;
        $("#loginButton").text("登录(" + submitInterval + ")")
        if (submitInterval == 0) {
            $("#loginButton").text("登录");
            isposting = false;
            clearInterval(timer);
        }
    }, 1000);
}
var complete = function () {
}

function doSubmit() {
    if (!isposting) {
        if (validateForm()) {
            if (simple.validator.validate() == true) {
                var usernama = $("#usernameInput").val();
                var password = $("#passwordInput").val();
                var data = { 'userName': usernama, 'password': password };
                core.AJAX(data, "/Admin/Console/Login", beforesend, successfn, errorfn, complete);
            }
        }
    };
}

