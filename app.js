window.addEventListener("load", function() {
    var cri = document.getElementById("cri");
    cri.addEventListener("click", function() {
        
    });
    var superCri = document.getElementById("super");
    superCri.addEventListener("click", function() {
        var color = document.getElementById("input").value;
        if(color == "rojo"){
            document.getElementById("color-1").style.border = "5px solid black";
            document.getElementById("color-2").style.border = "0px";
            document.getElementById("color-3").style.border = "0px";
        }
        else if(color == "azul"){
            document.getElementById("color-1").style.border = "0px";
            document.getElementById("color-2").style.border = "5px solid black";
            document.getElementById("color-3").style.border = "0px";
        }
        else if(color == "verde"){
            document.getElementById("color-1").style.border = "0px";
            document.getElementById("color-2").style.border = "0px";
            document.getElementById("color-3").style.border = "5px solid black";
        }
    });
});