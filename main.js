const length = 1643
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if ("id" in params) {
    var id = params.id
} else {
    var id = Math.floor(Math.random() * length);
}
async function loadFile() {
    var response = await fetch("quotes.json");
    var data = await response.json();
    var text = data[id].text;
    var author = data[id].author;
    if (author === null) {author = "someone"}
    document.getElementById("name").innerHTML = "Like " + author + " said,";
    document.getElementById("text").innerHTML = '"' + text + '"';
}
loadFile()
var namer = String(Math.floor(Math.random() * 5) + 1) + ".svg";
document.body.style.backgroundImage = "url(" + namer + ")";
var button = document.getElementById("share")
button.addEventListener("click", share)
function share() {
    navigator.clipboard.writeText('jonaspetri.github.io/?id=' + id)
}