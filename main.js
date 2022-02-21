import "./style.css";
import svg1 from './1.svg'
import svg2 from './2.svg'
import svg3 from './3.svg'
import svg4 from './4.svg'
import svg5 from './5.svg'
import svg6 from './6.svg'
import quotes from './quotes.json'

const svgs = [
  svg1, svg2, svg3, svg4, svg5, svg6
]

const tooltip = document.getElementById('tooltip')

const length = 1643
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if ("id" in params) {
  var paramExists = true
  var id = params.id
} else {
  var paramExists = false
  var id = Math.floor(Math.random() * length);
}
async function loadFile() {
  var text = quotes[id].text;
  var author = quotes[id].author;
  if (author === null) {author = "someone"}
  document.getElementById("name").innerHTML = `Like ${author} said,`;
  document.getElementById("text").innerHTML = `"${text}"`;
}
loadFile()
var namer = String(Math.floor(Math.random() * 6));
document.body.style.backgroundImage = `url('${svgs[namer]}')`;
var button = document.getElementById("share")
button.addEventListener("click", () => {
  if (paramExists) {navigator.clipboard.writeText(window.location.href)} else {navigator.clipboard.writeText(`${window.location.href}?id=${id}`)}
})
button.addEventListener('mouseover', () => {
  tooltip.style.opacity = 100
})
button.addEventListener('mouseleave', () => {
  tooltip.style.opacity = 0
})