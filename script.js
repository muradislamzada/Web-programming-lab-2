window.onload = function () {
    var bolmeler = document.getElementsByClassName("bolme");
    for (var i = 0; i < bolmeler.length; i++) {
        var bolme = bolmeler[i];
        var h2 = bolme.getElementsByTagName("h2")[0];
        var icerik = bolme.getElementsByClassName("icerik")[0];
        var btn = bolme.getElementsByClassName("elave-et")[0];
        var input = bolme.getElementsByTagName("input")[0];
        h2.onclick = (function(content) {
            return function () {
                if (content.style.display === "none") {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            };
        })(icerik);
        btn.onclick = (function(inputField, contentArea) {
            return function () {
                var melumat = inputField.value.trim();
                if (melumat !== "") {
                    var ul = contentArea.getElementsByTagName("ul")[0];
                    var p = contentArea.getElementsByTagName("p")[0];
                    if (ul) {
                        var yeniLi = document.createElement("li");
                        yeniLi.innerHTML = melumat;
                        ul.appendChild(yeniLi);
                    } else if (p) {
                        p.innerHTML += " " + melumat;
                    } else {
                        var yeniP = document.createElement("p");
                        yeniP.innerHTML = melumat;
                        contentArea.appendChild(yeniP);
                    }
                    inputField.value = "";
                }
            };
        })(input, icerik);
    }
};