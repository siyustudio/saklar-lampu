// JS SAKLAR RUANG KELUARGA
function saklar() {
    let toggle1 = document.getElementById("toggle1")
    let toggle2 = document.getElementById("toggle2")
    let toggle3 = document.getElementById("toggle3")

    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";
    }
    else {
        lampu1.src = "assets/images/off.gif";
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
    }
    else {
        lampu2.src = "assets/images/off.gif";
    }

    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif";
    }
    else {
        lampu3.src = "assets/images/off.gif";
    }
}

function toggleRuangan() {
    const status = document.getElementById("toggleLampu").checked

    if (status) {
        document.getElementById("lampu1").src = "assets/images/on.gif";
        document.getElementById("lampu2").src = "assets/images/on.gif";
        document.getElementById("lampu3").src = "assets/images/on.gif";

    } else {
        document.getElementById("lampu1").src = "assets/images/off.gif";
        document.getElementById("lampu2").src = "assets/images/off.gif";
        document.getElementById("lampu3").src = "assets/images/off.gif";
    }
}


// JS SAKLAR RUANG MAKAN
function saklarMakan() {
    let toggleMakan1 = document.getElementById("toggleMakan1")

    let lampuMakan1 = document.getElementById("lampuMakan1");

    if (toggleMakan1.checked) {
        lampuMakan1.src = "assets/images/on.gif";
    }
    else {
        lampuMakan1.src = "assets/images/off.gif";
    }
}

function toggleRuanganMakan() {
    const status = document.getElementById("toggleLampuMakan").checked

    if (status) {
        document.getElementById("lampuMakan1").src = "assets/images/on.gif";

    } else {
        document.getElementById("lampuMakan1").src = "assets/images/off.gif";
    }
}


// JS SAKLAR RUANG TIDUR
function saklarTidur() {
    let toggleTidur1 = document.getElementById("toggleTidur1")
    let toggleTidur2 = document.getElementById("toggleTidur2")

    let lampuTidur1 = document.getElementById("lampuTidur1");
    let lampuTidur2 = document.getElementById("lampuTidur2");

    if (toggleTidur1.checked) {
        lampuTidur1.src = "assets/images/on.gif";
    }
    else {
        lampuTidur1.src = "assets/images/off.gif";
    }
    if (toggleTidur2.checked) {
        lampuTidur2.src = "assets/images/on.gif";
    }
    else {
        lampuTidur2.src = "assets/images/off.gif";
    }
}

function toggleRuanganTidur() {
    const status = document.getElementById("toggleLampuTidur").checked

    if (status) {
        document.getElementById("lampuTidur1").src = "assets/images/on.gif";
        document.getElementById("lampuTidur2").src = "assets/images/on.gif";

    } else {
        document.getElementById("lampuTidur1").src = "assets/images/off.gif";
        document.getElementById("lampuTidur2").src = "assets/images/off.gif";
    }
}

// JS SAKLAR RUANG TAMU
function saklarTamu() {
    let toggleTamu1 = document.getElementById("toggleTamu1")
    let toggleTamu2 = document.getElementById("toggleTamu2")
    let toggleTamu3 = document.getElementById("toggleTamu3")
    let toggleTamu4 = document.getElementById("toggleTamu4")

    let lampuTamu1 = document.getElementById("lampuTamu1");
    let lampuTamu2 = document.getElementById("lampuTamu2");
    let lampuTamu3 = document.getElementById("lampuTamu3");
    let lampuTamu4 = document.getElementById("lampuTamu4");


    if (toggleTamu1.checked) {
        lampuTamu1.src = "assets/images/on.gif";
    }
    else {
        lampuTamu1.src = "assets/images/off.gif";
    }
    if (toggleTamu2.checked) {
        lampuTamu2.src = "assets/images/on.gif";
    }
    else {
        lampuTamu2.src = "assets/images/off.gif";
    }
    if (toggleTamu3.checked) {
        lampuTamu3.src = "assets/images/on.gif";
    }
    else {
        lampuTamu3.src = "assets/images/off.gif";
    }
    if (toggleTamu4.checked) {
        lampuTamu4.src = "assets/images/on.gif";
    }
    else {
        lampuTamu4.src = "assets/images/off.gif";
    }
}

function toggleRuanganTamu() {
    const status = document.getElementById("toggleLampuTamu").checked

    if (status) {
        document.getElementById("lampuTamu1").src = "assets/images/on.gif";
        document.getElementById("lampuTamu2").src = "assets/images/on.gif";
        document.getElementById("lampuTamu3").src = "assets/images/on.gif";
        document.getElementById("lampuTamu4").src = "assets/images/on.gif";

    } else {
        document.getElementById("lampuTamu1").src = "assets/images/off.gif";
        document.getElementById("lampuTamu2").src = "assets/images/off.gif";
        document.getElementById("lampuTamu3").src = "assets/images/off.gif";
        document.getElementById("lampuTamu4").src = "assets/images/off.gif";
    }
}