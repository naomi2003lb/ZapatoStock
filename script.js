function toggleNav() {
    var sidebar = document.getElementById("sidebar");
    var openbtn = document.querySelector(".openbtn");

    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
        openbtn.classList.add("hidden");  // Oculta el botón de menú
    } else {
        sidebar.style.left = "-250px";
        openbtn.classList.remove("hidden");  // Muestra el botón de menú
    }
}
