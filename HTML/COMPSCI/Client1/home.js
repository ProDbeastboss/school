colors = [0,0,0,0,0];
namevar = "";
showbuttonborder = 0;
aboutmep = "";
resumel = ["", ""];
hobbiel = ["", ""];
comservel = ["", ""];

function load(screencontentvalue) {
    qsp();
    if (screencontentvalue == 0) {
        document.getElementById("bod").style.backgroundColor = ("#" + colors[0]);
        document.getElementById("bod").style.color = colors[4];
        document.getElementById("main").style.backgroundColor = ("#" + colors[1]);
        document.getElementById("main").style.height = "100%";
        document.getElementById("headingblock").textContent = (namevar + "'s Website");
        document.getElementById("headingblock").style.backgroundColor = ("#" + colors[2]);
        document.getElementById("aboutme").style.display = "none";
        document.getElementById("resume").style.display = "none";
        document.getElementById("resumeli").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("hobbieli").style.display = "none";
        document.getElementById("comserve").style.display = "none";
        document.getElementById("comserveli").style.display = "none";
        document.getElementById("home").style.display = "block";
        i = 0;
        arrayofli = document.getElementsById("menuli");
        while (i < arrayofli.length) {
            if (showbuttonborder == 1) {
                arrayofli[i].style.border = "3px solid #" + colors[3];
            }
            i += 1;
        }
        
    } 
    if (screencontentvalue == 1) {
        document.getElementById("bod").style.backgroundColor = ("#" + colors[0]);
        document.getElementById("bod").style.color = colors[4];
        document.getElementById("main").style.backgroundColor = ("#" + colors[1]);
        document.getElementById("main").style.height = "90%"
        document.getElementById("headingblock").textContent = ("About Me");
        document.getElementById("headingblock").style.backgroundColor = ("#" + colors[2]);
        document.getElementById("aboutme").textContent = aboutmep;
        document.getElementById("aboutme").style.display = "block";
        document.getElementById("resume").style.display = "none";
        document.getElementById("resumeli").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("hobbieli").style.display = "none";
        document.getElementById("comserve").style.display = "none";
        document.getElementById("comserveli").style.display = "none";
        document.getElementById("home").style.display = "none";
        i = 0;
        arrayofli = document.getElementsById("menuli");
        while (i < arrayofli.length) {
            if (showbuttonborder == 1) {
                arrayofli[i].style.border = "3px solid #" + colors[3];
            }
            i += 1;
        }
    }
    if (screencontentvalue == 2) {
        document.getElementById("bod").style.backgroundColor = ("#" + colors[0]);
        document.getElementById("bod").style.color = colors[4];
        document.getElementById("main").style.backgroundColor = ("#" + colors[1]);
        document.getElementById("main").style.height = "90%"
        document.getElementById("headingblock").textContent = ("My Resume");
        document.getElementById("headingblock").style.backgroundColor = ("#" + colors[2]);
        document.getElementById("aboutme").style.display = "none";
        document.getElementById("resume").style.display = "block";
        document.getElementById("resumeli").style.display = "block";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("hobbieli").style.display = "none";
        document.getElementById("comserve").style.display = "none";
        document.getElementById("comserveli").style.display = "none";
        document.getElementById("home").style.display = "none";
        
        a = 0;
        while (a < resumel.length) {
            document.getElementById("resumeliitem" + a).style.display = "block";
            document.getElementById("resumeliitem" + a).textContent = resumel[a];
            a += 1;
        }

        i = 0;
        arrayofli = document.getElementsById("menuli");
        while (i < arrayofli.length) {
            if (showbuttonborder == 1) {
                arrayofli[i].style.border = "3px solid #" + colors[3];
            }
            i += 1;
        }
    }
    if (screencontentvalue == 3) {
        document.getElementById("bod").style.backgroundColor = ("#" + colors[0]);
        document.getElementById("bod").style.color = colors[4];
        document.getElementById("main").style.backgroundColor = ("#" + colors[1]);
        document.getElementById("main").style.height = "90%"
        document.getElementById("headingblock").textContent = ("My Hobbies");
        document.getElementById("headingblock").style.backgroundColor = ("#" + colors[2]);
        document.getElementById("aboutme").style.display = "none";
        document.getElementById("resume").style.display = "none";
        document.getElementById("resumeli").style.display = "none";
        document.getElementById("hobbies").style.display = "block";
        document.getElementById("hobbieli").style.display = "block";
        document.getElementById("comserve").style.display = "none";
        document.getElementById("comserveli").style.display = "none";
        document.getElementById("home").style.display = "none";

        a = 0;
        while (a < hobbiel.length) {
            document.getElementById("hobbieliitem" + a).style.display = "block";
            document.getElementById("hobbieliitem" + a).textContent = hobbiel[a];
            a += 1;
        }

        i = 0;
        arrayofli = document.getElementsById("menuli");
        while (i < arrayofli.length) {
            if (showbuttonborder == 1) {
                arrayofli[i].style.border = "3px solid #" + colors[3];
            }
            i += 1;
        }
    }
    if (screencontentvalue == 4) {
        document.getElementById("bod").style.backgroundColor = ("#" + colors[0]);
        document.getElementById("bod").style.color = colors[4];
        document.getElementById("main").style.backgroundColor = ("#" + colors[1]);
        document.getElementById("main").style.height = "90%"
        document.getElementById("headingblock").textContent = ("My Community Service Projects");
        document.getElementById("headingblock").style.backgroundColor = ("#" + colors[2]);
        document.getElementById("aboutme").style.display = "none";
        document.getElementById("resume").style.display = "none";
        document.getElementById("resumeli").style.display = "none";
        document.getElementById("hobbies").style.display = "none";
        document.getElementById("hobbieli").style.display = "none";
        document.getElementById("comserve").style.display = "block";
        document.getElementById("comserveli").style.display = "block";
        document.getElementById("home").style.display = "none";

        a = 0;
        while (a < comservel.length) {
            document.getElementById("comserveliitem" + a).style.display = "block";
            document.getElementById("comserveliitem" + a).textContent = comservel[a];
            a += 1;
        }

        i = 0;
        arrayofli = document.getElementsById("menuli");
        while (i < arrayofli.length) {
            if (showbuttonborder == 1) {
                arrayofli[i].style.border = "3px solid #" + colors[3];
            }
            i += 1;
        }
    }
}

