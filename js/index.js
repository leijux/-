
window.onload = () => {
    let wx = document.getElementById("wx");
    let wxrwm = document.getElementById("wxrwm");
    wx.onmouseover = () => {
        wxrwm.style = "display: block;position: absolute;";
    };
    wx.onmouseout = () => {
        wxrwm.style = "display: none;position: absolute;";
    };
};