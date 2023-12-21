function writeCookie(name, value, days) {
    var expires;

    //Seta o número de dias para expiração do cookie
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }


    if (value != "" && value != null && value != "null") {
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}

function readCookie(name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (let index = 0; index < cookies.length; index++) {
        var c = cookies[index];

        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }

        if (c.indexOf(searchName) == 0) {
            return c.substring(searchName.length, c.length);
        }
        return null;
    }


}

function eraseCookie(name) {
    writeCookie(name, "", -1);
}