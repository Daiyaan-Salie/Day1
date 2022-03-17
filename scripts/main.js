function myFunction() {

    var txt;

    if (confirm("Please press a button!")) {

        txt = "That's a Yes!"

    } else {

        txt = "That's a pity"

    }

    document.getElementById("demo").innerHTML = txt;

}