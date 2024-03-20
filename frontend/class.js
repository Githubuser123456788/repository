const vidRadio = document.getElementById("video");
const pdfRadio = document.getElementById("pdf");
const testRadio = document.getElementById("paper");
const vidDiv = document.querySelector(".one");
const pdfDiv = document.querySelector(".two");
const testDiv = document.querySelector(".three");
vidRadio.addEventListener("click",function(){
    if (this.checked)
    {
        vidDiv.style.display = "flex";
        pdfDiv.style.display = "none";
        testDiv.style.display = "none";
    }
})
pdfRadio.addEventListener("change",function(){
    if (this.checked)
    {
        vidDiv.style.display = "none";
        pdfDiv.style.display ="flex";
        testDiv.style.display = "none";
    }
})
testRadio.addEventListener("change",function(){
    if (this.checked)
    {
        vidDiv.style.display = "none";
        pdfDiv.style.display = "none";
        testDiv.style.display = "flex";
    }
})