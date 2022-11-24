function ketqua() {
    var number = document.getElementById("numberketqua").value;
    if (number == "") {
        document.getElementById("nhapsobaodanh").innerHTML = "受験番号を入力してください。";
        document.getElementById("img_ketqua").src = "";
    } else if (number == 20086) {
        document.getElementById("nhapsobaodanh").innerHTML = "合格、おめでとうございます。";
        document.getElementById("img_ketqua").src = "../img/gokaku.png";
    } else {
        document.getElementById("nhapsobaodanh").innerHTML = "残念、不合格です。";
        document.getElementById("img_ketqua").src = "../img/fugoukaku.png";
    }
    console.log(number);
}