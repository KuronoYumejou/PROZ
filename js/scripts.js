
function showmenu() {
    var x = document.getElementById("abas_mobile");
    const movetexto = document.getElementsByClassName("chamada_textos");


    if (x.style.display === "block") {
        x.style.display = "none";
    }  
    else
    {
        x.style.display = "block";
    }
    if (movetexto.length > 0)
    {
         if(x.style.display ==="block")
        {
             movetexto[0].style.top = '340px';
        }
        else
        {
            movetexto[0].style.top = '' ;
        }
    }

}

updateContent()