function qsp() {
    rawasearch = location.search;
    rawascii = rawasearch.replace('?', '');
    ascii = rawascii.split('|');
    i = 0;
    qstring = ["", ""];
    while (i < ascii.length) {
        qstring[i] = String.fromCharCode(ascii[i]);
        i += 1;
    }
    qstr = qstring.join("");
    qs = qstr.split("-l");
    if (qs.length == 11){
        colors[0] = qs[0];
        colors[1] = qs[1];
        colors[2] = qs[2];
        colors[3] = qs[3];
        colors[4] = qs[4];
        namevar = qs[5];
        showbuttonborder = qs[6];
        aboutmep = qs[7];
        resumel = qs[8].split("~");
        hobbiel = qs[9].split("~");
        comservel = qs[10].split("~");
    } else {
        alert("Invalid Link");
    }
}


// ?067|053|068|054|068|056|045|108|068|054|070|057|068|068|045|108|057|057|070|055|065|066|045|108|065|066|068|070|055|053|045|108|054|048|054|057|053|067|045|108|075|121|108|101|045|108|049|045|108|116|104|105|115|032|105|115|032|097|032|112|097|114|097|103|114|097|112|104|032|097|098|111|117|116|032|109|101|044|032|116|104|105|115|032|105|115|032|097|032|112|097|114|097|103|114|097|112|104|032|097|098|111|117|116|032|109|101|044|032|116|104|105|115|032|105|115|032|097|032|112|097|114|097|103|114|097|112|104|032|097|098|111|117|116|032|109|101|044|032|116|104|105|115|032|105|115|032|097|032|112|097|114|097|103|114|097|112|104|032|097|098|111|117|116|032|109|101|045|108|105|032|104|097|118|101|032|101|097|116|101|110|032|049|048|048|032|098|117|114|114|105|116|111|115|126|105|032|104|097|118|101|032|107|105|108|108|101|100|032|049|048|048|032|112|101|111|112|108|101|126|105|032|104|097|118|101|032|100|105|101|100|032|052|032|116|105|109|101|115|126|105|032|097|109|032|115|104|111|114|116|045|108|105|032|108|105|107|101|032|116|111|032|100|105|101|126|105|032|108|105|107|101|032|116|111|032|107|105|108|108|032|112|101|111|112|108|101|126|105|032|108|105|107|101|032|116|111|032|112|114|111|103|114|097|109|126|105|032|108|111|118|101|032|109|114|032|108|111|111|109|105|115|039|115|032|099|108|097|115|115|045|108|105|032|099|108|101|097|110|032|114|111|097|100|115|126|105|032|099|108|101|097|110|032|114|105|118|101|114|115