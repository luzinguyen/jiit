function button() {
    /* input name 1, name 2 */
    var name1 = document.getElementById("name1").value; // name 1
    var name2 = document.getElementById("name2").value; // name2
    if (name1.length == "") {
        document.getElementById("name1").style.borderColor = "red";
    } else {
        document.getElementById("name1").style.borderColor = "green";
    }
    if (name2.length == "") {
        document.getElementById("name2").style.borderColor = "red";
    } else {
        document.getElementById("name2").style.borderColor = "green";

    }
    if (name1.length != "" & name2.length != "") {
        document.getElementById("span1").style.backgroundColor = "green";
    } else {
        document.getElementById("span1").style.backgroundColor = "red";
    }

    /* input name 3, name 4 */
    var name3 = document.getElementById("name3").value; // name3
    var name4 = document.getElementById("name4").value; // name4

    if (name3.length == "") {
        document.getElementById("name3").style.borderColor = "red";
    } else {
        document.getElementById("name3").style.borderColor = "green";
    }
    if (name4.length == "") {
        document.getElementById("name4").style.borderColor = "red";
    } else {
        document.getElementById("name4").style.borderColor = "green";

    }
    if (name3.length != "" & name4.length != "") {
        document.getElementById("span2").style.backgroundColor = "green";
    } else {
        document.getElementById("span2").style.backgroundColor = "red";
    }

    /* input post & address */
    var post_number1 = document.getElementById("post1").value;
    var post_number2 = document.getElementById("post2").value;
    var address = document.getElementById("address").value;
    if (post_number1.length == "") {
        document.getElementById("post1").style.borderColor = "red";
    } else {
        document.getElementById("post1").style.borderColor = "green";
    }
    if (post_number2.length == "") {
        document.getElementById("post2").style.borderColor = "red";
    } else {
        document.getElementById("post2").style.borderColor = "green";
    }
    if (address.length == "") {
        document.getElementById("address").style.borderColor = "red";
    } else {
        document.getElementById("address").style.borderColor = "green";
    }

    /* neu so buu dien va dia chi chua dang nhap thi hien thi bao loi */
    if (post_number1.length != "" & post_number2.length != "" & address.length != "") {
        document.getElementById("span3").style.backgroundColor = "green";
    } else {
        document.getElementById("span3").style.backgroundColor = "red";
    }

    /* input phone */
    var phone = document.getElementById("phone").value;
    if (phone.length == "") {
        document.getElementById("phone").style.borderColor = "red";
        document.getElementById("span4").style.backgroundColor = "red";
    } else {
        document.getElementById("phone").style.borderColor = "green";
        document.getElementById("span4").style.backgroundColor = "green";
    }
    /* input email */
    var email = document.getElementById("email").value;
    if (email.length == "") {
        document.getElementById("email").style.borderColor = "red";
        document.getElementById("span5").style.backgroundColor = "red";
    } else {
        document.getElementById("email").style.borderColor = "green";
        document.getElementById("span5").style.backgroundColor = "green";
    }

    /* input contact */
    var contact = document.getElementById("contact").value;
    if (contact.length == "") {
        document.getElementById("contact").style.borderColor = "red";
        document.getElementById("span6").style.backgroundColor = "red";
    } else if (contact.length >= 500) {
        document.getElementById("contact").style.borderColor = "red";
        document.getElementById("span6").style.backgroundColor = "red";
    } else {
        document.getElementById("contact").style.borderColor = "green";
        document.getElementById("span6").style.backgroundColor = "green";
    }

}