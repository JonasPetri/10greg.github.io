var url = "https://quotes.rest/qod?language=en";
url = "https://type.fit/api/quotes";
async function request(url) {
    var response = await fetch(url)
    .then(response => response.text(response) );
    response = String(response);
    response = response.replace(/\n/g, ' ');
    response = JSON.parse(response);
    length = response.length;
    var random = Math.floor(Math.random() * length);
    var text = response[random].text;
    var author = response[random].author;
    console.log(text);
    console.log(author);
    if (author == null) {
        author = "someone"
    }
    document.getElementById("name").innerHTML = "Like " + author + " said,";
    document.getElementById("text").innerHTML = '"' + text + '"';
}
request(url);
var namer = String(Math.floor(Math.random() * 5) + 1) + ".svg";
document.body.style.backgroundImage = "url(" + namer + ")";