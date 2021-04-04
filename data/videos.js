var DomParser = require('dom-parser');

const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;

// Desarrollar una funcion que me devuelva el total de segundos de los videos de tipo Redux
// Transformar la cadena en objetos que pueda trabajar con los metodos vistos hasta ahora.

let html = parseHTML();
list = convertObjects(html)

getDuration(list, 'Redux Video')

function getDuration(list, videoType) {
  return list.reduce((x,y) => y.type === videoType ? x + y.duration : x, 0)
}

function convertObjects(html) {
  let list = [];

  list = html.getElementsByTagName('li').map(e => ({
    type: e.textContent,
    duration: convertSeconds(e.getAttribute('data-time'))
  }));

  return list;
}

function parseHTML() {
  let parser = new DomParser();
  let dom = parser.parseFromString(str, "text/html");

  return dom;
}

function convertSeconds(timeString) {
  let splitted = timeString.split(":");
  return parseInt(splitted[0], 10) * 60 + parseInt(splitted[1], 10);
}