
const loginRadio = document.getElementById("login");
const singupRadio = document.getElementById("singup");
const logDiv = document.querySelector(".log");
const singupDiv = document.querySelector(".singup");
loginRadio.addEventListener("click", change);
singupRadio.addEventListener("click", change2);
function change() {
    if (this.checked)
    {
        logDiv.style.display = "flex";
        singupDiv.style.display = "none";
    }
}
function change2() {
    if (this.checked)
    {
        logDiv.style.display = "none";
        singupDiv.style.display = "flex";
    }

    // else {
    //     // If not checked, show the log div
    //     singupDiv.style.display = "none";
    //     logDiv.style.display = "flex";
    // }
}
