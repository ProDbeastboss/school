basecode = "<html>%^|!^3%5?@<3<script>%^|!^3%5?@<3%5?@<3function clicked() {%^|!^3%5?@<3%5?@<3%5?@<3alert('hi');%^|!^3%5?@<3%5?@<3}%^|!^3%5?@<3%5?@<3function runnnn() {%^|!^3%5?@<3%5?@<3%5?@<3alert('ghey');%^|!^3%5?@<3%5?@<3}%^|!^3%5?@<3</script>%^|!^3%^|!^3%5?@<3<head>%^|!^3%5?@<3%5?@<3<style>%^|!^3%5?@<3%5?@<3%5?@<3#text {%^|!^3%5?@<3%5?@<3%5?@<3%5?@<3color: blue;%^|!^3%5?@<3%5?@<3%5?@<3}%^|!^3%5?@<3%5?@<3%5?@<3#text2 {%^|!^3%5?@<3%5?@<3%5?@<3%5?@<3font-size: 60;%^|!^3%5?@<3%5?@<3%5?@<3%5?@<3color: blue;%^|!^3%5?@<3%5?@<3%5?@<3}%^|!^3%5?@<3%5?@<3%5?@<3body {%^|!^3%5?@<3%5?@<3%5?@<3%5?@<3background-color: orange;%^|!^3%5?@<3%5?@<3%5?@<3}%^|!^3%5?@<3%5?@<3</style>%^|!^3%5?@<3</head>%^|!^3%^|!^3%5?@<3<body>%^|!^3%5?@<3%5?@<3<div id='text' onclick='clicked()'>%^|!^3%5?@<3%5?@<3%5?@<3hi%^|!^3%5?@<3%5?@<3</div>%^|!^3%5?@<3%5?@<3<div id='text2' onclick='runnnn()'>%^|!^3%5?@<3%5?@<3%5?@<3yolo%^|!^3%5?@<3%5?@<3<div>%^|!^3%5?@<3</body>%^|!^3</html>";
code = "";

function save() {
    download("index.html", document.getElementById("visibletext").value);
}

function addcookie(text) {
    document.cookie = ("rnbpiwrnbjirbnwrjifkvd=" + encryptor(text, "encode") + "; expires=Wed, 31 Dec 3000 11:59:00 UTC; SameSite=Lax; path=/");
    console.log("uploaded:   " + ("rnbpiwrnbjirbnwrjifkvd=" + encryptor(text, "encode") + "; expires=Wed, 31 Dec 3000 11:59:00 UTC; SameSite=None; path=/"));
}

function loadpage() {
    code = document.cookie.match(/\<html>.+?\<\/html>/gm);
    console.log(code[0]);
    if (code[0] != "") {
        document.getElementById("website").srcdoc = encryptor(code[0], 'decode');
        document.getElementById("visibletext").value = encryptor(code[0], 'decode');
    } else {
        document.getElementById("website").srcdoc = encryptor(basecode, 'decode');
        document.getElementById("visibletext").value = encryptor(basecode, 'decode');
        console.log('it was empty... sorry');
    }
    
}

function load() {
    addcookie(document.getElementById("visibletext").value);
    document.getElementById("website").srcdoc = document.getElementById("visibletext").value;
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function encryptor(text, action) {
    if (action == "encode") {

        return((((text.split("\n")).join("%^|!^3")).replaceAll("    ", "%5?@<3")).replaceAll(/;/g, "%53^^!<"));

    } else if (action == 'decode') {

        return(((text.replaceAll("%^|!^3", "\n")).replaceAll("%5?@<3", "    ")).replaceAll("%53^^!<", ";"));

    }
}