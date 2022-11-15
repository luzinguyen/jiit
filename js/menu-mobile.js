function myFunction(x) {
    var ab = x.classList.toggle("change");
    if (ab) {
        document.getElementById("nav").style.display = "block";
        return;
    } else {
        document.getElementById("nav").style.display = "none";
        return;
    }
}