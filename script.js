window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises!");
}

/*når der klikkes på buttom (knappen), skiftes der mellem hide og show - toggle gør dette*/
function myFunction() {
    console.log("Tryk på menu");
    document.getElementById("myDropdown").classList.toggle("show");
}
