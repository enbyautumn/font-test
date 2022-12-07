const TextToSVG = require('text-to-svg');

const attributes = {fill: 'white', stroke: 'black', 'stroke-width': '.75'};
const options = {x: 0, y: 0, fontSize: 16, anchor: 'top', attributes: attributes};

const text = "THAT IMPACT FONT"

const textToSVG = TextToSVG.loadSync('./impact.otf');
const svg = textToSVG.getSVG(text, options);
console.log(svg);

// write to file
const fs = require('fs');
// fs.writeFileSync('hello.svg', `<svg xmlns="http://www.w3.org/2000/svg" x="1">
// ${svg}
// </svg>`);

let widthRE = /width="(.+?)"/;
let heightRE = /height="(.+?)"/;
let width = widthRE.exec(svg);
let height = heightRE.exec(svg);
// let width = svg.match(widthRE)[1];
// let height = svg.match(heightRE)[1];
// let newSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="${parseFloat(width[1]) + 1}" height="${parseFloat(height[1])}">${svg}</svg>`;
let newSVG = svg.replace(/width="(.+?)"/, `width="${parseFloat(width[1]) + 1}"`).replace(/height="(.+?)"/, `height="${parseFloat(height[1])}"`)
fs.writeFileSync('hello.svg', newSVG);

// fs.writeFileSync('hello.svg', svg);

let a = textToSVG.getMetrics(text, options)

console.log(a.width / a.height); // aspect-ratio: 

// https://codebeautify.org/svg-to-base64-converter