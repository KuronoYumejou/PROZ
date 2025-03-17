
function showmenu() {
    var x = document.getElementById("abas_mobile");
    var elStyle = window.getComputedStyle(element);
    var topValue = elStyle.getPropertyValue("top").replace("px", "");
    if (x.style.display === "block") {
        x.style.display = "none";
    }  
    else
    {
        x.style.display = "block";
        element.style.top = (250 - 20) + "px";
    }

}

updateContent()