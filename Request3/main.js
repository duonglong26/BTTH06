setInterval(handleRealTime = () => {
    let date = new Date();
    let hh = String(date.getHours());
    let mm = String(date.getMinutes());
    let ss = String(date.getSeconds());
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    let time = hh + mm + ss;
    for (var i = 0; i < time.length; i++) {
        document.getElementById("banner" + (i + 1)).src = "BTTH_icons/0" + time[i] + ".gif";
    }
}, 1000);